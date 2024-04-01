let globalId = 1;

        function markasDone(todoId){
            const parent=document.getElementById(todoId);
            parent.children[2].innerHTML="Done!";
        }

        function createChild(title,description,id){
            const child=document.createElement("div");
            const firstGrandParent=document.createElement("div");
            firstGrandParent.innerHTML=title;
            const secondGrandParent=document.createElement("div");
            secondGrandParent.innerHTML=description;
            const thirdGrandParent=document.createElement("button");
            thirdGrandParent.innerHTML="Mark as done";
            thirdGrandParent.setAttribute("onclick",`markasDone(${id})`);
            child.appendChild(firstGrandParent);
            child.appendChild(secondGrandParent);
            child.appendChild(thirdGrandParent);
            child.classList.add("todo");
            child.classList.add("added");
            child.setAttribute("id",id);
            return child;
        }

        function addTodo(){
            const title = document.getElementById("title").value;
            const description=document.getElementById("description").value;
            const parent=document.getElementById("todos");
            const newTodo = createChild(title,description,globalId++);
            parent.appendChild(newTodo);
            setTimeout(() => {
                newTodo.classList.remove("added");
            }, 10);
        }