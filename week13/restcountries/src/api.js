import { log } from "./log";
import { displayCountries } from "./ui";

export async function fetchCountries() {
  try {
    const endpoint =
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,languages,currencies,area";
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

export function filterCountries(allCountries, searchInput, regionFilter) {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  log("Search input changed:", searchTerm);
  log("Region filter changed:", selectedRegion);

  const filteredCountries = allCountries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm);
    const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  // Sort countries alphabetically by name
  filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  displayCountries(filteredCountries);
}
