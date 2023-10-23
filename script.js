//to do list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
        <button class="complete">Complete</button>
    `;

    newTask.querySelector(".delete").addEventListener("click", function () {
        taskList.removeChild(newTask);
    });

    newTask.querySelector(".complete").addEventListener("click", function () {
        newTask.classList.toggle("completed");
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
}

// Add task when "Add" button is clicked
document.getElementById("addTask").addEventListener("click", addTask);