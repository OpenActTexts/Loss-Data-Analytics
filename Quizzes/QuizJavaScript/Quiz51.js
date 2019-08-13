

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
title: `Aggregate claims refer to`,
cellType: "html",
choices: [
"The number of claims from a portfolio of insurance contracts only",
"The amount of claims from a portfolio of insurance contracts only",
"The frequency of claims from a portfolio of insurance contracts only",
"The severity of claims from a portfolio of insurance contracts only",
"The number or the amount of claims from a portfolio of insurance contracts" 
],
correctAnswer: "The number or the amount of claims from a portfolio of insurance contracts" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The two approaches in modelling aggregate losses use the`,
cellType: "html",
choices: [
"Individual and cumulative risk model",
"Incremental and collective risk model",
"Incremental and cumulative risk model", 
"Individual and collective risk model",
"No choice is correct"
],
correctAnswer: "Individual and collective risk model"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The individual risk model has $n$ as the`,
cellType: "html",
choices: [
"Number of contracts",
"Number of losses",
"Number of the whole population",
"Number of small claims",
"Number of large claims"
],
correctAnswer: "Number of contracts"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `The collective risk model has $N$ as the`,
cellType: "html",
choices: [
"Number of contracts",
"Number of losses",
"Number of the whole population",
"Number of small claims",
"Number of large claims"
],
correctAnswer: "Number of losses"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `The frequency and severity distribution arise from the`,
cellType: "html",
choices: [
"Individual risk model",
"Incremental risk model",
"Collective risk model",
"Cumulative risk model",
"No choice is correct"
],
correctAnswer: "Collective risk model"
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

document.getElementById("Quiz51Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult51');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement51").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
