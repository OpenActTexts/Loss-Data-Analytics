

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
title: `The square root of the second central moment is also known as`,
cellType: "html",
choices: [
"The variance",
"The standard deviation",
"Skewness",
"Kurtosis",
"Mean" 
],
correctAnswer: "The standard deviation"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `A negative third central moment to the cube of the standard deviation indicates that`,
cellType: "html",
choices: [
"The mean of the distribution is negative",
"The variance of the distribution is negative",
"The standard deviation of the distribution is negative",
"The skewness of the distribution is to the left",
"The tail of the distribution is heavier"
],
correctAnswer: "The skewness of the distribution is to the left"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The point of the distribution where the percentile is 0.5 is known as`,
cellType: "html",
choices: [
"The mean", 
"The median",
"The upper quartile",
"The lower quartile", 
"No choice is correct"
],
correctAnswer: "The median"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `It is possible for two different distributions to have the same moment generating function.  True or False?`,
cellType: "html",
choices: [
"True",
"False"
],
correctAnswer: "False"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `The probability generating function is more useful for which kind of random variables`,
cellType: "html",
choices: [
"Non-negative",
"Positive",
"Discrete",
"Continuous",
"No choice is correct"
],
correctAnswer: "Discrete"
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

document.getElementById("Quiz31Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult31');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement31").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
