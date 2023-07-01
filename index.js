let boxes = document.querySelectorAll('.box');
//let Player = document.querySelector('.current-player');
let button = document.querySelector('.btn') ;
let p = document.querySelector('.player-title') ;

let currentPlayer = "x";

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// boxes.forEach((item)=>{
//     item.innerHTML = "x";
// })

console.log("hello")


function init () {

    currentPlayer = "x" ;
    p.innerText = `player = ${currentPlayer}` ;

    boxes.forEach((item)=>{
        item.innerText = "";
        item.classList.remove("win");
        item.style.pointerEvents = "all" ;
    })     

    button.classList.remove("active");

  
    

}

// init();
console.log(document.querySelector(".box1").innerHTML);
// console.log(boxes[1].innerHTML);



boxes.forEach((item)=>{

    item.addEventListener("click",()=>{ 
     
        if(item.innerText === "")
        {
            item.innerText = currentPlayer ;
            swapTurns();
         //   Player.innerText = currentPlayer;
            p.innerText = `player = ${currentPlayer}` ;
            win();
          console.log(boxes);
        }

    })
   
});


function swapTurns(){
    if(currentPlayer==="x")
    {
        currentPlayer = "o";
    }
    else{currentPlayer="x"}
}


   
function win()
{
   
    winningPositions.forEach((item,index)=>{
       
        if((boxes[item[0]].innerText !== "" || boxes[item[1]].innerText !== "" || boxes[item[2]].innerText !=="")&&(boxes[item[0]].innerText === boxes[item[1]].innerText) &&( boxes[item[1]].innerText === boxes[item[2]].innerText))
        {
           // win hua to green colour add krdo positions pe 
           boxes[item[0]].classList.add("win") ;
           boxes[item[1]].classList.add("win") ;
           boxes[item[2]].classList.add("win") ;
           button.classList.add("active") ;
           p.innerText = `winner is ${currentPlayer=='o' ?'x':'o'}`

           boxes.forEach((box) => {
            box.style.pointerEvents = "none";
        })
        }

      //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
   
       boxes.forEach((box) => {
        if(box.innerText != "")
        fillCount++;
       });

    if(fillCount === 9) {
        p.innerText = "Game Tied !";
        button.classList.add("active");
    }
   
})

}

button.addEventListener("click",()=>{
    init();
})

