

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
title: `The distribution function of a mixture distribution is a convex combination of the component distribution functions.  Which of the following can this result not be extended to?`,
cellType: "html",
choices: [
"Density function",
"Survival function",
"Raw moments",
"Expectations",
"Central moments"
],
correctAnswer: "Central moments"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Suppose we have a population of drivers with distribution of claims for an individual driver being Poisson.  The expected number of claims (λ) has a distribution being gamma.  What is the resulting distribution of $N$, the number of claims of a randomly chosen driver?`,
cellType: "html",
choices: [
"Poisson",
"Gamma",
"Binomial",
"Lognormal",
"Negative Binomial"
],
correctAnswer: "Negative Binomial"
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

document.getElementById("Quiz26Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult26');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement26").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
