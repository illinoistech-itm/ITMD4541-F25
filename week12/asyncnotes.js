console.log("log 1");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("log 2", data);
  });

async function fetchData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("log 2", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1").then();

console.log("log 3");

async function log() {
  return "log 4";
}

const val = log();
typeof val; // "object" (a Promise)

log().then((result) => console.log(result));

const res = await log();

async function getLogMsg() {
  const result = await log();
  return result;
}
