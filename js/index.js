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
        question: '4. Cool so assuming we ve decided that a publish/subscribe system would be best to support this communication, how would you go about writing one.',
        answer: 'What you should expect is at least 3 methods, publish/subscribe/unsubscribe which are fronts for managing a keyd object witharray d values of the listeners so when a publish occurs, all subscribers get the same event. Extra credit for throwing setTimeouts for async processing and using call/apply to pass in arguments to subscribers.'
    }
]

let obj = {
    javascript: [
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
            question: '4. Cool so assuming we ve decided that a publish/subscribe system would be best to support this communication, how would you go about writing one.',
            answer: 'What you should expect is at least 3 methods, publish/subscribe/unsubscribe which are fronts for managing a keyd object witharray d values of the listeners so when a publish occurs, all subscribers get the same event. Extra credit for throwing setTimeouts for async processing and using call/apply to pass in arguments to subscribers.'
        }
    ],
    css: [
        {
            question: '1. What is CSS?',
            answer: 'CSS outline the style of an HTML webpage, it is a language by which we can set the behavior of an HTML webpage. It describes how the HTML content will be shown on screen.'
        },
        {
            question: '2. Why is the external style sheet useful?',
            answer: 'External style sheet is very useful as we write all the styling codes in a single file and it can be used anywhere by just referencing the link of that external style sheet file.'
        }
    ],
    html: [
        {
            question: '1. What is HTML?',
            answer: 'HTML is short for HyperText Markup Language and is the language of the World Wide Web. It is the standard text formatting language used for creating and displaying pages on the Web. HTML documents are made up of two things: the content and the tags that format it for proper display on pages.'
        },
        {
            question: '2. What are tags?',
            answer: 'Content is placed in between HTML tags in order to properly format it. It makes use of the less than symbol (<) and the greater than symbol (>). A slash symbol is also used as a closing tag. For example:'
        }
    ]
}

let count;

initialize();

console.log(jsq);

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

function addFlashcard(){
    console.log('I am a new flashcard!!');
    let newCategory = document.querySelector('#newCategory');
    let newQuestion = document.querySelector('#newQuestion');
    let newAnswer = document.querySelector('#newAnswer');

    category = newCategory.value;
    obj[category] = [];

    let quesAns = {
        'question': newQuestion.value,
        'answer': newAnswer.value
    }

    console.log('this new category', newCategory.value);

    if (!newCategory.value || !newQuestion.value || !newAnswer) {
        alert('To add a new Card you must \n - Add a category, Question and Answer in the Form');
    } else {
        obj[category].push(quesAns); 
        console.log('added new question', quesAns);
    }



}