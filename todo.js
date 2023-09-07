function addButton() {
    var taskInput = document.getElementById("textinput");
    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("textlist");
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("button");

    listItem.innerHTML = taskText;
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    
    taskInput.value = "";
}