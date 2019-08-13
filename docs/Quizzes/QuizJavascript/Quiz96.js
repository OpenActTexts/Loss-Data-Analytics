

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
title: `Which of the following expressions of the complement mean $\\hat{\\mu}$ in the credibility formula that gives $\\bar{X} = \\sum\\_{i=1}^{r}(m\\_i/m)\\hat{\\mu}(\\theta\\_i)$?`,
cellType: "html",
choices: [
"$\\hat{\\mu} = \\sum\\_{i=1}^{r}X\\_{i}/n$",
"$\\hat{\\mu} = \\frac{1}{m}\\sum\\_{i=1}^{r}m\\_i\\bar{X}\\_{i}$",
"$\\hat{\\\mu} = \\frac{\\sum\\_{i=1}^{r}m\\_i(1-Z\\_i)\\bar{X}\\_i}{\\sum\\_{i=1}^{r}m\\_i(1-Z\\_i)}$",
"$\\hat{\\mu} = \\frac{\\sum\\_{i=1}^{r}\\sum\\_{j=1}^{n\\_i}m\\_{ij}(X\\_{ij}-\\bar{X}\\_i)^2}{\\sum\\_{i=1}^{r}(n\\_i-1)}$",
" $\\hat{\\mu} = \\frac{\\sum\\_{i=1}^{r}m\\_{i}\\bar{X}\\_i}{\\sum\\_{i=1}^{r}m\\_i(1-Z\\_i)}$",
],
correctAnswer: "$\\hat{\\mu} = \\frac{\\sum\\_{i=1}^{r}m\\_i(1-Z\\_i)\\bar{X}\\_i}{\\sum\\_{i=1}^{r}m\\_i(1-Z\\_i)}$",
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

document.getElementById("Quiz96Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult96');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement96").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
