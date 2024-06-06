let gameColor = "";
let userColor = "";

let btns = ["Red","Yellow", "Blue", "Green"];

let started= false;
let h2= document.querySelector("h2");
let h3= document.querySelector("h3");

function btnFlash(btn){
	btn.classList.add("flash");
	setTimeout(function(){
		btn.classList.remove("flash");},250);
}

function levelUp(){
	let ranIdx = Math.floor(Math.random() *3);
	let ranColor = btns[ranIdx];
	let ranBtn = document.getElementById(ranColor);
	btnFlash(ranBtn);
	gameColor=ranColor;
}

function checkAns(){
	if(userColor === gameColor){
		h2.innerText = "Congratulations You Won"
		setTimeout(function(){
			h2.innerText = "Choose any color to bet";
			h3.innerText = "";
		}, 3000)
	}else{
		h3.innerText ="Better Luck next time"; 
		h2.innerText = gameColor;
		setTimeout(function(){
			h2.innerText = "Choose any color to bet";
			h3.innerText = "";
		}, 3000)
	}
	userColor="";
	gameColor="";
}


function btnPress(){
	let btn = this;
	btnFlash(btn);
	
	btnColor = btn.getAttribute("id");
	if(userColor===""){
		timer();
		userColor=btnColor;
		h2.innerText = `You have selected ${userColor}`;
		setTimeout(function(){
			levelUp();
			checkAns()
		},62000)	
	}
	
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
	btn.addEventListener("click",btnPress);
}

// Timer //

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let intervalID = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;	
		}
    }, 1000);
	setTimeout(function(){
		clearInterval(intervalID);
	}, 62000)
}

function timer () {
    let oneMinute = 60 * 1,
        display = document.querySelector('#time');
    	startTimer(oneMinute, display);
		
};