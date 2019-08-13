

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
title: `The general recurrence relation, $p\\_k/p\\_{k-1} = a + \\frac{b}{k}, k \\ge 1$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions.  If $a<0$, we get a:`,
cellType: "html",
choices: [
"Poisson distribution",
"Negative binomial distribution",
"All choices are correct",
"No choice is correct",
"Binomial distribution"
],
correctAnswer: "Binomial distribution"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The general recurrence relation, $p\\_k/p\\_{k-1}  = a + \\frac{b}{k}, k \\ge 1$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions. If $a = 0$, and $b > 0$, we get a:`,
cellType: "html",
choices: [
"Binomial distribution",
"Negative binomial distribution",
"All choices are correct",
"No choice is correct",
"Poisson distribution"
],
correctAnswer: "Poisson distribution"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `The general recurrence relation, $p\\_k/p\\_{k-1}  = a + \\frac{b}{k}, k \\ge 1$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions. If $a > 0$, and $a+b > 0$ (or equivalently $b=(r−1)a$ with $r>0$), we get a:`,
cellType: "html",
choices: [
"Binomial distribution",
"Poisson distribution",
"All choices are correct",
"No choice is correct",
"Negative binomial distribution"
],
correctAnswer: "Negative binomial distribution"
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

document.getElementById("Quiz23Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult23');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement23").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
