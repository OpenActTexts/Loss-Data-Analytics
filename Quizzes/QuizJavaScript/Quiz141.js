

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
title: `There are different levels of education: elementary school, middle school, high school, college graduate and postgraduate degree. How do you categorize a variable that represents educational level?`,
cellType: "html",
choices: [
"Categorical variable",
"Ordinal variable",
"Binary variable",
"Count variable",
"Interval variable"
],
correctAnswer: "Ordinal variable" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statement is correct?`,
cellType: "html",
choices: [
"A quantitative variable has to be either continuous or discrete",
"Discrete variables are a special type of count variables",
"A continuous variable can take on any value whereas a discrete variable can only take on a finite number of values in any finite interval",
"In an ordinal variable, the numerical difference between different levels has economic meaning",
"Ordering matters in a categorical variable"
],
correctAnswer: "A continuous variable can take on any value whereas a discrete variable can only take on a finite number of values in any finite interval"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following statement is not correct?`,
cellType: "html",
choices: [
"A multivariate approach considers many measurements simultaneously on a single entity",
"In a number of cases, a univariate approach does not provide very meaningful results",
"A univariate approach is the most suitable approach for analyzing the aggregate capital in an insurance company which has multiple lines of business",
"Missing data can be analyzed in a sophisticated manner using a multivariate variable",
"The sequence of observed daily temperature in a one year time horizon is an example of a high dimensional multivariate variable"
],
correctAnswer: "A univariate approach is the most suitable approach for analyzing the aggregate capital in an insurance company which has multiple lines of business"
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

document.getElementById("Quiz141Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult141');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement141").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
