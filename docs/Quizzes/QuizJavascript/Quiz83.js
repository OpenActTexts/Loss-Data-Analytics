

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
title: `Which of the following statement is not correct about a tariff?`,
cellType: "html",
choices: [
"A tariff contains each set of rating factors and the associated premium",
"If there are 3 rating factors: factor 1 with 4 groups, factor 2 with 2 groups and factor 3 with 3 groups, there will be 4 tariff cells in total",
"Each tariff cell is a unique combination of the rating factors",
" A tariff can be a set of tables",
"A tariff also contains exposure and claim counts information"
],
correctAnswer: "If there are 3 rating factors: factor 1 with 4 groups, factor 2 with 2 groups and factor 3 with 3 groups, there will be 4 tariff cells in total"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The loss count of a policyholder is described by rate $\lambda$ and exposure $m$. Consider a multiplicative tariff model for the Poisson rate with 3 rating types: type A with 4 factors, type B with 2 factors and type C with 3 factors. Which of the following statements is not correct about this tariff model?`,
cellType: "html",
choices: [
"The expected loss count for a policyholder with rating factor $i,j,k$ is $f\\_0\\times f\\_{Ai} \\times f\\_{Bj} \\times f\\_{Ck}$.",
"The ratio of rate for a policyholder with rating factors $1,2,3$ and a policyholder with rating factors $2,2,3$ is $\\frac{f\\_{A1}}{f\\_{A2}}$",
"For parameters to be uniquely defined, we can assume $f\\_{A1} = f\\_{B1} = f\\_{C1}=1$",
"Risk factors are assumed to have to serious interaction among them",
"The base tariff cell is $(1,1,1)$"
],
correctAnswer: "The expected loss count for a policyholder with rating factor $i,j,k$ is $f\\_0\\times f\\_{Ai} \\times f\\_{Bj} \\times f\\_{Ck}$."
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The loss count of a policyholder is described by rate $\\lambda$ and exposure $m$. Consider the log transformation of a multiplicative tariff model for $\\lambda$ with 3 rating types: type A with 4 factors, type B with 2 factors and type C with 3 factors. Assume that $f\\_{A1} = f\\_{B1} = f\\_{C1}=1$. Which of the following statements is not correct about individual tariff cells in this model?`,
cellType: "html",
choices: [
"A policyholder in base tariff cell has $\\log \\lambda = \\log f\\_0$",
"A policyholder in cell $(2,1,3)$ has $\\log \\lambda = \\log f\\_0 + \\log f\\_{A2} + 1 + \\log f\\_{C3}$",
"A policyholder in cell $(2,2,3)$ has $\\log \\lambda = \\log f\\_0 + \\log f\\_{A2} + \\log f\\_{B2} + \\log f\\_{C3}$",
"A policyholder in cell $(3,2,3)$ has $\\lambda = f\\_0 \\times f\\_{A3} \\times f\\_{B2} \\times f\\_{C3}$",
"A policyholder in cell $(2,2,4)$ has $\\lambda =  f\\_0 \\times \\frac{\\log f\\_{A2}}{c} \\times c f\\_{B2}\\times f\\_{C4}$ for any $c>0$"
],
correctAnswer: "A policyholder in cell $(2,1,3)$ has $\\log \\lambda = \\log f\\_0 + \\log f\\_{A2} + 1 + \\log f\\_{C3}$"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Consider the example in Section 8.3.3. Which of the following statements is not correct?`,
cellType: "html",
choices: [
"Tariff cell $(2,1)$ has indicator triple $(1,0,0)$",
"Tariff cell $(2,3)$ has indicator triple $(1,0,1)$",
"Tariff cell $(2,2)$ has indicator triple $(1,1,1)$",
"The ratio of relativities of tariff cell $(1,2)$ to base tariff cell is $e^{\\beta\\_1}$",
"The ratio of relativities of tariff cell $(1,2)$ to tariff cell $(2,3)$ is $e^{\\beta\\_1}/e^{\\beta\\_3}$"
],
correctAnswer: "Tariff cell $(2,2)$ has indicator triple $(1,1,1)$"
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

document.getElementById("Quiz83Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult83');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement83").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
