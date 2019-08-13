

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
title: `To apply the recursive method of computing the distribution of aggregate losses, the severity distribution, $X$, needs to be`,
cellType: "html",
choices: [
"Continuous",
"Discrete",
"Normally distributed",
"Log normally distributed",
"Infinite"
],
correctAnswer: "Discrete" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `To apply the monte-carlo simulation to evaluate the distribution of aggregate losses,`,
cellType: "html",
choices: [
"Only the frequency distribution needs to be known",
"Only the severity distribution needs to be known",
"Only the type of frequency and severity distributions need to be known",
"The frequency and severity distributions, including the parameter values need to be known",
"No choice is correct" 
],
correctAnswer: "The frequency and severity distributions, including the parameter values need to be known"
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

document.getElementById("Quiz54Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult54');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement54").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
