

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
title: `"Which of the following describes the term "risk measure"?`,
cellType: "html",
choices: [
"It is a heavy tailed distribution",
"It is the maximum value that a random variable can take",
"It is a family of distributions",
"It is a function that maps the loss random variable of interest to a numerical value indicating the level of riskiness",
"It is the standard deviation of the distribution"
],
correctAnswer: "It is a function that maps the loss random variable of interest to a numerical value indicating the level of riskiness" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not an axiom of a coherent risk measure?`,
cellType: "html",
choices: [
"Diversification benefits exist if different risks are combined",
"Higher losses essentially leads to a higher level of risk",
"No additional risk is created for adding cash to an insurance portfolio",
"A risk measure should be independent of the monetary units in which the risk is measured",
"A risk measure should be able obtainable in closed form"
],
correctAnswer: "A risk measure should be able obtainable in closed form"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is the definition of $VaR\\_q$?`,
cellType: "html",
choices: [
"It is the variance of the loss scaled by a factor of $q$",
"It is a measure of the tail length of the distribution",
"It is the maximum probable loss occurring $q\\times 100$ percent of times",
"It is the expected value of the probable loss occurring beyond the $q\\times 100$ percent chance worst scenario",
"It is a measure of the skewness of the distribution"
],
correctAnswer: "It is the maximum probable loss occurring $q\\times 100$ percent of times"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following is not a limitation of $VaR$?`,
cellType: "html",
choices: [
"It does not provide a practically meaningful interpretation",
"The selection of the confidence interval $q$ is highly subjective",
"The VaR can be very sensitive to the choice of $q$",
"The scenario above the $(1-q)\\times 100$ percent worst event are completely neglected",
"VaR is not subadditive, hence diversification benefits may not be fully reflected"
],
correctAnswer: "It does not provide a practically meaningful interpretation"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is the definition of $TVaR\\_q$?`,
cellType: "html",
choices: [
"It is the variance of the loss scaled by a factor of $q$",
"It is a measure of the tail length of the distribution",
"It is the maximum probable loss occurring $q\\times 100$ perent of times",
"It is the expected value of the probable loss occurring beyond the $q\\times 100$ percent chance worst scenario",
"It is a measure of the skewness of the distribution"
],
correctAnswer: "It is the expected value of the probable loss occurring beyond the $q\\times 100$ percent chance worst scenario"
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

document.getElementById("Quiz102Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult102');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement102").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
