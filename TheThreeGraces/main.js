//This will begin a quick art history quiz and reward the user points based on correct answers

//alert the user of the quiz
alert("Know a good deal about art? Test your knowledge with this fun quiz!")
//ask the user the first question
let answerOne = prompt("Who painted Starry Night? A) Vincent Van Gogh or B) Leonardo Da Vinci?");
//if user gets the question correct reward ten points- if incorrect do nothing
let points =0;
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
if(answerTwo.toLowerCase() == "b") {
    alert("Correct! You were awarded 10 pts!");
    points += 10;
    console.log("Correct you were rewarded 10 points.");

} else {
    alert("Sorry. That was not the correct response.");
    console.log("Sorry, you were not given any points.");

}

let answerThree = prompt("Which of the following works of art is NOT currently displayed in the Louvre? A) Mona Lisa or B) The Persistence of Memory ");
//conditional to check answer
if(answerThree.toLowerCase() == "b") {
    alert("Correct! You were awarded 10 pts!");
    points += 10;
    console.log("Correct you were rewarded 10 points.");

} else {
    alert("Sorry. That was not the correct response.");
    console.log("Sorry, you were not given any points.");

}

//display total number of points to the user
if(points >= 20) {
    alert("You won!");
}
else{
    alert("You answered too many questions incorrectly.");
}

console.log("You were given ", points, "points");