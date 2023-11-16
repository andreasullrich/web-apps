"use strict";

const todos = document.querySelector("#btn-add");
const input = document.querySelector("#newTodo");
const toDoList = document.querySelector("#to-do-list");

const array = [];
function buttonClick() {
  /*wenn button gedrückt wird, dann speicher Inhalt im 
  Eingabefeld und füge diesen hinzu*/

  const inputtext = input.value;
  //checkbox
  //id
  array.push({ checkbox: false, description: inputtext });
  showNewArray();
}

todos.addEventListener("click", buttonClick);

function showNewArray() {
  for (const objects of array) {
    const toDoElement = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const description = document.createElement("label");
    description.textContent = objects.description;

    description.appendChild(checkbox);
    toDoElement.appendChild(description);
    toDoList.appendChild(toDoElement);
  }
}
