

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
title: `The generalised price setting can be described as:`,
cellType: "html",
choices: [
"Expected cost + risk margin",
"Frequency of claims times severity of claims ",
"Actual cost + risk margin + profit margin", 
"Frequency of claims times severity of claims + profit margin", 
"Expected cost + risk margin + expenses incurred + profit margin" 
],
correctAnswer: "Expected cost + risk margin + expenses incurred + profit margin" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Aggregate claims (or expected cost of claims) are affected by two components of the insured event.  One is frequency, what is the other component?`,
cellType: "html",
choices: [
"Claims cost",
"Expected claims cost",
"Claim numbers",
"Losses",
"Severity"
],
correctAnswer: "Severity"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `When we model frequency we focus on:`,
cellType: "html",
choices: [
"The average size of claims",
"The deductibles on claims",
"The policy limits on claims",
"The delay in reporting of claims",
"The number of claims"
],
correctAnswer: "The number of claims"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `When we model severity we focus on:`,
cellType: "html",
choices: [
"The number of claims",
"The deductibles on claims",
"The policy limits on claims",
"The delay in reporting of claims",
"The average size of claims"
],
correctAnswer: "The average size of claims"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is not a reason why insurers and other stakeholders gather and maintain frequency datasets?`,
cellType: "html",
choices: [
"To look at number of claims that fall within certain deductible and policy limit bands",
"To look at prior claim count history of policyholders",
"Insurers collect databases such as a policyholder file and a claims file which naturally leads to analysis by frequency and severity separately",
"Regulators require reporting of claim numbers",
"To look at the size of claims for large claims"
],
correctAnswer: "To look at the size of claims for large claims"
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

document.getElementById("Quiz21Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult21');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement21").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
