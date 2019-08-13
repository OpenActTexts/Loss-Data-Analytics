

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
title: `Which of the following describes the term "machine learning"?`,
cellType: "html",
choices: [
"The process of using data to make decisions",
"The process of using special methods and tools that can extract information rapidly from a massive data set",
"The process of cleaning data before useful analysis can be conducted",
"The process of using experience to improve performance or make accurate predictions in computational methods",
"The process of learning about computational programming"
],
correctAnswer: "The process of using experience to improve performance or make accurate predictions in computational methods"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following describes the term "data mining"?`,
cellType: "html",
choices: [
"The field concerning collecting, cleaning, analyzing and gaining useful insights from data",
"The process of collecting data and making it available to to the public",
"The process of using special methods and tools that can extract information rapidly from a massive data set",
"The process of synchronizing the documentation of the data analysis with the analysis",
"The field where data mechanism is treated as unknown and algorithmic models are used"
],
correctAnswer: "The field concerning collecting, cleaning, analyzing and gaining useful insights from data"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is not a part of descriptive statistics?`,
cellType: "html",
choices: [
"Collection and organization of data",
"Summarization of data",
"Quantitative description of data",
"Visualization of data using tools such as boxplots or histograms",
"Prediction of future responses using existing data"
],
correctAnswer: "Prediction of future responses using existing data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following statements is not correct about principal component analysis?`,
cellType: "html",
choices: [
"It is used for dimension reduction",
"It transforms a dataset described by possibly correlated variables into a dataset described by linearly uncorrelated variables",
"Principal components are ordered randomly",
"Principal components are related to the eigenvectors and eigenvectors of the covariance matrix of the variables",
"The first few principal components can account for most of the variation of the original data if the original variables are highly correlated"
],
correctAnswer: "Principal components are ordered randomly"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following statements is not correct about the $k$-means algorithm?`,
cellType: "html",
choices: [
"It is a clustering algorithm",
"It divides a dataset into clusters such that points in the same cluster are similar and points from different clusters are different",
"It aims at minimizing the Euclidean distance between data points and cluster centers",
"Partition matrix and the cluster centers are updated iteratively in the algorithm",
"The clusters are usually highly correlated"
],
correctAnswer: "The clusters are usually highly correlated"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 6</b>",
choicesOrder: "random",
title: `Consider the following linear regression model, $y\\_i = \\beta\\_0 + \\beta_1x\\_{i1} + \\beta\\_2 x\\_{i2} + \\epsilon\\_i.$ Which of the following is often not an assumption of this regression model?`,
cellType: "html",
choices: [
"$y\\_1,...,y\\_n$ are dependent random variables",
"$x\\_{i1}$ and $x\\_{i2}$ are nonstochastic variables",
"$\\beta\\_0,\\beta\\_1,\\beta\\_2$ are unknown parameters to be estimated",
"$\\epsilon\\_i$ is a random variable representing error for the $i$th case",
"$\\epsilon\\_1,\\epsilon\\_2,...,\\epsilon\\_n$ are normally distributed"
],
correctAnswer: "$y\\_1,...,y\\_n$ are dependent random variables"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 7</b>",
choicesOrder: "random",
title: `Which of the following is not a feature of the generalized linear model (GLM)?`,
cellType: "html",
choices: [
"The mean of the dependent variable is assumed to be a function of linear combinations of the explanatory variables",
"The dependent variable is assumed to follow a distribution from the exponential dispersion family",
"Linear regression is a special case of the GLM",
"The GLM provides a unifying framework for the modeling of observations in a dataset with various features",
"The variances of all dependent variables are the same"
],
correctAnswer: "The variances of all dependent variable are the same"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 8</b>",
choicesOrder: "random",
title: `How is prediction performed using a decision tree?`,
cellType: "html",
choices: [
"By using a linear function of explanatory variables",
"By applying a function on linear combinations of explanatory variables",
"By dividing the predictor space into non-overlapping regions and using the mean or mode of each region for prediction",
"By transforming a dataset into a dataset described by linearly uncorrelated variables",
"By using descriptive statistics such as mean, mode or quantile"
],
correctAnswer: "By dividing the predictor space into non-overlapping regions and using the mean or mode of each region for prediction"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 9</b>",
choicesOrder: "random",
title: `Which of the following is not a feature of a regression tree?`,
cellType: "html",
choices: [
"It applies to continuous dependent variables",
"The predictor space is divided into regions such that a specified objective function is minimized",
"It outperforms other regression models",
"It has strength in modeling when the relationship between the response and the predictors is nonlinear",
"The mean or mode of the regions in predictor space is used for prediction"
],
correctAnswer: "It outperforms other regression models"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary9EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz133Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult133');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement133").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
