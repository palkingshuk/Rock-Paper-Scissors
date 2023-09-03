const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const win = document.querySelector(".win");
const loss = document.querySelector(".loss");
const total = document.querySelector(".total-games");
 var winNo = 0;
 var lossNo = 0;
 var tgame = 0
// const options = document.querySelectorAll("button");
function game(userSelection)
{
    userChoice.textContent = userSelection;
    const options = ["Rocks" , "Paper" , "Scissor"];
    let cChoice = Math.floor(Math.random() * options.length);
    // console.log(cChoice);
    let temp = options[cChoice];
    computerChoice.textContent = options[cChoice];
    const ans = getresult(userChoice.textContent,computerChoice.textContent);
    result.textContent = ans;
    win.textContent = winNo;
    loss.textContent = lossNo;
    total.textContent = tgame;

}

function getresult(userChoice,computerChoice)
{
    if(userChoice === computerChoice)
    {
        tgame++;
        return "It's a draw";
    }
    else if(
        (userChoice === "Rocks" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rocks") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    )
    {
        tgame++;
        winNo++;
        return "User Wins!!";
    }
    else{
        tgame++;
        lossNo++;
        return  "Computer Wins!!";
    }
}

function reset()
{
    userChoice.textContent = "";
    computerChoice.textContent = "";
    result.textContent = "";
    win.textContent = ""
    loss.textContent = "";
    total.textContent = ""
}