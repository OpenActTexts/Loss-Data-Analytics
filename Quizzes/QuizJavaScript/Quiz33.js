

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
title: `Which is not a one-to-one transformation technique to create new families of distributions`,
cellType: "html",
choices: [
"Multiplication by a constant",
"Multiplying two distributions",
"Raising to a power", 
"Exponentiation",
"Mixing"
],
correctAnswer: "Multiplying two distributions"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statements is not true?`,
cellType: "html",
choices: [
"Multiplication by a constant is useful when adjusting claim cost for inflation or to convert to a different currency",
"If Y, a rescaled version of a parametric distribution X, is in the same set of distributions, then X is said to be a scale distribution", 
"Weibull is a power transformation of the exponential distribution",
"The lognormal distribution is an exponentiation of the normal distribution, and is positively skewed and has a long left tail",
"Mixture distributions is a useful way of modelling data that are drawn from a heterogenous population"
],
correctAnswer: "The lognormal distribution is an exponentiation of the normal distribution, and is positively skewed and has a long left tail"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The difference between a finite mixture and continuous mixture is`,
cellType: "html",
choices: [
"The variables in a finite mixture are discrete whereas the variables in a continuous mixture are continuous",
"There is a finite number of parameters for a finite mixture whereas there is a infinite number of parameters for a continuous mixture", 
"There is a finite number of homogenous subpopulation groups in a finite mixture whereas there is a very large (if not infinite) number of homogenous subpopulation groups in a continuous mixture",
"All choices are correct",
"No choice is correct"
],
correctAnswer: "There is a finite number of homogenous subpopulation groups in a finite mixture whereas there is a very large (if not infinite) number of homogenous subpopulation groups in a continuous mixture"
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

document.getElementById("Quiz33Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult33');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement33").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
