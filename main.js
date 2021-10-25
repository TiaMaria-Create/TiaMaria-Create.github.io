//This will begin a quick art history quiz and reward the user points based on correct answers
//create a bool that will allow the user to play the game
var playGame = false;
//ask the user if they would like to first take an interactive quiz?
let quiz = prompt("Know a good deal about art? Test your knowledge with this fun quiz? Would you like to continue?");

if (quiz.toLowerCase() == "yes") {
    playGame = true;

}
else if (quiz.toLowerCase() == "no") {
    alert("The Quiz will not start. Thanks for visiting the website. Enjoy the Three Graces!")
}
else{
    quiz = prompt("Please only enter, yes or no. All other text is invalid.");
}

let points = 0;

//start the loop that plays the game
while (playGame) {
//ask the user the first question
    let answerOne = prompt("Who painted Starry Night? A) Vincent Van Gogh or B) Leonardo Da Vinci?");
//if user gets the question correct reward ten points- if incorrect do nothing
//begin conditional statements
    if (answerOne.toLowerCase() == "a") {
        alert("Correct! You were awarded 10 pts!");
        points += 10;
        console.log("Correct you were rewarded ", points, "points.");
    } else {
        alert("Sorry. That was not the correct response.");
        console.log("Sorry, you were not given any points.");
    }
//ask the following questions
    let answerTwo = prompt("What is the title of Grant Wood's infamous painting featuring a woman wearing an apron and a man holding a pitchfork? A) American Life or B) American Gothic");
//conditional to check answer
    if (answerTwo.toLowerCase() == "b") {
        alert("Correct! You were awarded 10 pts!");
        points += 10;
        console.log("Correct you were rewarded 10 points.");

    } else {
        alert("Sorry. That was not the correct response.");
        console.log("Sorry, you were not given any points.");

    }

    let answerThree = prompt("Which of the following works of art is NOT currently displayed in the Louvre? A) Mona Lisa or B) The Persistence of Memory ");
//conditional to check answer
    if (answerThree.toLowerCase() == "b") {
        alert("Correct! You were awarded 10 pts!");
        points += 10;
        console.log("Correct you were rewarded 10 points.");

    } else {
        alert("Sorry. That was not the correct response.");
        console.log("Sorry, you were not given any points.");

    }

//display total number of points to the user
    if (points >= 20) {
        alert("You won!");

    } else {
        alert("You answered too many questions incorrectly.");
    }

    console.log("You were given ", points, "points");

    let answer2  = prompt("Would you like to retake this quiz?");

    if (answer2.toLowerCase() == "no") {
        playGame =false;
    } else if (answer2.toLowerCase() == "yes") {
        playgame = true;
    } else {
        answer2 = prompt("Please only enter yes or no.");
    }
}

}