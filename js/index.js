//Insert data. (In the future we shoudl export it form another file or API)

let jsq = [
    {
        question: '',
        answer: ''
    },
    { question:  "Inside which HTML element do we put the JavaScript?",
      questionType:  2,
                correctChoice: "script",
                score: 10,
    },
    { question:  "Where is the correct place to insert a JavaScript?",
      questionType:  1,
                choices: [ "head", "body", "both"],
                correctChoice: "both",
                score: 5,
    },
    { question:  "How to write an IF statement in JavaScript?",
      questionType:  1,
                choices: [ "if (i == 5)", "if (i = 5)", "if i = 5"],
                correctChoice: "if (i == 5)",
                score: 5,
    },
    { question:  "Which event occurs when the user clicks on an HTML element?",
      questionType:  1,
      choices: [ "onchange", "onmousehover", "onclick"],
      correctChoice: "onclick",
      score: 5,
    },
    { question:  "How do you declare a JavaScript variable?",
      questionType:  1,
      choices: [ "var car", "v car", "variable car"],
      correctChoice: "var car",
      score: 5,
    },
    { question:  "The Tag is used To Give Heading To The Table",
      questionType:  1,
      choices: [ "td", "tr", "thead"],
      correctChoice: "td",
      score: 5,
    },
    { question:  "Which Of The Dialog Box Display a Message And a Data Entry Field",
      questionType:  1,
      choices: [ "consolelog", "promt", "alert"],
      correctChoice: "alert",
      score: 5,
    },
    { question:  "Function is Used To Parse a String To Int",
      questionType:  1,
      choices: [ "intparse", "parseint", "toint"],
      correctChoice: "parseint",
      score: 5,
    },
    { question:  "Java Script File Has An Extension Of",
      questionType:  1,
      choices: [ "js", "j", "jsc"],
      correctChoice: "js",
      score: 5,
    },
    { question:  "If Button is clicked .......Event Handler is invoked",
      questionType:  1,
      choices: [ "OnSubmit", "Onload", "OnClick"],
      correctChoice: "OnClick",
      score: 5,
    }
  ];

let data = [
    {
        question: 'A question will appear once you clicked the button, his Answer will appear when you hover over the card',
        answer: 'This will be the Answer,\b Good Luck!'

    },
    {
        question: '1. Can you name two programming paradigms important for JavaScript app developers?',
        answer: 'JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.',
    },
    {
        question: '2. What is functional programming?',
        answer: 'Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.'
    },
    {
        question: '3. What is the importantance of modularized system development in the web world?',
        answer: 'Witzh javascript becoming a base language for web development, the ability to write complicated code becomes much easier. Seperation of concerns and responsibilities are         crucial to developing maintainable systems. Seperating these things into modules allow         developers to make smart choices of around reuse and efficent ',
    },
    {
        question: '4. Cool so assuming we\'ve decided that a publish/subscribe system would be best to support this communication, how would you go about writing one.',
        answer: 'What you should expect is at least 3 methods, publish/subscribe/unsubscribe which are fronts for managing a key\'d object witharray\'d values of the listeners so when a publish occurs, all subscribers get the same event. Extra credit for throwing setTimeouts for async processing and using call/apply to pass in arguments to subscribers.'
    }
]

let count = 0;

nextQuestion();

/* - - - - - F U N C T I O N S - - - - - - - - */
function nextQuestion(){
    console.log('im here');
    let question = document.querySelector('.question-title');
    question.innerText = data[count].question ;

    count++;

    console.log(question.innerText);
}

function showAnswer(){
    console.log('im in showAnswer');
    let answerSelect = document.querySelector('.main-description');
    answerSelect.innerText = data[count].answer;
}

function hideAnswer(){
    console.log('im in hideAnswer');
    let answerSelect = document.querySelector('.main-description');
    answerSelect.innerText = '';
}

