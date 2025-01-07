const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === "") {
        alert("I'm sure you have something to do! Write a task!")
    } else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; //creates the little 'x' button to delete an item
        li.appendChild(span)
    }
    inputBox.value=""; //this helps clear the input box once user presses add
    saveData(); //calling the saveData function
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked") 
        //if the class exists, it will remove that class if the clicked element is "LI"
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        // if the clicked element is "SPAN" 
    }
},false)

function saveData(){ 
    localStorage.setItem("data" , listContainer.innerHTML)
}
//what this function does is it will "set"(save) all the changes made into the 
//local storage as the name "data"

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData(); //calling the function showData
// what this function does is that it will get the saved data and show it on the
//list container (the box where all tasks are shown)
//so when the page is reloaded - the tasks that were previously added will still be there