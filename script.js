// Take User's input
// Add it to the page
// cross off a input 
var input = document.querySelector("#input1");
var add = document.querySelector("#add");

add.addEventListener("click", addContentClick);

function addContentClick(){
    console.log(event);
    console.log(input.value);
}

input.addEventListener("keypress", addContentEnter);

function addContentEnter(){
    if (event.keyCode === 13){
        console.log(event);
        console.log(input.value);
    }
}
