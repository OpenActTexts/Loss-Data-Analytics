

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
title: `Which of the following statements is incorrect regarding a Poisson regression with a two-level risk factor?`,
cellType: "html",
choices: [
"The loss outcome has a Poisson distribution.",
"The expected loss outcome varies depending on the level of risk factor considered.",
"The expected loss outcome regardless of risk level is the weighted average of the expected loss outcomes for each risk level with the weight equal to the proportion of the insureds in that level.",
"There is only one possible selection of coefficients in this Poisson regression model.",
"An alternative to performing the Poisson regression is to fit a Poisson distribution for each level separately."
],
correctAnswer: "There is only one possible selection of coefficients in this Poisson regression model." 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Age of drivers can be considered a valid risk factor in modelling the number of claims in motor insurance. If there are 6 age categories and the number of claims for a driver $Y\\_i$ in age category $6$ is modelled using a Poisson regression, which of the following statement is not correct?`,
cellType: "html",
choices: [
"$Y\\_i$ is assumed to have a Poisson distribution",
"The mean of $Y\\_i$ can be modelled under a log-link using $\\log \\mu\\_i = \\beta\\_0 + \\beta\\_6$",
"The mean $\\mu\\_i$ of $Y\\_i$ under a log-link can be expressed as $\\log \\mu\\_i = \\beta\\_6$",
"The mean $\\mu\\_i$ of $Y\\_i$ under a log-link can be expressed as $\\log \\mu\\_i = \\beta\\_0 + \\beta\\_1+...+\\beta\\_6$",
"The relation between the risk of someone in group $2$ and driver $Y\\_i$ in group $6$ can be given by $e^{\\beta\\_2}/e^{\\beta\\_6}$"
],
correctAnswer: "The mean $\\mu\\_i$ of $Y\\_i$ under a log-link can be expressed as $\\log \\mu\\_i = \\beta\\_0 + \\beta\\_1+...+\\beta\\_6$"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Age ($1$) and postcode ($2$) of drivers can be considered valid risk factors in modelling the number of claims in motor insurance. Driver $i$ has rating factors $\\boldsymbol{x}\\_i = (1,x\\_{i1},...,x\\_{ik})'$. The number of claims $Y\\_i$ for driver $i$ is modelled using a Poisson regression with exposure. The rate per exposure unit is $\\lambda\\_i$ where exposure is measured as the length of the observed period for the driver in the unit of year.  Which of the following statement is not correct?`,
cellType: "html",
choices: [
"The mean of $Y\\_i$ is $\\lambda\\_i$",
"The mean of $Y\\_i$ can be modelled under a log-link using $\\log m\\_i + \\beta\\_0 + \\beta\\_1 x\\_{i1} + + \\beta\\_2 x\\_{i2}$",
"The relation between the risk of driver $j$ and driver $i$ with the same rating factors can be given by $e^{m\\_j}/e^{m\\_i}$",
"The variance of $Y\\_i$ can be modelled using $\\log m\\_i + \\beta\\_0 + \\beta\\_1 x\\_{i1} + + \\beta\\_2 x\\_{i2}$",
"The mean $\\mu\\_i$ of $Y\\_i$ under a log-link can be expressed as $\\log \\mu\\_i = \\beta\\_0 + \\beta\\_1+...+\\beta\\_6$",
"$\\log m\\_i$ is also called the offset"
],
correctAnswer: "The mean of $Y\\_i$ is $\\lambda\\_i$."
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

document.getElementById("Quiz82Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult82');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement82").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
