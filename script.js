


function download()
{
    window.location.href="h.pdf";

}

const form = document.querySelector("#to-do-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const completedTaskList = document.querySelector("#completed-task-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskValue = taskInput.value;
    if(taskValue == "")
    alert("Enter a task");
    else{
    addTask(taskValue);
    }
    taskInput.value = "";
});

function addTask(taskValue) {
    const li = document.createElement("li");
    const taskTime = new Date();
    const taskTimeString = taskTime.toLocaleTimeString();
    li.innerHTML = `
<input type="checkbox" class="check">
<input class="task-text" value="${taskValue}" disabled onblur="disinp(event)">
<span class="task-time">${taskTimeString}</span>

<button class="edit-button">Edit</button>
<button class="delete-button">Delete</button>
`;

    taskList.appendChild(li);

    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function () {
        if(checkbox.checked)
        {
            moveTaskToCompletedList(li);
        }
        else{
            taskList.appendChild(li);
        }
    });

    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        li.remove();
    });


    const editButton = li.querySelector(".edit-button");
    editButton.addEventListener("click", function (event) {
        const taskText = li.querySelector(".task-text");
        event.target.parentNode.childNodes[3].disabled = false;

        li.append();
    });
}
let disinp = (event) => {
    event.target.disabled = true;
}

function moveTaskToCompletedList(li) {
    completedTaskList.appendChild(li);
}
document.getElementById("download").addEventListener("click",() =>{

let pdf = new jsPDF();
let section=$('#print');
let page= function() {
    pdf.save('pagename.pdf');
   
};
pdf.addHTML(section,page);
})

