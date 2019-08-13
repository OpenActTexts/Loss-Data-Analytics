

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
title: `Which of the following statements is correct?`,
cellType: "html",
choices: [
"Elliptical copulas are copulas corresponding to multivariate normal distributions",
"Elliptical copula can only capture tail dependency",
"The generator function of an elliptical copula is convex and decreasing with domain $[0,1]$ and range $[0,\\infty)$",
"An elliptical copula can be constructed from a multivariate distribution with a normal marginal and a gamma marginal",
"Elliptical copulas decompose multivariate elliptical distributions into their univariate elliptical marginal distributions by Sklar's theorem"
],
correctAnswer: "Elliptical copulas decompose multivariate elliptical distributions into their univariate elliptical marginal distributions by Sklar's theorem"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statements is not correct?`,
cellType: "html",
choices: [
"A copula is bounded below when two random variables are perfectly negatively related and is bounded above when two variables are perfectly positively related",
"Spearman's rho, Kendall's tau and Pearson correlation are all dependent on the choice of marginals",
"Spearman's correlation and Kendall's tau correlation can be expressed solely in terms of the copula function",
"Tail dependency concentration function captures the probability of two random variables both catching up extreme values",
"Gumbel may exhibit upper dependence whereas Frank copula exhibit no tail dependence"
],
correctAnswer: "Spearman's rho, Kendall's tau and Pearson correlation are all dependent on the choice of marginals"
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

document.getElementById("Quiz145Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult145');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement145").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
