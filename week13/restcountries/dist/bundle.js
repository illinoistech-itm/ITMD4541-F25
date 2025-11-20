(() => {
  // src/log.js
  var log = console.log.bind(
    window,
    "%cLOG:",
    "color: white; background-color: red;"
  );

  // src/ui.js
  function createCountryCard(country) {
    const countryCard = document.createElement("div");
    countryCard.className = "country-card";
    countryCard.addEventListener("click", () => {
      showCountryDetails(country);
    });
    const population = country.population ? country.population.toLocaleString() : "N/A";
    const region = country.region || "N/A";
    const capital = country.capital ? country.capital[0] : "N/A";
    countryCard.innerHTML = `
  <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="country-flag" />
  <div class="country-info">
    <div class="country-name">${country.name.common}</div>
    <div class="country-detail"><strong>Population:</strong> ${population}</div>
    <div class="country-detail"><strong>Region:</strong> ${region}</div>
    <div class="country-detail"><strong>Capital:</strong> ${capital}</div>
  </div>
  `;
    return countryCard;
  }
  function displayCountries(countries) {
    const content = document.getElementById("content");
    const resultsCount = document.getElementById("resultsCount");
    resultsCount.textContent = `${countries.length} ${countries.length === 1 ? "country" : "countries"}`;
    if (countries.length === 0) {
      content.innerHTML = "<div class='no-results'>No countries found. Try a different query.</div>";
      return;
    }
    const grid = document.createElement("div");
    grid.className = "countries-grid";
    countries.forEach((country) => {
      grid.appendChild(createCountryCard(country));
    });
    content.innerHTML = "";
    content.appendChild(grid);
  }
  function showCountryDetails(country) {
    log("Country clicked:", country.name.common);
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const modalClose = document.getElementById("closeModal");
    const population = country.population ? country.population.toLocaleString() : "N/A";
    const capital = country.capital ? country.capital.join(", ") : "N/A";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
    const currencies = country.currencies ? Object.values(country.currencies).map((currency) => currency.name).join(", ") : "N/A";
    const region = country.region || "N/A";
    const subregion = country.subregion || "N/A";
    const area = country.area ? country.area.toLocaleString() + " km\xB2" : "N/A";
    modalBody.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common} flag" class="modal-flag">
                <div class="modal-info">
                    <h2 class="modal-title">${country.name.common}</h2>
                    <div class="modal-detail"><strong>Official Name:</strong> ${country.name.official}</div>
                    <div class="modal-detail"><strong>Capital:</strong> ${capital}</div>
                    <div class="modal-detail"><strong>Region:</strong> ${region}</div>
                    <div class="modal-detail"><strong>Subregion:</strong> ${subregion}</div>
                    <div class="modal-detail"><strong>Population:</strong> ${population}</div>
                    <div class="modal-detail"><strong>Area:</strong> ${area}</div>
                    <div class="modal-detail"><strong>Languages:</strong> ${languages}</div>
                    <div class="modal-detail"><strong>Currencies:</strong> ${currencies}</div>
                </div>
            `;
    modal.classList.add("active");
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.classList.remove("active");
      }
    });
  }

  // src/api.js
  async function fetchCountries() {
    try {
      const endpoint = "https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,languages,currencies,area";
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch countries.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch countries: " + error.message);
    }
  }
  function filterCountries(allCountries2, searchInput, regionFilter) {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;
    log("Search input changed:", searchTerm);
    log("Region filter changed:", selectedRegion);
    const filteredCountries = allCountries2.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
      const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
    filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    displayCountries(filteredCountries);
  }

  // src/index.js
  log("Hello, Restcountries!");
  var allCountries = [];
  window.addEventListener("DOMContentLoaded", async () => {
    log("DOM fully loaded and parsed");
    const searchInput = document.getElementById("searchInput");
    const regionSelect = document.getElementById("regionFilter");
    searchInput.addEventListener("input", () => {
      filterCountries(allCountries, searchInput, regionSelect);
    });
    regionSelect.addEventListener("change", () => {
      filterCountries(allCountries, searchInput, regionSelect);
    });
    try {
      allCountries = await fetchCountries();
      log("Fetched countries:", allCountries);
    } catch (error) {
      log("Error fetching countries:", error);
      const content = document.getElementById("content");
      content.innerHTML = "<div class='error'>Error fetching countries. Please try again later.</div>";
      return;
    }
    displayCountries(allCountries);
  });
})();
