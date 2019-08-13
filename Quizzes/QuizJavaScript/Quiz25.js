

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
title: `A count distribution that is a member of the (a,b,1) class is useful in what kind of scenarios?:`,
cellType: "html",
choices: [
"When we are looking at the number of insurance claims and there are few zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates", 
"When we are looking at the number of insurance claims and the zero counts are in line with the frequency distributions e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates",
"All choices are correct",
"No choice is correct", 
"When we are looking at the number of insurance claims and there is an excess of zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates" 
],
correctAnswer: "When we are looking at the number of insurance claims and there is an excess of zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The recursive formula for the (a,b,1) class starts with`,
cellType: "html",
choices: [
"$p\\_0$",
"$p\\_1$",
"$p\\_2$",
"$p\\_3$",
"$p\\_4$"
],
correctAnswer: "$p\\_4$"
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

document.getElementById("Quiz25Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult25');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement25").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
