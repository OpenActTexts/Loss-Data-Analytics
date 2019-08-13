

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
title: `Which of the following is not a benefit of dependence modeling in insurance?`,
cellType: "html",
choices: [
"It allows us to better understand a data set through exploring the relationships between component losses in that data set",
"The dependency between losses affect the expected value of a portfolio of these losses",
"It is essential for estimating accurate capital to cover losses",
"The dependency between losses affect the quantiles of a portfolio of these losses",
"A failure to consider the dependence between losses can cause unexpected solvency problems"
],
correctAnswer: "The dependency between losses affect the expected value of a portfolio of these losses"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary1EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz146Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult146');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement146").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
