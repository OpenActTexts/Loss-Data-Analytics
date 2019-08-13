

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
title: `Model selection should be based on what type of data set`,
cellType: "html",
choices: [
"In-sample or training dataset",
"In-sample or test dataset",
"Out-of-sample or training dataset",
"Out-of-sample or test dataset",
"No choice is correct"
],
correctAnswer: "In-sample or training dataset" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Model validation should be based on what type of data set`,
cellType: "html",
choices: [
"In-sample or training dataset",
"In-sample or test dataset",
"Out-of-sample or training dataset",
"Out-of-sample or test dataset",
"No choice is correct"
],
correctAnswer: "Out-of-sample or test dataset"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which one is a reason we do cross-validation for validation of our model?`,
cellType: "html",
choices: [
"Out-of-sample validation, although gold standard, is not always practical", 
"We have limited sample sizes and out-of-sample model selection depends on a random split of the data",
"Cross-validation retains the predictive flavour of the out-of-sample model validation process", 
"Cross-validation is more stable over random samples",
"All choices are correct"
],
correctAnswer: "All choices are correct"
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

document.getElementById("Quiz42Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult42');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement42").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
