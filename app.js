// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeGrade();
});

// Constants for grade thresholds
var A_SCORE = 90,
    B_SCORE = 80,
    C_SCORE = 70,
    D_SCORE = 60,
    MIN_SCORE = 0,    // Minimum valid score
    MAX_SCORE = 100;  // Maximum valid score

// Variables
var testScore;       // Holds the user entered numeric test score

function computeGrade() {
  // Get the numeric test score
  testScore = parseInt(document.getElementById('testScore').value);

  // Check if the input is valid
  if (testScore >= MIN_SCORE && testScore <= MAX_SCORE) {
    // The score is valid, so determine the letter grade
    if (testScore >= A_SCORE)
      document.getElementById('outGrade').innerHTML = "Your grade is A.";
    else if (testScore >= B_SCORE)
      document.getElementById('outGrade').innerHTML = "Your grade is B.";
    else if (testScore >= C_SCORE)
      document.getElementById('outGrade').innerHTML = "Your grade is C.";
    else if (testScore >= D_SCORE)
      document.getElementById('outGrade').innerHTML = "Your grade is D.";
    else
      document.getElementById('outGrade').innerHTML = "Your grade is F.";
  }
  else {
    // An invalid score was entered
    document.getElementById('outGrade').innerHTML =
    "That is an invalid score. Refresh the app <br>" +
    "and enter a value in the range of <br>" +
    MIN_SCORE + " through " + MAX_SCORE;
  }



}
