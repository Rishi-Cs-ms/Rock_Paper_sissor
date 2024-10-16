let img=document.querySelectorAll(".innerImg");
let win=document.querySelector(".win");
let userScore=0;
let compScore=0;
let userClass=document.querySelector(".user");
let compClass=document.querySelector(".comp");

let newGame=document.querySelector("button");

newGame.addEventListener("click",()=>{
    
    userScore=0;
    compScore=0;
    compClass.innerHTML=`${compScore}<br>Computer`;
    userClass.innerHTML=`${userScore}<br>You`;
    win.innerText="Play Your Move";
    img.forEach(ele => ele.classList.remove("imageActive","imageBorder"));
});

img.forEach(element => {
    element.addEventListener("click",()=>{
        img.forEach(ele => ele.classList.remove("imageActive","imageBorder"));
        element.classList.add("imageActive");
        let userNo=element.id;
        let compNo=randomNoArray(img).id;
        img.forEach(ele => {
            if (ele.id === compNo) {
                ele.classList.add("imageBorder"); // Add border to computer's selection
            }
        });

        compare(userNo,compNo);
    });
});

function randomNoArray(arr){
    let randomNo=Math.floor(Math.random()*3);
    return arr[randomNo];
}

function compare(user,comp){
    if(user!=comp){
        if(user=="rock" && comp=="paper" || 
           user=="paper" && comp=="scissors"||
           user=="scissors" && comp=="rock"){
            win.innerText="Computer Wins";
            
            compClass.innerHTML=`${++compScore}<br>Computer`;
        }
        else{
            win.innerText="User Wins";
            userClass.innerHTML=`${++userScore}<br>You`;
        }
    }
    else{
        win.innerText="Draw";
    }
}