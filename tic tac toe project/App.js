let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let wincontainer=document.querySelector(".win");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    wincontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();


    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(Winner)=>{
    msg.innerText=`congatualation,winner is ${Winner}`;
    wincontainer.classList.remove("hide");
    disableboxes();
   
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);