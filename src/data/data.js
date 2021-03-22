export const article1 = [{
    title: "Event Delegation",
    text: ["JS event listeners fire not only on a single DOM element but on all its descendants. So, every event listener put on a parent will be triggered for its children too. With event delegation, you don't have to add event listener to each descendant, you can simply add it to the parent, capture the event and check the event.target that comes with the event."]
},
{
    title: "Event Bubbling",
    text: [" Event bubbling is connected to the sequence in which events are called when one element is nested inside a second element, and both elements have the same event listener.",
    "It is also known as propagation, and it means that events on an element can “bubble up” and also fire on all parents. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This can be avoided by adding an event listener to the parent element and then check what the event.target matches to."]
},
{
    title: "IIFE – Immediately Invoked Function Expression",
    text: ["The code gets executed as soon as it is created. They don’t pollute the global object and you can isolate your functions easily by creating an IIFE."],
    include: [
        "(function hello() {",
        ":s1 console.log('hello');",
        "})(); // it will be invoked immediately after creation",
    ]
},
{
    title: "Difference between function definition and expression",
    text: ["Expressions resolve in a value even if it is undefined, and a function definition is only a statement. MDN: an expression is any valid unit of code resolves to a value. A definition actually creates a reference, but not a value."],
    include: [
            "function foo() { }  // definition that creates a reference but not a value",
            "var foo = () { } // expression that creates a value"]
},
{
    title: 'Hoisting',
    text: ['All vars are declared at top of a function’s scope whether you like it or not. This includes function declarations. Const and let can help you with hoisting because they are scoped within the blocked that they are created in.']
},
{
    title: 'Difference between == and ===',
    text: ["It is a well-known fact that using === is better than ==, however, if you know exactly what you are comparing, using == is completely okay. Let's see the difference."],
    include: ["== checks equality and doesn’t do type coercion", "=== checks for equality and type (does type coercion)"]
},
{
    title: 'Dot vs Bracket notation',
    text: ['There are two ways to access properties in a object. With dot and bracket notation. Dot notation is usually used when you are certain of they object key, and bracket notation can be used for a more dynamic access to the objects.'],
    include: ["let object = {person: 'Mike'};", 
    "let person = object.person; //dot notation", 
    "let person = object[person]; //bracket notation"]
},
{
    title: "Ternary operator",
    text: ["Ternary operators help us write smoother code while avoiding ifs and elses all the time. You can have a conditional that is only one line of code. Also, one ternary operation can be inside another ternary operation and so on."],
    include: [
        "let age = 15;",
        "if(age > 15) {",
        "console.log('age is bigger')",
        "} else {",
        "console.log('age is smaller')",
        "}",
        " ",
        "//with ternary operator",
        "console.log((age > 15) ? 'age is bigger' : 'age is smaller ) // '?' is your if, ':' is your else "
    ]
},
{
    title: "Destructuring",
    text: ["Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals."],
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
    text: ["The purpose of use strict is to activate the strict mode in JavaScript that wasn’t recognized before. It is a declaration to look for mistakes in your code, like undeclared variables."]
},
{
    title: "Asynchronus vs syncronous operations",
    text: ["When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes. Synchronous or Synchronized means 'connected', or 'dependent' in some way. In other words, two synchronous tasks must be aware of one another, and one task must execute in some way that is dependent on the other, such as wait to start until the other task has completed.",
        " Asynchronous means they are totally independent and neither one must consider the other in any way, either in the initiation or in execution. In asynchronous programming a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress."],
    more: true
},
{
    title: "Promises",
    text: ["With the help of promises, we can deal with asynchronous code in our application more easily. When you make a promise, that can be fulfilled in the future, you have to return something because it is a promise. That being said, a promise can return three outcomes:"],
    include: ["pending (working) - the result is undefined", "fulfilled - the result is a value.", "rejected - the result is an error objects"]
},
{
    title: "Callbacks",
    text: ["Callbacks are mainly needed for asynchronous operations.Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. Because they are passed as a parameter to another function and they are used when one function has to wait for another function to end and give back the result.",
        " Callbacks are used when you need to wait and return something, but without stopping the application from working."
    ],
    include: ["function sayHello(name) { alert('Hello ' + name); }", "function welcomeUser(callback) {", "var name = prompt('Please enter your name.');", "callback(name); }", "welcomeUser(sayHello);"]
},
{
    title: "Async - await",
    text: ["When you add the word 'async' before a function, it means that a function always returns a promise. Other values are wrapped in a resolved promise automatically. Async ensures that the function returns a promise, and wraps non-promises in it. On the other hand, the word 'await' makes JavaScript wait until that promise settles and returns its result."],
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
    text: ["With the help of the ‘try’ statement you can define a block of code to be tested for errors while it is being executed. If by any reason there is an error in the try block, the ‘catch’ statement is there to return the error, and stop the code execution. The ‘finally’ statement executes at the end and after the ‘try’ and ‘catch’ statements are executed. It is executed regardless the outcome from the ‘try-catch’ block."],
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
    text: ["They are functions that have no name, and can’t be accessed after their initial creation. Functions stored in variables do not require naming. They are always executed using the name of the variable. Example:"],
    include: [
        "const alertMe = function() {",
        "alert(‘You have been alerted’);",
        "}",
        "alertMe();"
    ]
},
{
    title: "Event Loop",
    text: ["The event loop helps us create asynchrounous code. As we know, javascript is a single threaded language and the event loop helps us with multi-threading or it is simply giving us the illusion of multi-thread. There is one thread, one call stack which means that JS can only do one thing at a time. The Call stack is a data structure which records where in the program we are. When we return from a function or when we get to the end of the function, the function gets popped of the stackits.",
        "The browser is really helpful when we are trying to deal with async code with the help of the Web APIs which are actually threads and the async code is moved there. Another helpful tool is the Task Queue which accepts the callbacks that are sent from the web APIs after the are completed. As for the event loop, its job is to look at the stack and task queue. If the stack is empty, the first item from the Task Queue is moved to the stack and completed. "],
    more: true
},
{
    title: "Javascript inheritance",
    text: [
        "Object-oriented programming gave us a powerful tool - inheritance, which is implemented through Javascript. Nowadays, the most famous are classes, brought to us since ES6.",
        "Classes help us avoid repetetive code, and let us use methods and constructors from another class. Every class can be extended to another one and that one, will inherit those methods and constructors. Let's see the example"
    ],
    include: [
        "class Student {",
        ":s constuctor(name,age) {",
        ":s2 this.name = name;",
        ":s2 this.age = age;",
        ":s1}",
        "register() { console.log(name + 'is registered!) }",
        "}",
        "class Teacher extends Student {",
        ":s1 grade(name) { console.log(name + 'is graded!) }",
        "}",
        "let mike = new Teacher('mike', 30)  //we create a new teacher with the teacher class",
        "mike.register(); //with class Teacher, mike has access to the constructor, register and grade method",
        "mike.grade('iva');"
    ]
},
{
    title: "Closures",
    text: ["As we know, global variables belong to the window object. They can be accessed in functions, but if a variable is created in a function, it can't be accessed outside the function. In order for a inner function to have access to a outer function we can use Closures.  The inner function has access to the scope and variables of the outer function"],
    include: [
        "let addRandom = ( function (num) {",
        "var count = 0;",
        "return function () {return count += num}",
        "})();",
        "addRandom(1); //addRandom is a self-incoking function that returns a function",
        "addRandom(2); //adds + num every time",
        "addRandom(3); //count is now the sum of 1 + 2 + 3",
    ]
},
{
    title: "",
    text: [""],
}]

export const article2 = [
    {
        title: "Event Loop",
        text: ["The event loop helps us create asynchrounous code. As we know, javascript is a single threaded language and the event loop helps us with multi-threading or it is simply giving us the illusion of multi-thread. There is one thread, one call stack which means that JS can only do one thing at a time. The Call stack is a data structure which records where in the program we are. When we return from a function or when we get to the end of the function, the function gets popped of the stackits.",
            "The browser is really helpful when we are trying to deal with async code with the help of the Web APIs which are actually threads and the async code is moved there. Another helpful tool is the Task Queue which accepts the callbacks that are sent from the web APIs after they are completed. As for the event loop, its job is to look at the stack and task queue. If the stack is empty, the first item from the Task Queue is moved to the stack and completed."]
    }
]

export const article1Data = {
    id: '1',
    dropdown: true,
    title: "Javascript interview preparation",
    intro: "Every interview will make you question your skills and knowledge as a developer. For all of you javascript developers out there, i prepared a cheatsheet containing everything you need to get reminded about Javascript in depth. I have collected the data by myself and I did a research about every interview I've been to. Hopefully, this will help you. (Mistakes can be reported too :) )",
    article: article1
}
export const article2Data = {
    id: '2',
    dropdown: false,
    title: "Event Loop",
    intro: "The event loop helps us create asynchrounous code. As we know, javascript is a single threaded language and the event loop helps us with multi-threading or it is simply giving us the illusion of multi-thread. There is one thread, one call stack which means that JS can only do one thing at a time. The Call stack is a data structure which records where in the program we are. When we return from a function or when we get to the end of the function, the function gets popped of the stackits. The browser is really helpful when we are trying to deal with async code with the help of the Web APIs which are actually threads and the async code is moved there. Another helpful tool is the Task Queue which accepts the callbacks that are sent from the web APIs after they are completed. As for the event loop, its job is to look at the stack and task queue. If the stack is empty, the first item from the Task Queue is moved to the stack and completed.",
    article: article2
}


export const allArticles = [article1Data, article2Data, article1Data, article2Data, article1Data, article2Data, article1Data, article2Data,article1Data, article2Data, article1Data, article2Data, article1Data, article2Data, article1Data, article2Data,]



















// export const article3 = []
// export const article4 = []
// export const article5 = []
// export const article6 = []


// export const article3Data = {
//     title: "Why do we use it?",
//     text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ",
//     article: article3
// }
// export const article4Data = {
//     title: "How come it is so famous",
//     text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
//     article: article4
// }
// export const article5Data = {
//     title: "Where does it come from?",
//     text: "Every interview will make you question your skills and knowledge as a developer. For all of you javascript developers out there, i prepared a cheatsheet containing everything you need to get reminded about Javascript in depth. I have collected the data by myself and I did a research about every interview I've been to. Hopefully, this will help you. (Mistakes can be reported too :) )",
//     article: article5
// }
// export const article6Data = {
//     title: "Where can I get some?",
//     text: "Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Maloru by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
//     article: article6
// }