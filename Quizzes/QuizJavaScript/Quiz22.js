

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
title: `The claim count variable can be the following type of numbers`,
cellType: "html",
choices: [
"Real numbers",
"Complex numbers",
"Continuous numbers",
"Whole numbers",
"Non-negative integers"
],
correctAnswer: "Non-negative integers"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `What are two popular basic aspects of a distribution`,
cellType: "html",
choices: [
"Center of location and moments", 
"Moments and dispersion",
"Moments and survival function",
"Center of location and survival function",
"Center of location and dispersion"
],
correctAnswer: "Center of location and dispersion"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `What are two popular generating functions that are useful when working with count variables?`,
cellType: "html",
choices: [
"Mean generating function and probability generating function",
"Variance generating function and moment generating function",
"Mean generating function and survival function",
"Variance generating function and probability generating function",
"Moment generating function and probability generating function"
],
correctAnswer: "Moment generating function and probability generating function"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `What are some important frequency distributions because they consist of discrete and non-negative integers?`,
cellType: "html",
choices: [
"Lognormal, Poisson and Negative Binominal distributions",
"Normal, Binomial and Poisson distributions",
"Lognormal, Binomial and Negative Binomial distributions",
"Normal, Binomial and Negative Binomial distributions",
"Binominal, Poisson and Negative binominal distributions" 
],
correctAnswer: "Binominal, Poisson and Negative binominal distributions" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `How many parameters does the Poisson distribution have and what is an important property of the mean and variance of the Poisson distribution?`,
cellType: "html",
choices: [
"Two, mean > variance", 
"One, mean > variance",
"Two, mean = variance = λ",
"Two, mean < variance",
"One, mean = variance = λ"
],
correctAnswer: "One, mean = variance = λ"
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

document.getElementById("Quiz22Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult22');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement22").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
