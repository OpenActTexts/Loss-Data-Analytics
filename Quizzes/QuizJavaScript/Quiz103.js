

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
title: `"Which of the following is not a feature of quota share?`,
cellType: "html",
choices: [
"It is a type of proportional insurance",
"The reinsurer receives a flat percent of losses and premium",
"Reinsurer's uncertainty measured by the variance of their portfolio is maximized",
"The reinsurer shares responsibility for very large claims in the tail of the distribution with the insurer",
"It is desirable for the reinsurer"
],
correctAnswer: "Reinsurer's uncertainty measured by the variance of their portfolio is maximized" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not a feature of stop-loss reinsurance?`,
cellType: "html",
choices: [
"It is a type of non-proportional insurance",
"The reinsurer pays the amount of claim above the retention level",
"It is desirable for the insurer",
"Insurer's uncertainty measured by the variance of their portfolio is minimized",
"The reinsurer shares responsibility for very large claims in the tail of the distribution with the insurer"
],
correctAnswer: "The reinsurer shares responsibility for very large claims in the tail of the distribution with the insurer"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is correct about the optimal choice for excess of loss retention limits?`,
cellType: "html",
choices: [
"The insurer wishes to maximize the uncertainty of their risks",
"The constraint in the optimization problem is the uncertainty constraint",
"The optimal retention limit less the expected insurer's claim is the same for all risks",
"The optimal retention limit is linearly increasing with the required revenue",
"The optimal retention limit is inversely proportional to the variance of the risk"
],
correctAnswer: "The optimal retention limit less the expected insurer's claim is the same for all risks"
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

document.getElementById("Quiz103Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult103');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement103").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
