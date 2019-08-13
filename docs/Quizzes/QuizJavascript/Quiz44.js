

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
title: `What is not an advantage of the Bayesian approach?`,
cellType: "html",
choices: [
"We can describe the entire distribution of parameters conditional on the data",
"We can provide probability statements regarding the likelihood of parameters",
"It provides a unified approach for estimating parameters", 
"Allows analysts to blend prior information known from other sources with the data in a coherent manner", 
"Samples are repeatedly drawn from a population where the parameters are fixed and not random variables"
],
correctAnswer: "Samples are repeatedly drawn from a population where the parameters are fixed and not random variables"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Once outcomes are observed and Bayes Theorem applied, the resulting distribution is called the`,
cellType: "html",
choices: [
"Prior distribution",
"Model distribution",
"Posterior distribution of parameters", 
"Joint distribution",
"Marginal outcome distribution"
],
correctAnswer: "Posterior distribution of parameters"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `What is a way to summarize and understand the posterior distribution of parameters`,
cellType: "html",
choices: [
"Confidence interval statement",
"Bayesian prediction using the predictive distribution",
"Conjugate distributions",
"All choices are correct",
"No choice is correct"
],
correctAnswer: "All choices are correct"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary3EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz44Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult44');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement44").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
