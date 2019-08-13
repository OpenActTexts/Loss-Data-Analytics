

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
title: `Which one of the following is not true for a deductible`,
cellType: "html",
choices: [
"They eliminate a larger number of small claims",
"By reducing the number of small claims, they reduce claims handling costs", 
"Premiums are lower for a policy with a deductible compared to a policy with no deductible (all else equal)",
"The insurer is responsible for the amount below the deductible", 
"No choice is correct"
],
correctAnswer: "The insurer is responsible for the amount below the deductible"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not true for policy limits`,
cellType: "html",
choices: [
"It is a fixed limit of coverage",
"The higher the policy limit, the higher the payout to the insured",
"The higher the policy limit, the lower the premium", 
"The insurer is responsible for the amount below the policy limit", 
"No choice is correct"
],
correctAnswer: "The higher the policy limit, the lower the premium"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Coinsurance can be defined as`,
cellType: "html",
choices: [
"An arrangement where the insured (policyholder) covers a fixed amount of the claim before the insurer starts to pay",
"An arrangement where the insured (policyholder) covers a percentage of the claim", 
"An arrangement where the insurer is responsible for the claim amount up to a certain limit",
"All choices are correct",
"No choice is correct"
],
correctAnswer: "An arrangement where the insured (policyholder) covers a percentage of the claim"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following is not true for reinsurance?`,
cellType: "html",
choices: [
"It is a contractual agreement under which an insurer transfers part of the underlying insured risk to another insurer (known as a reinsurer) in return for a reinsurance premium",
"Under the agreement, the insurer transferring the insured risk is often referred to as the cedent/cedant", 
"There is no contractual agreement between the original insured (policyholder) and the reinsurer",
"Under an excess of loss reinsurance agreement, the reinsurer is responsible for paying losses above the reinsurance deductible", 
"The maximum amount retained by the reinsurer in the excess of loss reinsurance agreement is called the retention"
],
correctAnswer: "The maximum amount retained by the reinsurer in the excess of loss reinsurance agreement is called the retention"
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

document.getElementById("Quiz34Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult34');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement34").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
