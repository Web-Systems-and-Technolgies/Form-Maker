const deleteElement = () => {
  let display = document.querySelector("#display");
  let lastChild = display.lastElementChild;
  if (lastChild) {
    display.removeChild(lastChild);
  }
};

const insert = () => {
  let type = document.querySelector("#type").value;
  let label = document.querySelector("#label").value;

  switch (type) {
    case "text":
      appendText(label);
      break;
    case "button":
      appendButton(label);
      break;
    case "checkbox":
      appendCheckbox(label);
      break;
    case "radio":
      appendRadio(label);
      break;
    case "file":
      appendFile(label);
      break;
    case "date":
      appendDate(label);
      break;
    case "whitespace":
      appendWhitespace(label);
      break;
    case "email":
      appendEmail(label);
      break;
    case "password":
      appendPassword(label);
      break;
  }
};

const appendEmail = (label = "Default") => {
  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  let elem = document.createElement("input");
  elem.setAttribute("type", "email");
  elem.setAttribute("id", label);
  elem.setAttribute("name", label);
  elem.setAttribute("placeholder", "email");
  elem.setAttribute("class", "form-control mt-2 ");

  let container = document.createElement("div");
  container.setAttribute("class", "form-group");
  container.append(elemLabel, elem);

  document.querySelector("#display").append(container);
};

const appendPassword = (label = "Default") => {
  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  let elem = document.createElement("input");
  elem.setAttribute("type", "password");
  elem.setAttribute("id", label);
  elem.setAttribute("name", label);
  elem.setAttribute("class", "form-control mt-2");

  let container = document.createElement("div");
  container.setAttribute("class", "form-group");
  container.append(elemLabel, elem);

  document.querySelector("#display").append(container);
};

const appendText = (label = "Default") => {
  let elem = document.createElement("input");
  elem.setAttribute("type", "text");
  elem.setAttribute("placeholder", label);
  elem.setAttribute("class", "form-control mt-2");
  document.querySelector("#display").append(elem);
};

const appendButton = (label = "Default") => {
  let elem = document.createElement("button");
  elem.setAttribute("class", "btn btn-primary mt-2 form-control");
  elem.textContent = label;
  document.querySelector("#display").append(elem);
};

const appendCheckbox = (label = "Default") => {
  let elem = document.createElement("input");
  elem.setAttribute("type", "checkbox");
  elem.setAttribute("id", label);
  elem.setAttribute("name", label);
  elem.setAttribute("class", "form-check-input mt-2");

  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  let container = document.createElement("div");
  container.setAttribute("class", "form-check");
  container.append(elem, elemLabel);

  document.querySelector("#display").append(container);
};

const appendRadio = (label = "Default") => {
  let elem = document.createElement("input");
  elem.setAttribute("type", "radio");
  elem.setAttribute("id", label);
  elem.setAttribute("name", "radio-group");
  elem.setAttribute("class", "form-check-input mt-2");

  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  let container = document.createElement("div");
  container.setAttribute("class", "form-check");
  container.append(elem, elemLabel);

  document.querySelector("#display").append(container);
};

const appendFile = (label = "Default") => {
  let fileInputContainer = document.createElement("div");
  fileInputContainer.setAttribute("class", "custom-file mt-2");

  let elem = document.createElement("input");
  elem.setAttribute("type", "file");
  elem.setAttribute("class", "custom-file-input");
  elem.setAttribute("id", label);
  elem.setAttribute("name", label);

  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("class", "custom-file-label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  fileInputContainer.append(elem, elemLabel);

  document.querySelector("#display").append(fileInputContainer);
};

const appendDate = (label = "Default") => {
  let elemLabel = document.createElement("label");
  elemLabel.setAttribute("for", label);
  elemLabel.textContent = label;

  let elem = document.createElement("input");
  elem.setAttribute("type", "date");
  elem.setAttribute("id", label);
  elem.setAttribute("name", label);
  elem.setAttribute("class", "form-control mt-2 ");

  let container = document.createElement("div");
  container.setAttribute("class", "form-group");
  container.append(elemLabel, elem);

  document.querySelector("#display").append(container);
};

const appendWhitespace = (label = "Default") => {
  let elemP = document.createElement("p");
  elemP.setAttribute(
    "class",
    "border border-1 border-dark border-bottom-0 border-start-0 border-end-0 mt-3 p-2"
  );
  elemP.textContent = label;

  document.querySelector("#display").append(elemP);
};
