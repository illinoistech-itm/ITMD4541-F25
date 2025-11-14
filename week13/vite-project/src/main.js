import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const headline = document.createElement("h1");
headline.textContent = "Hello Vite!!!!!!!!";

document.querySelector("#app").append(headline);

setupCounter(document.querySelector("#counter"));
