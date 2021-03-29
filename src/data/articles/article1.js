export const article1 = [{
    title: "Event Capturing",
    text: ["JS event listeners fire not only on a single DOM element but on all its descendants. So, every event listener put on a parent will be triggered for its children too. With event delegation, you don't have to add event listener to each descendant, you can simply add it to the parent, capture the event and check the event.target that comes with the event."]
},
{
    title: "Event Bubbling",
    text: [" Event bubbling is connected to the sequence in which events are called when one element is nested inside a second element, and both elements have the same event listener.",
        "It is also known as event propagation, and it means that events on an element can “bubble up” and also fire on all parents. When an event occurs on an inner element, it first runs the handlers on itself, then on its parent, then all the way up on other ancestors (maybe even all the way to the body). This can be avoided by adding an event listener to the parent element and then check what the event.target matches to."]
},
{
    title: "IIFE – Immediately Invoked Function Expression",
    text: ["The code gets executed as soon as it is created. They don’t pollute the global object and you can isolate your functions easily by creating an IIFE."],
    include: 'iife'
},
{
    title: "Difference between function definition and expression",
    text: ["Expressions resolve in a value even if it is undefined, and a function definition is only a statement. MDN: an expression is any valid unit of code resolves to a value. A definition actually creates a reference, but not a value."],
    include: 'function-expression'
},
{
    title: 'Hoisting',
    text: ['All vars are declared at top of a function’s scope whether you like it or not. This includes function declarations. Const and let can help you with hoisting because they are scoped within the blocked that they are created in.']
},
{
    title: 'Difference between == and ===',
    text: ["It is a well-known fact that using === is better than ==, however, if you know exactly what you are comparing, using == is completely okay. Let's see the difference."],
    include: 'type-coercion'
},
{
    title: 'Dot vs Bracket notation',
    text: ['There are two ways to access properties in a object. With dot and bracket notation. Dot notation is usually used when you are certain of they object key, and bracket notation can be used for a more dynamic access to the objects.'],
    include: 'dots-vs-brackets'
},
{
    title: "Ternary operator",
    text: ["Ternary operators help us write smoother code while avoiding ifs and elses all the time. You can have a conditional that is only one line of code. Also, one ternary operation can be inside another ternary operation and so on."],
    include: 'ternary'
},
{
    title: "Destructuring",
    text: ["Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals."],
    include: 'destructuring'
},
{
    title: "Use strict",
    text: ["The purpose of use strict is to activate the strict mode in JavaScript that wasn’t recognized before. It is a declaration to look for mistakes in your code, like undeclared variables."]
},
{
    title: "Asynchronus vs synchronous operations",
    text: ["When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes. Synchronous or Synchronized means 'connected', or 'dependent' in some way. In other words, two synchronous tasks must be aware of one another, and one task must execute in some way that is dependent on the other, such as wait to start until the other task has completed. A synchronous function is read line-by-line and can be dependable on the previous statement.",
        " Asynchronous means they are totally independent and neither one must consider the other in any way, either in the initiation or in execution. In asynchronous programming a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress. All in all, asynchronous functions execute their code without waiting for a value from a function to be return. For asynchronous programming in Javascript we usually use callbacks, but with ES6 promises/async-await/try-catch are really famous."],
    more: true
},
{
    title: "Promises",
    text: ["With the help of promises, we can deal with asynchronous code in our application more easily. When you make a promise, that can be fulfilled in the future, you have to return something because it is a promise. That being said, a promise can return three outcomes:"],
    include: 'promises'
},
{
    title: "Callbacks",
    text: ["Callbacks are mainly needed for asynchronous operations.Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. Because they are passed as a parameter to another function and they are used when one function has to wait for another function to end and give back the result.",
        " Callbacks are used when you need to wait and return something, but without stopping the application from working."
    ],
    include: 'callbacks'
},
{
    title: "Async - await",
    text: ["When you add the word 'async' before a function, it means that a function always returns a promise. Other values are wrapped in a resolved promise automatically. Async ensures that the function returns a promise, and wraps non-promises in it. On the other hand, the word 'await' makes JavaScript wait until that promise settles and returns its result."],
    include: 'async-await'
},
{
    title: "Try – Catch – Finally",
    text: ["With the help of the ‘try’ statement you can define a block of code to be tested for errors while it is being executed. If by any reason there is an error in the try block, the ‘catch’ statement is there to return the error, and stop the code execution. The ‘finally’ statement executes at the end and after the ‘try’ and ‘catch’ statements are executed. It is executed regardless the outcome from the ‘try-catch’ block."],
    include: 'try-catch-finally'
},
{
    title: "Anonymous functions",
    text: ["They are functions that have no name, and can’t be accessed after their initial creation. Functions stored in variables do not require naming. They are always executed using the name of the variable. Example:"],
    include: 'anonymous-functions'
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
    include: 'inheritance'
},
{
    title: "Closures",
    text: ["As we know, global variables belong to the window object. They can be accessed in functions, but if a variable is created in a function, it can't be accessed outside the function. In order for a inner function to have access to a outer function we can use Closures.  The inner function has access to the scope and variables of the outer function"],
    include: 'closures'
},
{
    title: "Javascript Scope",
    text: ["The scope defines the area of your application where a variable is defined. Javascript has three scopes: global, local and block."],
    include: 'js-scope'
},
{
    title: "The meaning of the this keyword",
    text: ["When you write 'this' in your application you are actually referring to the parent object where the code is located at. For example, in a script tag in HTML, it refers to the window object."]
},
{
    title: "Javascript methods",
    text: ["You need to keep up with the new things that Javascript offers. There are a lot of methods that will help you write less loops and you need to get familiar with those. There is a separate article for Javascript methods that you need to know."],
    more: true
},
]