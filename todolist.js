document.addEventListener("DOMContentLoaded", function () {
   let add = document.getElementById("addTaskButton");
   let removeFinished = document.getElementById("removeFinishedTasksButton");
   let task = document.getElementById("taskInput");
   let list = document.getElementById("taskList");
   let body = document.querySelector("body");
   let prior = document.getElementById("taskPriority");

 
   let toDo = document.createElement("span");
    body.insertBefore(toDo, list);

    add.addEventListener("click", function () {
        if (task.value.length >= 5 &&
        task.value.length <= 100 &&
        prior.value > 0 &&
        prior.value <= 10) {

      let newTask = document.createElement("li");
       newTask.dataset.priority = prior.value;
      let all = document.querySelectorAll("li");
      let index = all.length;
       
       for (var i = 0; i < all.length; i++) {
           if (parseInt(newTask.dataset.priority) < parseInt(all[i].dataset.priority)) {
               index = i;
               break;
           }
       }

       list.insertBefore(newTask, all[index]);
      let taskName = document.createElement("h2");
       newTask.appendChild(taskName);
       taskName.innerHTML = task.value;

      let delBtn = document.createElement("button");
       newTask.appendChild(delBtn);
       delBtn.innerHTML = "Delete";
       delBtn.classList.add("delete");

      let complBtn = document.createElement("button");
       newTask.appendChild(complBtn);
       complBtn.innerHTML = "Complete";
       complBtn.classList.add("complete");


       complBtn.addEventListener("click", function () {
           if (this.parentElement.style.color === "") {
               this.parentElement.style.color = "red";
               this.parentElement.setAttribute("done", "yes");
           } else if (this.parentElement.style.color === "red") {
               this.parentElement.style.color = "";
               this.parentElement.removeAttribute("done");
           }
       });

       delBtn.addEventListener("click", function () {
           this.parentElement.parentNode.removeChild(this.parentElement);
       });

       task.value = "";
       prior.value = "";
        
   } else {

       event.preventDefault();
       alert("Task should have from 5 to 100 characters. Priority should be an integer between 1 and 10");
   }
});
 
removeFinished.addEventListener("click", function () {
  let tasks = document.querySelectorAll("li");
   for (let i = 0; i < tasks.length; i++) {
       if (tasks[i].hasAttribute("done")) {
           tasks[i].parentNode.removeChild(tasks[i]);
       }
   }
});
});
