

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
title: `What is the purpose of a goodness of fit test?`,
cellType: "html",
choices: [
"To find estimations of the parameters of a distribution",
"To find mixtures of distributions",
"To fit a distribution",
"All choices are correct",
"To test whether the fitted distribution is good representation of the underlying distribution"
],
correctAnswer: "To test whether the fitted distribution is good representation of the underlying distribution" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `When applying Pearson’s chi-square statistic for a goodness of fit test, what is a simple rule of thumb when defining the cells so that the chi-square distribution is a good approximation to the finite sample distribution of the statistic?`,
cellType: "html",
choices: [
"Define all the cells such that at least 80%, if not all, have expected counts greater than 3",
"Define all the cells such that at least 80%, if not all, have expected counts less than 3",
"Define all the cells such that at least 80%, if not all, have expected counts less than 5",
"No choice is correct",
"Define all the cells such that at least 80%, if not all, have expected counts greater than 5"
],
correctAnswer: "Define all the cells such that at least 80%, if not all, have expected counts greater than 5"
}]} 
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary2EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz27Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult27');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement27").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
