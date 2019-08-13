

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
title: `Which of the following is not correct regarding primary data?`,
cellType: "html",
choices: [
"It is collected for a specific research problem",
"It is less expensive and can be accessed faster",
"It allows the research design and data collection strategy to be tailored to the underlying research question",
"It is considered optimal for the research question under consideration",
"It is not data collected for a different purpose and reused for another research problem"
],
correctAnswer: "It is less expensive and can be accessed faster"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is correct regarding structured data?`,
cellType: "html",
choices: [
"It has a predictable and regularly occurring format",
"Most units of structured data can be located quickly and easily",
"Some common forms of structured data are text, videos and audio files",
"It can be organised into a table consists of rows and columns",
"The SQL can be used to access and modify structured data easily and efficiently"
],
correctAnswer: "Some common forms of structured data are text, videos and audio files"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is the definition of key-value databases?`,
cellType: "html",
choices: [
"Key-value databases store and process data according to columns",
"Key-value databases use simple data model and store data according to key-values",
"Key-value databases support very complex data forms such as SimpleDB",
"Key-value databases store data in tables consisting of rows and columns",
"Key-value databases store data in rows and columns segmented in multiple notes to achieve expandability"
],
correctAnswer: "Key-value databases use simple data model and store data according to key-values"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following is an example of quantitative data?`,
cellType: "html",
choices: [
"Interviews",
"Documents",
"Audio",
"Artifacts",
"Age categories"
],
correctAnswer: "Age categories"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is a source of data?`,
cellType: "html",
choices: [
"University-based researchers",
"Organizations",
"National and regional statistical institutes",
"Companies",
"All choices are correct"
],
correctAnswer: "All choices are correct"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 6</b>",
choicesOrder: "random",
title: `Which of the following is not a component of data quality?`,
cellType: "html",
choices: [
"Accuracy",
"Completeness",
"Relevance",
"Cost-effectiveness",
"Trustworthiness"
],
correctAnswer: "Cost-effectiveness",
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 7</b>",
choicesOrder: "random",
title: `Which of the following statements is not correct regarding data quality?`,
cellType: "html",
choices: [
"Inaccurate data can arise from data extracting, cleaning, or integrating",
"Inaccurate data elements can be found by manually checking every data element using the original source of the data",
"Faulty reporting and lack of understanding can lead to inaccurate data",
"Reverification can always be used to find inaccurate data elements",
"Analytical techniques can be used to identify inaccurate data elements using software"
],
correctAnswer: "Reverification can always be used to find inaccurate data elements"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 8</b>",
choicesOrder: "random",
title: `Which of the following areas do not require attention in cleaning data?`,
cellType: "html",
choices: [
"Software used for data storage",
"Format",
"Duplicate records",
"Merging data sets",
"Outliers"
],
correctAnswer: "Software used for data storage"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary8EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz131Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult131');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement131").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
