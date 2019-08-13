

function init() {

var json = { 
pages: [{questions: [{
type: "html",
html: 
"<h3>Does This Make Sense?</h3>Quiz questions allow for immediate assessment of your understanding of a section. Try them out. Click on <b>'Start Quiz'</b> button when you are ready."
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 1</b>",
choicesOrder: "random",
title: `Which of the following is not correct about the B$\\ddot{\\mathrm{u}}$hlmann credibility formula $\\hat{\\mu}(\\theta) = Z\\bar{X} + (1-Z)\\mu$?`,
cellType: "html",
choices: [
"Larger variance within a selected risk $Var(\\bar{X} \\mid \\theta)$ leads to less credibility weight $Z$ to experience $\\bar{X}$",
"If all risk groups are more different from each other, more weight would be given to the overall mean $\\mu$",
"A larger sample used to calculate $\\bar{X}$ would infer a larger $Z$",
"$Z$ can approach but not equal 1 as the number of observations $n$ goes to infinity",
"A larger $K=EPV/VMH$ produces a more stable estimate by giving more weight to $\\mu$"
],
correctAnswer: "If all risk groups are more different from each other, more weight would be given to the overall mean $\\mu$"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary1EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz93Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult93');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement93").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
