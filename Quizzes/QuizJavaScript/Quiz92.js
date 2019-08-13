

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
title: `The full credibility standard is set so that the observed number of claims is to be within 5 percent of the expected value with probability $p=0.95$. The number of claims is a random variable with mean 0.05 and variance 0.1. Which of the following is the number of claims needed for full credibility?`,
cellType: "html",
choices: [
"1,153",
"1,537",
"2,305",
"3,074",
"7,684"
],
correctAnswer: "3,074"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The full credibility standard is set so that the observed number of claims is to be within 5 percent of the expected value with probability $p=0.95$. How would the number of claims needed for full credibility change if the variance to mean ratio increases from 1 to 4?`,
cellType: "html",
choices: [
"Increase 2 times",
"Increase 4 times",
"Decrease 4 times",
"No change",
"It depends on the value of the means"
],
correctAnswer: "Increase 4 times"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The full credibility standard is set so that the observed number of claims per unit of exposure is to be within 5 percent of the expected value with probability $p=0.95$. The number of claims per unit of exposure is a random variable with mean 0.05 and variance 0.1. Which of the following is the number of exposures needed for full credibility?`,
cellType: "html",
choices: [
"1,537",
"3,074",
"7,684",
"30,733",
"61,466"
],
correctAnswer: "61,466"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Individual loss amounts are independently and identically distributed with a Gamma distribution with shape parameter 2 and scale parameter 5. How many claims are required for the average severity of observed claims to be within 5 percent of the expected severity with probability $p = 0.95$?`,
cellType: "html",
choices: [
"769",
"1,537",
"2,305",
"3,074",
"4,610"
],
correctAnswer: "769"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `The number of claims has a Poisson distribution. Individual loss amounts are independently and identically distributed with a Gamma distribution with shape parameter 2 and scale parameter 5. The number of claims and loss amounts are independent. The full credibility standard is that the observed pure premium should be within 5 percent of the expected value with probability $p = 0.95$. What credibility $Z$ is assigned to a pure premium computed from 1,000 claims?`,
cellType: "html",
choices: [
"0.25",
"0.40",
"0.66",
"0.77",
"1.00"
],
correctAnswer: "0.66"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary5EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz92Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult92');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement92").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
