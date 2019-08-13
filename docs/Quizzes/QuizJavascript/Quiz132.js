

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
title: `Which of the following does not fall within the scope of data analysis?`,
cellType: "html",
choices: [
"Using procedures to analyze data",
"Interpreting results obtained from analyzing data",
"Planning the gathering of data to make its analysis easier, more precise or more accurate",
"Obtaining useful information to suggest conclusions and make decisions",
"Updating software used to store data"
],
correctAnswer: "Updating software used to store data"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following steps is not a component of a data analysis process?`,
cellType: "html",
choices: [
"Manually checking every data element using the original source of the data",
"Exploring the relationships within the data and figuring out which type of analysis makes sense",
"Performing statistical analysis",
"Interpreting the statistical results in the context of the overall study",
"Interpreting the data by connecting it to the study goals and the larger field of the study"
],
correctAnswer: "Manually checking every data element using the original source of the data"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following statements is correct?`,
cellType: "html",
choices: [
"Exploratory data analysis uses experimental data whereas confirmatory data analysis uses observational data",
"Exploratory data analysis aims to test hypotheses whereas confirmatory data analysis aims to formulate hypotheses",
"Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance",
"Exploratory data analysis uses traditional statistical tools of inference, significance and confidence whereas confirmatory data analysis uses descriptive statistics",
"All choices are correct"
],
correctAnswer: "Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `How are supervised learning methods different from unsupervised learning methods?`,
cellType: "html",
choices: [
"Supervised learning methods work with a target variable and explanatory variables whereas unsupervised learning methods work with explanatory variables only",
"Supervised learning methods requires close supervision in the implementation of statistical analyses whereas unsupervised learning methods do not",
"Supervised learning methods are also called descriptive modeling methods whereas unsupervised learning methods are called statistical methods of inference",
"Supervised learning methods are called classification methods whereas unsupervised learning methods are called regression methods",
"Supervised learning methods work with unlabeled data whereas unsupervised learning methods work with labeled data"
],
correctAnswer: "Supervised learning methods work with a target variable and explanatory variables whereas unsupervised learning methods work with explanatory variables only"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is an advantage of parametric modeling?`,
cellType: "html",
choices: [
"It is less time consuming to perform than nonparametric modeling",
"It makes fewer assumptions on the data",
"It is more flexible and robust",
"It is applicable to non-quantitative data",
"Properties of the data and of the method can be derived if the distribution of the data is known"
],
correctAnswer: "Properties of the data and of the method can be derived if the distribution of the data is known"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 6</b>",
choicesOrder: "random",
title: `Which of the following does not describe explanatory modeling:`,
cellType: "html",
choices: [
"Explanatory modeling aims to explain the causal relationships between the input variables and the response variable",
"Explanatory modeling is commonly used for developing theory",
"A component explanatory modeling typically involves building a bridge between theoretical models and observable measurements",
"Explanatory modeling utilizes any method that produces predictions",
"Theory testing is a use of explanatory modeling"
],
correctAnswer: "Explanatory modeling utilizes any method that produces predictions"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 7</b>",
choicesOrder: "random",
title: `Which of the following is not correct?`,
cellType: "html",
choices: [
"An example of algorithmic modeling is linear regression",
"Algorithmic modeling treats the data mechanism as unknown",
"Algorithmic modeling allows statisticians to deal with a wide range of problems",
"Algorithmic modeling aims to provide predictive accuracy",
"The theory in algorithmic modeling focuses on the properties of algorithms"
],
correctAnswer: "An example of algorithmic modeling is linear regression"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 8</b>",
choicesOrder: "random",
title: `Which of the following describes the term "big data analysis"?`,
cellType: "html",
choices: [
"The process of examining data sets to draw conclusions about the information they contain",
"The process of looking for patterns and formulating hypotheses using observational data",
"The process of exploring the causal relationships between the input variables and the response variable using observational data",
"The process of predicting the responses given the input variables",
"The process of using special methods and tools that can extract information rapidly from massive data"
],
correctAnswer: "The process of using special methods and tools that can extract information rapidly from massive data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 9</b>",
choicesOrder: "random",
title: `Which of the following terms is the name of a big data analysis method that partitions data in order to spread up reading?`,
cellType: "html",
choices: [
"Bloom filter",
"Hashing",
"Indexing",
"Tries.",
"Parallel computing"
],
correctAnswer: "Indexing"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 10</b>",
choicesOrder: "random",
title: `Which of the following is not a good practice in reproducible analysis?`,
cellType: "html",
choices: [
"Storing data together with the analysis scripts",
"Separating the documentation of the analysis from the analysis",
"Writing the scripts so that any part of the workflow can be run completely automatically at any time",
"Synchronizing the documentation of the analysis with the analysis",
"Using literate program such as R Markdown"
],
correctAnswer: "Separating the documentation of the analysis from the analysis"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 11</b>",
choicesOrder: "random",
title: `Which of the following is not an ethical consideration for data analysis in actuarial science and insurance?`,
cellType: "html",
choices: [
"Will the project contribute in a significant way to a broader domain?",
"Is the team capable of carrying out the project?",
"Are the cost and benefit equitable?",
"How do we keep the information confidentially?",
"Is it opportunistic and beneficial for my current career?"
],
correctAnswer: "Is it opportunistic and beneficial for my current career?"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary11EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz132Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult132');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement132").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
