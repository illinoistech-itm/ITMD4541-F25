import { log } from "./log";
import { displayCountries } from "./ui";
import { fetchCountries, filterCountries } from "./api";

log("Hello, Restcountries!");

let allCountries = [];

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
    content.innerHTML =
      "<div class='error'>Error fetching countries. Please try again later.</div>";
    return;
  }

  displayCountries(allCountries);
});
