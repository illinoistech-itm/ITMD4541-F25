import { log } from "./log";

export function createCountryCard(country) {
  const countryCard = document.createElement("div");
  countryCard.className = "country-card";
  countryCard.addEventListener("click", () => {
    showCountryDetails(country);
  });

  const population = country.population
    ? country.population.toLocaleString()
    : "N/A";
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

export function displayCountries(countries) {
  const content = document.getElementById("content");
  const resultsCount = document.getElementById("resultsCount");

  resultsCount.textContent = `${countries.length} ${
    countries.length === 1 ? "country" : "countries"
  }`;

  if (countries.length === 0) {
    content.innerHTML =
      "<div class='no-results'>No countries found. Try a different query.</div>";
    return;
  }

  const grid = document.createElement("div");
  grid.className = "countries-grid";

  // do stuff
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

  const population = country.population
    ? country.population.toLocaleString()
    : "N/A";
  const capital = country.capital ? country.capital.join(", ") : "N/A";
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";
  const region = country.region || "N/A";
  const subregion = country.subregion || "N/A";
  const area = country.area ? country.area.toLocaleString() + " km²" : "N/A";

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
