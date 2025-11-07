import { apiListUrl } from "./api.js";

const root = document.getElementById("root");

const contentWrapper = document.createElement("div");
contentWrapper.id = "content-wrapper";

const header = document.createElement("h1");
header.textContent = "Dog API Random Image Generator";
contentWrapper.appendChild(header);

const controlsWrapper = document.createElement("div");
controlsWrapper.id = "controls";
const select = document.createElement("select");
select.id = "breed-select";
const button = document.createElement("button");
button.id = "btn";
button.textContent = "Fetch Image";
controlsWrapper.append(select, button);
contentWrapper.appendChild(controlsWrapper);

const imageWrapper = document.createElement("div");
imageWrapper.id = "image-wrapper";
const dogimg = document.createElement("img");
dogimg.id = "dog-img";
dogimg.setAttribute("alt", "");
dogimg.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
imageWrapper.appendChild(dogimg);
contentWrapper.appendChild(imageWrapper);

root.appendChild(contentWrapper);

fetch(apiListUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const breedArray = Object.keys(data.message);
    breedArray.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      select.appendChild(option);
    });
    fetchImage();
  })
  .catch((error) => {
    console.error("Error fetching breed list:", error);
  });

// function fetchImage() {
//   console.log("Fetch Image Run");
//   const selectedBreed = select.value;
//   const imageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

//   fetch(imageUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       dogimg.src = data.message;
//       dogimg.alt = `A random image of a ${selectedBreed}`;
//     })
//     .catch((error) => {
//       console.error("Error fetching dog image:", error);
//     });
// }

async function fetchImage() {
  console.log("Fetch Image Run");
  const selectedBreed = select.value;
  const imageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

  try {
    const response = await fetch(imageUrl);
    const data = await response.json();
    console.log(data);
    dogimg.src = data.message;
    dogimg.alt = `A random image of a ${selectedBreed}`;
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}

button.addEventListener("click", fetchImage);
select.addEventListener("change", fetchImage);
