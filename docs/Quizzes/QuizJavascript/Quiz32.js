

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
title: `Which of the following is not a fundamental severity distribution?`,
cellType: "html",
choices: [
"Pareto",
"Gamma",
"Weibull",
"Negative binomial",
"Generalized beta distribution of the second kind" 
],
correctAnswer: "Negative binomial"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of these is not true for the gamma distribution?`,
cellType: "html",
choices: [
"It is considered a light tailed distribution",
"It is not suitable for modelling risky assets", 
"It provides a realistic assessment of the likelihood of severe losses",
"With certain parameters it will become an exponential distribution",
"With certain parameters it will become a chi squared distribution"
],
correctAnswer: "It provides a realistic assessment of the likelihood of severe losses"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of these is not true for the Pareto distribution?`,
cellType: "html",
choices: [
"Skewness is to the left", 
"Heavy tailed", 
"Suitable for modelling income, high-risk insurance claims and severity of large casualty losses", 
"The hazard function of the distribution is decreasing",
"Named after Italian economics Vilfredo Pareto"
],
correctAnswer: "Skewness is to the left"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of these is not true for the Weibull distribution?`,
cellType: "html",
choices: [
"Named after Swedith physicist Waloddi Weibull",
"Widely used in reliability, life data analysis, weather forecasts and general insurance claims",
"Used to model excess of loss treaty for automobile insurance",
"Used to model earthquake inter-arrival times",
"Hazard function of the distribution is always decreasing"
],
correctAnswer: "Hazard function of the distribution is always decreasing"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of these is not true for the generalized beta distribution of the second kind`,
cellType: "html",
choices: [
"It is a five-parameter, very flexible distribution", 
"Can be positively and negatively skewed ",
"Can model heavy and light tailed data",
"Has been used to model different types of automobile insurance claims, severity of fire losses and medical insurance claims data",
"Has been used to model long-tailed claims data"
],
correctAnswer: "It is a five-parameter, very flexible distribution"
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

document.getElementById("Quiz32Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult32');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement32").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
