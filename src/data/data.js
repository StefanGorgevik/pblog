export const article1 = [{
    title: 'Event Delegation',
    text: 'JS event listeners fire not only on a single DOM element but on all its descendants. So, every event listener put on a parent will be trigger for its children too.'
},
{
    title: 'Event Bubbling',
    text: 'Also known as propagation, event on an element will “bubble up” and also fire on all parents. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.'
},
{
    title: 'IIFE – Immediately Invoked Function Expression',
    text: 'The code gets executed as soon as it is created. They don’t pollute the global object and you can isolate your functions easily by creating an IIFE.'
},
{
    title: 'Difference between function definition and expression',
    text: 'Expressions resolve in a value even if it is undefined, and a function definition is only a statement. MDN: an expression is any valid unit of code resolves to a value. A definition actually creates a reference, but not a value.',
    include: ['function foo() { }  // definition',  'var foo = () { } // expression']
},
{
    title: 'Hoisting',
    text: 'All vars are declared at top of a function’s scope whether you like it or not. This includes function declarations. Const and let can help you with hoisting because they are scoped within the blocked that they are created in. '
},
{
    title: 'Difference between == and ===',
    text: "It is a well-known fact that using === is better than ==, however, if you know exactly what you are comparing, using == is completely okay. Let's see the difference.",
    include: ["== checks equality and doesn’t do type coercion", "=== checks for equality and type (does type coercion)"]
},
{
    title: 'Dot vs Bracket notation',
    text: 'There are two ways to access properties in a object. With dot and bracket notation. Dot is usually use when you are certain of they object key, and bracket notation can be used for a more dynamic access to the objects.',
    include: ["let object = {person: 'Mike'};"," let person = object.person; //dot notation", "let person = object[person]; //bracket notation"]
},
{
    title: "Destructuring",
    text: "Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.",
    include: [
        "//Object Destructuring",
        "let person = {name: 'Mike', country: 'France'};",
        "let {name, country} = person;",
        "//Array Destructuring",
        "let people = ['Mike', 'Geoffrey'];",
        "let [person1, person2] = people; //person1 is Mike, person2 is Geoffrey" 

    ]
},
{
    title: "Use strict",
    text: "The purpose of use strict is to activate the strict mode in JavaScript that wasn’t recognized before. It is a declaration to look for mistakes in your code, like undeclared variables."
},
{
    title: "Asynchronus vs syncronous operations",
    text: "When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes. Synchronous or Synchronized means 'connected', or 'dependent' in some way. In other words, two synchronous tasks must be aware of one another, and one task must execute in some way that is dependent on the other, such as wait to start until the other task has completed. Asynchronous means they are totally independent and neither one must consider the other in any way, either in the initiation or in execution."
},
{
    title: "Promises",
    text: "With the help of promises, we can deal with asynchronous code in our application more easily. When you make a promise, that can be fulfilled in the future, you have to return something because it is a promise. That being said, a promise can return three outcomes:",
    include: ["pending (working) - the result is undefined", "fulfilled - the result is a value.", "rejected - the result is an error objects"]
},
{
    title: "Callbacks",
    text: "Callbacks are mainly needed for asynchronous operations. They are passed as a parameter to another function and they are used when one function has to wait for another function to end and give back the result. Callbacks are used when you need to return something, even if it is undefined or an error. ",
    include: ["function sayHello(name) { alert('Hello ' + name); }", "function welcomeUser(callback) {", "var name = prompt('Please enter your name.');", "callback(name); }", "welcomeUser(sayHello);"]
},
{
    title: "Async - await",
    text: "When you add the word 'async' before a function, it means that a function always returns a promise. Other values are wrapped in a resolved promise automatically. Async ensures that the function returns a promise, and wraps non-promises in it. On the other hand, the word 'await' makes JavaScript wait until that promise settles and returns its result.",
    include: [
        "async function getResult() { ", 
        "let promise = new Promise((resolve, reject) => {", 
        "       setTimeout(() => resolve('done!'), 1000)",
        " }); ",
        "let result = await promise; // wait until the promise resolves (*)  ", 
        "return result; // will return result after the promise is fulfilled ",
        "} ",
        "getResult()"
    ]
},
{
    title: "Try – Catch – Finally",
    text: "With the help of the ‘try’ statement you can define a block of code to be tested for errors while it is being executed. If by any reason there is an error in the try block, the ‘catch’ statement is there to return the error, and stop the code execution. The ‘finally’ statement executes at the end and after the ‘try’ and ‘catch’ statements are executed. It is executed regardless the outcome from the ‘try-catch’ block.",
    include: [
        "try {",
        "//make some calls here, for example, you can use promises and wait for them to be fulfilled",
        "} catch (error) {",
        "console.log(error) //you can throw the Error here and stop the code execution",
        "}finally () {",
        "//this will be executed regardless the outcome of the try-catch block",
        "}"
    ]
}, 
{
    title: "Anonymous functions",
    text: "They are functions that have no name, and can’t be accessed after their initial creation. Functions stored in variables do not require naming. They are always executed using the name of the variable. Example:",
    include: [
        "const alertMe = function() {",
        "alert(‘You have been alerted’);",
        "}",
        "alertMe();"
    ]
},
{
    title: "Javascript inheritance",
    text: "",
},
{
    title: "Closures",
    text: "",
},
{
    title: "Ternary operator",
    text: "",
},
{
    title: "",
    text: "",
}]

export const article2 = []
export const article3 = []
export const article4 = []
export const article5 = []
export const article6 = []

export const article1Data = {
    title: "Javascript interview preparation",
    text: "Every interview will make you question your skills and knowledge as a developer. For all of you javascript developers out there, i prepared a cheatsheet containing everything you need to get reminded about Javascript in depth. I have collected the data by myself and I did a research about every interview I've been to. Hopefully, this will help you. (Mistakes can be reported too :) )",
    article: article1
}
export const article2Data = {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    article: article2
}
export const article3Data = {
    title: "Why do we use it?",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ",
    article: article3
}
export const article4Data = {
    title: "How come it is so famous",
    text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    article: article4
}
export const article5Data = {
    title: "Where does it come from?",
    text: "Every interview will make you question your skills and knowledge as a developer. For all of you javascript developers out there, i prepared a cheatsheet containing everything you need to get reminded about Javascript in depth. I have collected the data by myself and I did a research about every interview I've been to. Hopefully, this will help you. (Mistakes can be reported too :) )",
    article: article5
}
export const article6Data = {
    title: "Where can I get some?",
    text: "Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Maloru by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    article: article6
}

export const articles = [article1Data, article2Data, article3Data, article4Data, article5Data, article6Data, article2Data, article2Data, article3Data, article4Data, article5Data, article6Data, article1Data, article5Data, article6Data, article1Data]