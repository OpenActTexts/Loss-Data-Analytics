

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
title: `Which of the following is not a use of credibility theory?`,
cellType: "html",
choices: [
"Using the insured's own loss experience to complement the rate from the classification rating plan",
"Determining rates for individual classes within a classification rating plan using average experience across all classes",
"Updating class rating plan using the current class rate",
"Comparing rates across insurers",
"Calculating expected frequencies and severities"
],
correctAnswer: "Comparing rates across insurers" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the statement is not correct regarding the credibility formula given in this section?`,
cellType: "html",
choices: [
"It is a weighted average of average loss for the risk and rate for the whole risk group",
"The credibility weight is a value between 0 and 1",
"For a risk whose loss experience is stable from year to year, the credibility weight might be close to 0",
"When the credibility weight is close to 0, credibility weighted rate is close to the average experience for risk across all classes",
"The complement of credibility can be assigned to the current class rate if we want to update a class rating plan"
],
correctAnswer: "For a risk whose loss experience is stable from year to year, the credibility weight might be close to 0"
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

document.getElementById("Quiz91Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult91');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement91").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
