

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
title: `What does exposure impact on in an individual risk model for claim counts?`,
cellType: "html",
choices: [
"Frequency",
"Severity",
"Mix of claims",
"Size of claims", 
"No choice is correct"
],
correctAnswer: "Frequency" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `What is an example of exposure?`,
cellType: "html",
choices: [
"Injury types for workers compensation insurance",
"Number of claims in workers compensation insurance",
"Number of workers for workers compensation insurance",
"Size of claims in workers compensation insurance",
"All choices are correct"
],
correctAnswer: "Number of workers for workers compensation insurance"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The greater is the deductible,`,
cellType: "html",
choices: [
"The greater the number of claims",
"The greater the claims frequency",
"The smaller the number of claims",
"No change in claim frequency",
"The greater the claims size" 
],
correctAnswer: "The smaller the number of claims"
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

document.getElementById("Quiz55Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult55');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement55").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
