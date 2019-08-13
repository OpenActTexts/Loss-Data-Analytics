

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
title: `What is a strategy to incorporate the zero mass in the distribution of the individual risk model?`,
cellType: "html",
choices: [
"Use a two-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract",  
"Use a three-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract",  
"Use a four-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract",  
"Use a five-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract",  
"Use a six-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract" 
],
correctAnswer: "Use a two-part framework, where a Bernoulli variable is introduced to indicate whether a loss occurs for a contract and a nonnegative random variable is introduced to indicate the amount of losses of the contract" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `A special case arises when the distribution of the loss amount from the 2-part framework has mean =  $b\\_i$ (an insurance benefit) and variance = 0.  This could represent:`,
cellType: "html",
choices: [
"Life annuity insurance",
"Workers compensation insurance",
"Term life insurance or endowment insurance",
"Home insurance",
"Motor insurance"
],
correctAnswer: "Term life insurance or endowment insurance"
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

document.getElementById("Quiz52Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult52');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement52").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
