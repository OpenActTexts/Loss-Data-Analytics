

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
title: `If $N$, the number of losses has a Poisson distribution with parameter λ, what is the mean of the aggregate loss distribution under the collective risk model?`,
cellType: "html",
choices: [
"λ", 
"λE($X$), where $X$ is the random variable for each loss", 
"λE($X^2$), where $X$ is the random variable for each loss", 
"λE($X^3$), where $X$ is the random variable for each loss",
"λE($X^4$), where $X$ is the random variable for each loss" 
],
correctAnswer: "λE($X$), where $X$ is the random variable for each loss" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The expected value of the amount of the aggregate loss in excess of a deductible is also known as`,
cellType: "html",
choices: [
"The deductible premium",
"The gross premium",
"The gross stop-loss premium",
"The net stop-loss premium",
"The net premium"
],
correctAnswer: "The net stop-loss premium"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `If $X$, the random variable for each loss under a collective risk model is exponentially distributed, then the aggregate loss will follow what kind of distribution?`,
cellType: "html",
choices: [
"Normal",
"Lognormal",
"Gamma",
"Pareto",
"Weibull"
],
correctAnswer: "Gamma"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Tweedie distribution has what kind of frequency and severity distribution?`,
cellType: "html",
choices: [
"Negative binomial and Pareto respectively",
"Negative binomial and gamma respectively",
"Binomial and gamma respectively",
"Poisson and Pareto respectively",
"Poisson and gamma respectively"
],
correctAnswer: "Poisson and gamma respectively"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `What is the limiting case of the Tweedie distribution when parameter $p \\rightarrow 2$?`,
cellType: "html",
choices: [
"Poisson distribution",
"Gamma distribution",
"Exponential distribution",
"Negative binomial distribution",
"Lognormal distribution"
],
correctAnswer: "Gamma distribution"
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

document.getElementById("Quiz53Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult53');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement53").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
