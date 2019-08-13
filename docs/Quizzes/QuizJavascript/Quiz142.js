

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
title: `What is the difference between Pearson correlation and Spearman's rho correlation?`,
cellType: "html",
choices: [
"Pearson correlation is variant to linear transforms of the data whereas Spearman's rho correlation is not",
"Pearson correlation is symmetric between random variables whereas Spearman's rho correlation is not",
"Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated on ranks of the data",
"Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated using the concept of concordance",
"Pearson correlation ranges between -1 and 1 whereas Spearman's rho correlation can take a value outside of this range"
],
correctAnswer: "Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated on ranks of the data"
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

document.getElementById("Quiz142Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult142');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement142").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
