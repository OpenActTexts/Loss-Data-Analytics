

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
title: `Which of the following describes a copula?`,
cellType: "html",
choices: [
"A uniform marginal distribution",
"A bivariate distribution function for which the marginal distribution of each variable can be any type of choice",
"A bivariate distribution function for which the marginal distribution of each variable is uniform",
"A multivariate distribution function for which the marginal distribution of each variable is uniform",
"A term for a word that links the subject of a sentence to a subject complement"
],
correctAnswer: "A multivariate distribution function for which the marginal distribution of each variable is uniform"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statements is not true?`,
cellType: "html",
choices: [
"Any multivariate distribution function can be written using a copula representation",
"We can find a copula representation for the joint distribution of a gamma marginal variable and a log-normal marginal variable",
"There is always a unique copula representation for a multivariate distribution function",
"A bivariate copula has its domain on the unit square",
"A bivariate copula has its range between 0 and 1"
],
correctAnswer: "There is always a unique copula representation for a multivariate distribution function"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary2EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz143Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult143');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement143").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
