var button  =    document.querySelector("button");
    body    =    document.querySelector("body");
    // isblack =    false;
    p1Button =   document.getElementById("p1");
    p2Button =   document.getElementById("p2");
    resetButton =   document.getElementById("reset");
    p1Display  =  document.getElementById("p1Display");
    p2Display  =  document.getElementById("p2Display");
    numInput = document.querySelector("input");
    para        =  document.getElementById("uju");
    p1Score =      0;
    p2Score =      0;
    gameOver =    false;
    winningScore = 5;


p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
   reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false; 
}
numInput.addEventListener("change", function(){
    para.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});


button.addEventListener("click", function(){
    document.body.classList.toggle("purple")
});

// button.addEventListener("click", function(){
//     if(isblack){
//         body.style.background = "white";
//     }else{
//      body.style.background = "black";
//     }    

//     isblack = !isblack;
// });




















// var todos = ["walk away"];

// var input = prompt("what will you like to do");


// while(input !== "quit"){
//     if(input === "list") {
//     	    console.log("************");
//     	todos.forEach(function(todo, i){
//     		console.log(i + ": " + todo);
//     	});
//     	    console.log("************");
//     } else if (input === "new") {
// 	  var newTodo = prompt("enter new todo");
// 	  todos.push(newTodo);
// 	  console.log("todo added")
//     } else if (input === "delete") {
//     	var index = prompt("enter index of todo");
//     	todos.splice(index, 1);
//     	alert("deleted");
//     }
//     	input = prompt("what will you like to do");

    
// }
// console.log("thanks");















// var age = 21;
// var run = prompt("age");

// if (Number(run) === age) {
// 	alert("happy birthday");
// } else if (Number(run) < 1) {
// 	alert("impossible");
// } else if (Number(run) < 21){
// 	alert("getat");
// } else {
// 	alert("welcome");
// }
	
// function doSomething() {
//    alert("welcome");
// }
// setInterval(doSomething, 100000);
// clearInterval(7);