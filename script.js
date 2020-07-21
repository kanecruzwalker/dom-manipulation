// Take User's input
// Add it to the page
// cross off a input 
var input = document.querySelector("#input1");
var add = document.querySelector("#add");

add.addEventListener("click", addContentClick);
input.addEventListener("keypress", addContentEnter);


function addContentClick(){
    console.log(event);
    console.log(input.value);
    addItem();
}

function addContentEnter(){
    if (event.keyCode === 13){
        console.log(event);
        console.log(input.value);
        addItem();
    }
}

function addItem(){
    var list = document.querySelector("#list");
    console.log(list);
    list.append("text");
}


// Select Input Field

// Select the Submit button

// Add enent listener for click
// Add event listener for keydown
// Put input at the bottom of the list 
