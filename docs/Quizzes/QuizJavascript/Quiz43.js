

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
title: `Which of these statements is false?`,
cellType: "html",
choices: [
"Grouped data is when we only know in which group the observation falls but not the exact value", 
"Censoring is when only a limited value of the observation is recorded", 
"Right-censoring is where we record the larger of the observation or the censoring variable.  A limit on the coverage of an insurance policy is an example of right-censoring",
"Truncated data is where the availability of the observation depends on the outcome and there is potentially missing data", 
"A common example seen in insurance for left truncation is when policies have a deductible"
],
correctAnswer: "Right-censoring is where we record the larger of the observation or the censoring variable.  A limit on the coverage of an insurance policy is an example of right-censoring"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The ogive estimator is`,
cellType: "html",
choices: [
"A parametric estimator that is used to estimate the distribution of grouped data through linear interpolation", 
"A non-parametric estimator that is used to estimate the distribution of grouped data through linear interpolation", 
"A parametric estimator that is a product-limit estimator used to estimate the distribution of censored data",
"A non-parametric estimator that is a product-limit estimator used to estimate the distribution of censored data",
"No choice is correct"
],
correctAnswer: "A non-parametric estimator that is used to estimate the distribution of grouped data through linear interpolation"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The Kaplan-Meier estimator is`,
cellType: "html",
choices: [
"A parametric estimator that is used to estimate the distribution of grouped data through linear interpolation", 
"A non-parametric estimator that is used to estimate the distribution of grouped data through linear interpolation", 
"A parametric estimator that is a product-limit estimator used to estimate the distribution of censored data",
"A non-parametric estimator that is a product-limit estimator used to estimate the distribution of censored data",
"No choice is correct"
],
correctAnswer: "A non-parametric estimator that is a product-limit estimator used to estimate the distribution of censored data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Greenwood’s formula is a formula for the`,
cellType: "html",
choices: [
"Estimated mean of the ogive estimator",
"Estimated variance of the ogive estimator",
"Estimated mean of the Kaplan-Meier estimator",
"Estimated variance of the Kaplan-Meier estimator",
"No choice is correct"
],
correctAnswer: "Estimated variance of the Kaplan-Meier estimator"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary4EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz43Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult43');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement43").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
