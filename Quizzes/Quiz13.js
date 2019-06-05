

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
title: `Why do government entities such as towns and schools (LGPIF customers) need to purchase property and auto insurance?`,
cellType: "html",
choices: [
"They need protection from embezzlement or theft by an employee",
"They support local businesses by purchasing insurance",
"They have separate budgetary responsibilities and need insurance to moderate the budget effects of uncertain insurable events",
"It represents good advertising for the government entity",
"Purchasing insurance helps provide employment opportunities for government workers"
],
correctAnswer: "They have separate budgetary responsibilities and need insurance to moderate the budget effects of uncertain insurable events"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not true of the promise by an insurer to compensate a policyholder upon the occurrence of an insured event?`,
cellType: "html",
choices: [
"The compensation provided by the insurer is for incurred hurt, loss, or damage that is covered by the policy",  
"A claim is indemnification provided by the insurer for incurred hurt, loss, or damage that is covered by the policy",  
"The claim severity is the extent of the payout ",
"The claim frequency describes how often claims arise",
"The deductible is the claim amount that the policyholder pays the insurer"
],
correctAnswer: "The deductible is the claim amount that the policyholder pays the insurer"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following does not help motivate the importance of frequency?`,
cellType: "html",
choices: [
"Frequency drives expenses",
"Frequency influences setting contractual parameters (such as deductibles and policy limits) that are written on a per occurrence basis", 
"Frequency is routinely monitored by insurance regulators",  
"Frequency can be a key driver in the overall indemnification obligation of the insurer", 
"Frequency determines the extent of a catastrophic loss"
],
correctAnswer: "Frequency determins the extent of a catastrophic loss"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `In what context are rating variables useful?`,
cellType: "html",
choices: [
"Rating variables are useful in setting insurance rates and premiums",
"Rating variables are critical in managing claims",
"Rating variables help set the company's reputation",
"Rating variables determine the respect that an agent receives",
"Rating variables describe how insurance influences television programs"
],
correctAnswer: "Rating variables are useful in setting insurance rates and premiums"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `When an insurance contract starts, either at the beginning (initiation) or renewal, what types analytic advice does an insurer not need?`,
cellType: "html",
choices: [
"Conditions for accepting or denying an application",
"Rating variables to appropriately classify a application",
"Rating variables to determine appropriate loss reserves",
"Given a risk classification, the appropriate premium",
"At renewal, using claim information to provide updated premiums"
],
correctAnswer: "Rating variables to determine appropriate loss reserves"
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

document.getElementById("Quiz13Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult13');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement13").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
