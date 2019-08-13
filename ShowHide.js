

<!-- Mathjax -->
<script type='text/x-mathjax-config'>
		MathJax.Hub.Config({
			extensions: ['tex2jax.js'],
			jax: ['input/TeX', 'output/HTML-CSS'],
			tex2jax: {
				inlineMath: [ ['$','$'], ['\\(','\\)'] ],
				displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
				processEscapes: true
			},
			'HTML-CSS': { availableFonts: ['TeX'] }
		});
</script>

<!-- The following code is for the quizzes -->
<script src="https://surveyjs.azureedge.net/1.0.50/survey.jquery.js"></script>
<link href="https://surveyjs.azureedge.net/1.0.50/survey.css" type="text/css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js"></script>  

<script>
function markdownConverterEWF() {  
//Create showdown markdown converter
var converter = new showdown.Converter();
converter.setOption('ghCompatibleHeaderId', true);
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the mardown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
         MathJax.Hub.Queue(['Typeset',MathJax.Hub, 'options']);
    });  
};
// Quiz Header info
const jsonHeader = { 
    showProgressBar: "bottom",
    showTimerPanel: "none",
    maxTimeToFinishPage: 10000,
    maxTimeToFinish: 25000,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz" //,
//    title: "Does This Make Sense?"
}
// One and Two question quizzes
function jsonSummary1EWF(json) {  
let jsonEnd1 = { 
completedHtml: 
json["pages"][1]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][1]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][1]["questions"][0]["correctAnswer"]
};  
return jsonEnd1;
};


function jsonSummary2EWF(json) {  
let jsonEnd2 = { 
completedHtml: 
json["pages"][1]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][1]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][1]["questions"][0]["correctAnswer"]
+"<br>"+
json["pages"][2]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][2]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][2]["questions"][0]["correctAnswer"]
};  
return jsonEnd2;
};

// Three, four, and five question quizzes
function jsonSummary3EWF(json) {  
let jsonEnd3 = { 
completedHtml: 
json["pages"][1]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][1]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][1]["questions"][0]["correctAnswer"]
+"<br>"+
json["pages"][2]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][2]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][2]["questions"][0]["correctAnswer"]
+"<br>"+
json["pages"][3]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][3]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][3]["questions"][0]["correctAnswer"]
};  
return jsonEnd3;
};

function jsonSummary4EWF(json) {  
jsonEnd4 = jsonSummary3EWF(json);
jsonEnd4.completedHtml = jsonEnd4.completedHtml +  
"<br>"+
json["pages"][4]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][4]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][4]["questions"][0]["correctAnswer"]
;  
return jsonEnd4;
};

function jsonSummary5EWF(json) {  
jsonEnd5 = jsonSummary4EWF(json);
jsonEnd5.completedHtml = jsonEnd5.completedHtml +  
"<br>"+
json["pages"][5]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][5]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][5]["questions"][0]["correctAnswer"]
;  
return jsonEnd5;
};

function jsonSummary6EWF(json) {  
jsonEnd6 = jsonSummary5EWF(json);
jsonEnd6.completedHtml = jsonEnd6.completedHtml +  
"<br>"+
json["pages"][6]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][6]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][6]["questions"][0]["correctAnswer"]
;  
return jsonEnd6;
};

function jsonSummary7EWF(json) {  
jsonEnd7 = jsonSummary6EWF(json);
jsonEnd7.completedHtml = jsonEnd7.completedHtml +  
"<br>"+
json["pages"][7]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][7]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][7]["questions"][0]["correctAnswer"]
;  
return jsonEnd7;
};

function jsonSummary8EWF(json) {  
jsonEnd8 = jsonSummary7EWF(json);
jsonEnd8.completedHtml = jsonEnd8.completedHtml +  
"<br>"+
json["pages"][8]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][8]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][8]["questions"][0]["correctAnswer"]
;  
return jsonEnd8;
};

function jsonSummary9EWF(json) {  
jsonEnd9 = jsonSummary8EWF(json);
jsonEnd9.completedHtml = jsonEnd9.completedHtml +  
"<br>"+
json["pages"][9]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][9]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][9]["questions"][0]["correctAnswer"]
;  
return jsonEnd9;
};


function jsonSummary10EWF(json) {  
jsonEnd10 = jsonSummary9EWF(json);
jsonEnd10.completedHtml = jsonEnd10.completedHtml +  
"<br>"+
json["pages"][10]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][10]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][10]["questions"][0]["correctAnswer"]
;  
return jsonEnd10;
};


function jsonSummary11EWF(json) {  
jsonEnd11 = jsonSummary10EWF(json);
jsonEnd11.completedHtml = jsonEnd11.completedHtml +  
"<br>"+
json["pages"][11]["questions"][0]["name"]+ "<br>"+
"<i>Question: </i>"+json["pages"][11]["questions"][0]["title"]+"<br>"+
"<i>Answer: </i>"+json["pages"][11]["questions"][0]["correctAnswer"]
;  
return jsonEnd11;
};



</script>  
<!-- This completes the code for the quizzes -->


<!-- Various toggle functions used throughout --> 
<script language="javascript">
function toggle(id1,id2) {
	var ele = document.getElementById(id1); var text = document.getElementById(id2);
	if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Solution";}
		else {ele.style.display = "block"; text.innerHTML = "Hide Solution";}}
function togglecode(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show R Code";}
      else {ele.style.display = "block"; text.innerHTML = "Hide R Code";}}
function toggleEX(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Example";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Example";}}
function toggleTheory(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Theory";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Theory";}}
function toggleQuiz(id1,id2) {
   var ele = document.getElementById(id1); var text = document.getElementById(id2);
   if (ele.style.display == "block") {ele.style.display = "none"; text.innerHTML = "Show Quiz Solution";}
      else {ele.style.display = "block"; text.innerHTML = "Hide Quiz Solution";}}      
</script>

<!-- A few functions for revealing definitions -->
<script language="javascript">
<!--   $( function() {
    $("#tabs").tabs();
  } ); -->

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});
</script>

<script language="javascript">
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125587869-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125587869-1');
</script>
