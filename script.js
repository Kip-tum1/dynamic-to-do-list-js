

document.addEventListener("DOMContentLoaded", function(){

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText !== ""){
            let listElement= document.createElement("li");
            listElement.textContent = taskText;

            let button = document.createElement("button");
            button.textContent = "Remove";
            button.classList.add("remove-btn");

            button.addEventListener("click", function (event){
                if(event.target.tagName === "BUTTON"){
                    event.target.parentElement.remove();                   
                }
                
            }) 


            listElement.appendChild(button);
            taskList.appendChild(listElement);

            taskInput.value = ""

            
            
            
        }
        else{
            alert("Enter a task")
            
        }

        


        
        

        
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addTask();
        }
    } )

    

})
