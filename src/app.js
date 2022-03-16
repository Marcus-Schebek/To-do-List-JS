let addBtn = document.querySelector("#push");
let inputTask = document.querySelector("#newTask input");
let tasks = document.querySelector("#tasks");
let task = document.querySelector('.task')
let taksOnDiv = 0;

addBtn.onclick = () => {
  if (inputTask.value.length == 0) {
    alert("Please input a task");
  } else {
    tasks.innerHTML += `
    <div class="task">
        <span id="taskname"> 
        ${inputTask.value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>`;

    let current_tasks = document.querySelectorAll(".delete");
    for(let i = 0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function() {
            this.parentNode.remove();
            taksOnDiv--;
            hiddenElement(tasks)
        }
    }
    let tasksComplete = document.querySelectorAll(".task");
    for(let i=0; i<tasksComplete.length; i++){
        tasksComplete[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    inputTask.value = "";
    taksOnDiv++;
    hiddenElement(tasks)
  }
};

function hiddenElement (element){
  if(taksOnDiv !== 0){
    element.style.display = 'block'
  } else{
    element.style.display = 'none';
  }
}
hiddenElement(tasks)

addBtn


