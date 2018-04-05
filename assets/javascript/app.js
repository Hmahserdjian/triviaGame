

var quiz =[
{
    q:"Based off of Doctor Doom who is Butters alter ego?",
    choices:["Monkey boy", "Butterman", "Evil Mean Guy", "Professor Choas"],
    correct:"3"
},
{
    q:"How many episodes are there in South Park?",
    choices:["too many","not enought","who cares","283"],
    correct:"3"
},
{
    q: "How many times has Kenny been killed off?",
    choices:["IDK","IDC","126", "97"],
    correct: "2"
},
{
    q:"How many times has Kenny's face been Shown?",
    choices:["5", "8", "0", "10"],
    correct:"0"
},
{
    q: "Which band plays the opening theme song?",
    choices: ["vitas", "Primus", "Ed Sheern", "Wu-tang clan"],
    correct: "1"
},
{
    q:"When was South Park first Aired?",
    choices: ["2030", "1808", "1997","1999"],
    correct: "2"

}
];



var currentQuestion = 0;
function displayQA(params) {
    currentQuestion ++;
    for (let index = 0; index < quiz.length; index++) {
        $(".questionsBox").append(`<h3 class='text-center' data-answer="${quiz[index].correct}">${quiz[index].q}</h3>`);
        
        for (let j = 0; j < quiz[index].choices.length; j++) {
            
            if (quiz[index]){
                
                $(".questionsBox").append(`<button class='btn btn-primary multi' choice="${j}">${quiz[index].choices[j]}</button>`);
            };
            
        };
    };
};

function checkAnswer() {
    $(".multi").click(function(){0});
   alert("hello")
};


displayQA();
   
    
