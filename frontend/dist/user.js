"use strict";
function dragStart(event) {
    var _a, _b;
    const target = event.target;
    (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("number", target.dataset.number);
    (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.setData("text", target.id);
    event.dataTransfer.effectAllowed = "move";
    target.classList.add('dragging');
}
function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}
function dragEnter(event) {
    const target = event.target;
    target.classList.add('over');
}
function dragLeave(event) {
    const target = event.target;
    target.classList.remove('over');
}
function dragEnd(event) {
    const target = event.target;
    target.classList.remove('dragging');
}
function drop(event) {
    var _a, _b;
    event.preventDefault();
    const target = event.target;
    const number = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("number");
    const data = (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.getData("text");
    if (number && data) {
        const draggedElement = document.getElementById(data);
        if (parseInt(number) > parseInt(target.dataset.number)) {
            target.before(draggedElement);
        }
        else {
            target.after(draggedElement);
        }
    }
    target.classList.remove('over');
    // Additional functions to handle any other operations
    numberingTodos();
    updateLocalStorage();
}
function numberingTodos() {
    // Implement your logic here
}
function updateLocalStorage() {
    // Implement your logic here
}
document.addEventListener('DOMContentLoaded', () => {
    const todos = document.querySelectorAll(".todo-list .todo");
    todos.forEach((todo) => {
        const todoElement = todo;
        todoElement.setAttribute("draggable", "true");
        const childElements = todoElement.querySelectorAll("*");
        childElements.forEach((child) => {
            child.setAttribute("draggable", "false");
        });
        todoElement.addEventListener('dragstart', dragStart);
        todoElement.addEventListener('dragover', dragOver);
        todoElement.addEventListener('dragenter', dragEnter);
        todoElement.addEventListener('dragleave', dragLeave);
        todoElement.addEventListener('dragend', dragEnd);
        todoElement.addEventListener('drop', drop);
    });
});
//# sourceMappingURL=user.js.map