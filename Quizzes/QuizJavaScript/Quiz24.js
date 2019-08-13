

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
title: `The maximum likelihood estimator (MLE) for θ is any maximizer of the likelihood; in a sense the MLE chooses the set of parameter values that best explains the observed observations.  It is customary to equivalently maximise the logarithm of the likelihood L(⋅), denoted by l(⋅), and look at the set of zeros of its first derivative l′(⋅). To find the maximum likelihood estimate, we require:`,
cellType: "html",
choices: [
"l'(·) = 0 and l''(·) = 0", 
"l'(·) = 0 and l''(·) > 0", 
"l'(·) < 0 and l''(·) = 0", 
"l'(·) > 0 and l''(·) = 0",
"l'(·) = 0 and l''(·) < 0" 
],
correctAnswer: "l'(·) = 0 and l''(·) < 0"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Assume that the estimate mean is less than the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Negative binomial"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Assume that the estimate mean equals the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Poisson"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Assume that the estimate mean is greater than the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Binomial"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary4EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz24Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult24');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement24").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
