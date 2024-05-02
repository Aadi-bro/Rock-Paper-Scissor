let userScore = 0;
let compScore = 0;

const boxs = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () =>{
    msg.innerText = "Game Draw. Play again."
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
     }
     else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
     }
};

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);
    if(userChoice===compChoice){
         drawgame(); // draw game
    } else {
            let userWin = true;
            if(userChoice==="Rocks"){
               userWin = compChoice==="Paper" ? false : ture
            } else if (userChoice==="Paper"){
                userWin = compChoice==="Scissor" ? false : true
            } else{
                userWin=compChoice==="Rock" ? false : true
            }
            showWinner(userWin, userChoice, compChoice);  
    }
};    



boxs.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoiceId = box.getAttribute("id");
        playgame(userChoiceId); // Pass the actual user choice here
    });
});
