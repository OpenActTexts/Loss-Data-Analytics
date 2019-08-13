

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
title: `How should the insurer determine the gross insurance premium for a single period based on the equivalence principle?`,
cellType: "html",
choices: [
"Gross insurance premium is set at the equilibrium premium level of total demand and supply of the insurance product in the insurance market.",
"Gross insurance premium is equal to the total of expected losses occurring from the risk transferred from the policyholder, expected expenses and profit loading.",
"Gross insurance premium is determined using the benchmark premium level in the insurance industry.",
"Gross insurance premium should be equal to the total of expected administrative expenses and brokerage commissions.",
"Gross insurance premium is set by the regulator annually."
],
correctAnswer: "Gross insurance premium is equal to the total of expected losses occurring from the risk transferred from the policyholder, expected expenses and profit loading." 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following can result in adverse selection?`,
cellType: "html",
choices: [
"Drivers from different ages pay the same premium for auto insurance.",
"Smokers and non-smokers pay different premiums for health insurance.",
"Policyholders with diabetes and without diabetes pay different premiums for life insurance.",
"Homeowners in flood zones and other zones pay different premiums for home insurance.",
"Individuals with different trip durations pay different premiums for travel insurance."
],
correctAnswer: "Drivers from different ages pay the same premium for auto insurance."
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following describes the term "adverse selection spiral" or "death spiral"?`,
cellType: "html",
choices: [
"Fair premium is charged for the policyholder.",
"The insurer develops a classification system to assign each policyholder to an appropriate risk class.",
"The insurer charges the same premium for any given policy, hence attracts individuals with higher risk while low-risk individuals have an incentive to not purchase the policy. This results in an increase in the average level of risk and premium making the policy even more unattractive to low-risk individuals.",
 "The insurer continually updates the premium as a result of changes in the mix of policyholders portfolio.",
 "The insurer continually lowers the premium as a result of high competition in the insurance market."
],
correctAnswer: "The insurer charges the same premium for any given policy, hence attracts individuals with higher risk while low-risk individuals have an incentive to not purchase the policy. This results in an increase in the average level of risk and premium making the policy even more unattractive to low-risk individuals."
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `How does an insurer use rating factors in the pricing process?`,
cellType: "html",
choices: [
"The insurer assigns each policyholder to one of the risk classes using a relatively small number of rating factors that are deemed most relevant and charges the same premium to all policyholders within the same risk class.",
"The insurer follows closely the prices charged by its main competitor.",
"All policyholders have homogeneous risk characteristics, hence the insurer does not need to consider rating factors and only needs to evaluate the risk of the portfolio as a whole to determine the price.",
"The insurer considers as many rating factors as possible and uses them all to assign policyholders to different risk classes.",
"Regulators do not allow insurers to differentiate policyholders by rating factors in the pricing process to avoid discrimination."
],
correctAnswer: "The insurer assigns each policyholder to one of the risk classes using a relatively small number of rating factors that are deemed most relevant and charges the same premium to all policyholders within the same risk class."
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following statements is not true regarding rating factors?`,
cellType: "html",
choices: [
"The classification system consisting of the most relevant rating factors allow the insurer to incorporate relevant risk characteristics of policyholders in the pricing process.",
"Rating factors are known before the insurance contract begins.",
"Rating factors should be considered by assessing their relationships with expected outcomes.",
"The standard approach used to determine expected loss given various rating factors is to adopt a regression model.",
"There are rating agencies specialised in rating policyholders and providing their results to insures."
],
correctAnswer: "There are rating agencies specialised in rating policyholders and providing their results to insures."
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary5EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz81Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult81');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement81").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
