
let todoListElement = document.getElementById("todoListContainer");
let buttomElement = document.getElementById("addTodoButton");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1

    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

function onStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);

    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked");

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoListContainer.removeChild(todoElement);
}

function createApendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("ist-sty", "d-flex", "flex-row");
    todoListElement.appendChild(todoElement);

    let inputE = document.createElement("input");
    inputE.classList.add("checkbox-input");
    inputE.type = "checkbox";
    inputE.id = checkboxId;
    inputE.onclick = function() {
        onStatusChange(checkboxId, labelId);
    }

    todoElement.appendChild(inputE);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelE = document.createElement("label");
    labelE.setAttribute("for", checkboxId);
    labelE.classList.add("label-co");
    labelE.id = labelId;
    labelE.textContent = todo.text;
    labelContainer.appendChild(labelE);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-contain");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId)
    }
    deleteContainer.appendChild(deleteIcon);

}

function onAddTodo() {
    let todoCount = todoList.length;
    todoCount = todoCount + 1;

    let userInputE = document.getElementById("todoUserInput");
    let userInputV = userInputE.value;
    if (userInputV === "") {
        alert("Enter valid text");
        return;
    }
    let newtodo = {
        text: userInputV,
        uniqueNo: todoCount,
        isChecked: false
    };
    createApendTodo(newtodo);
    userInputE.value = "";
}
addTodoButton.onclick = function() {
    onAddTodo();
}


for (let todo of todoList) {
    createApendTodo(todo);
}