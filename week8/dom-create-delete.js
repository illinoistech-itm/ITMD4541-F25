document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");

  let controls = document.createElement("div");
  controls.id = "controlsWrapper";
  controls.style.backgroundColor = "#aaaaaa";
  controls.style.padding = "20px";

  let textIn = document.createElement("input");
  textIn.setAttribute("type", "text");
  textIn.id = "textin";

  let textLabel = document.createElement("label");
  textLabel.setAttribute("for", "textin");
  textLabel.appendChild(document.createTextNode("Enter Text: "));

  controls.appendChild(textLabel);
  controls.appendChild(textIn);

  let colorSelect = document.createElement("select");
  colorSelect.id = "colorSelect";

  let optRed = document.createElement("option");
  optRed.setAttribute("value", "#ff0000");
  optRed.appendChild(document.createTextNode("Red"));
  colorSelect.appendChild(optRed);

  let optGreen = document.createElement("option");
  optGreen.setAttribute("value", "#00ff00");
  optGreen.appendChild(document.createTextNode("Green"));
  colorSelect.appendChild(optGreen);

  let optBlue = document.createElement("option");
  optBlue.setAttribute("value", "#0000ff");
  optBlue.appendChild(document.createTextNode("Blue"));
  colorSelect.appendChild(optBlue);

  controls.appendChild(colorSelect);

  let saveBtn = document.createElement("button");
  saveBtn.id = "saveBtn";
  saveBtn.appendChild(document.createTextNode("Save"));
  saveBtn.addEventListener("click", saveHandler);
  controls.appendChild(saveBtn);

  document.getElementById("root").appendChild(controls);

  let list = document.createElement("ul");
  list.id = "list";
  list.style.listStyleType = "none";
  list.style.padding = "0";
  document.getElementById("root").appendChild(list);

  function saveHandler() {
    console.log("save clicked");

    let text = document.getElementById("textin").value.trim();
    let color = document.getElementById("colorSelect").value;

    console.log(`Text: ${text}, Color: ${color}`);

    if (text === "") {
      alert("Text can not be empty!");
    } else {
      let item = document.createElement("li");
      let img = document.createElement("img");
      img.src = "close.png";
      img.style.width = "20px";
      img.style.height = "20px";
      img.setAttribute("alt", "Delete Item Icon");
      img.style.cursor = "pointer";
      img.addEventListener("click", function (evt) {
        console.log("img clicked");
        console.log(evt);
        //evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
        //this.parentNode.parentNode.removeChild(this.parentNode);
        evt.target.parentNode.remove();
      });
      item.appendChild(img);
      item.appendChild(document.createTextNode(text));
      item.style.color = color;
      document.getElementById("list").appendChild(item);
      document.getElementById("textin").value = "";
      document.getElementById("colorSelect").selectedIndex = 0;
    }
  }
}); // end DOMContentLoaded
