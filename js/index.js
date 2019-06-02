//Insert data. (In the future we shoudl export it form another file or API)
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

let count;

initialize();

/* - - - - - F U N C T I O N S - - - - - - - - */
function initialize(){
    count = 0;
    let num = Math.floor(Math.random() * data.length);
    console.log(num)
}

function nextQuestion(){
    console.log('im here');
    count++
    let question = document.querySelector('.question-title');
    question.innerText = data[count].question ;
    
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

