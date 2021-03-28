export const article2 = [
    {
        title: "Event Loop",
        text: ["The event loop helps us create asynchrounous code. As we know, javascript is a single threaded language and the event loop helps us with multi-threading or it is simply giving us the illusion of multi-thread. There is one thread, one call stack which means that JS can only do one thing at a time.", 
        "The Call stack is a data structure which records where in the program we are. When we return from a function or when we get to the end of the function, the function gets popped of the stackits.",
        "The browser is really helpful when we are trying to deal with async code with the help of the Web APIs which are actually threads and the async code is moved there.","Another helpful tool is the Task Queue which accepts the callbacks that are sent from the web APIs after they are completed.",
        "As for the event loop, its job is to look at the stack and task queue. If the stack is empty, the first item from the Task Queue is moved to the stack and completed."]
    }
]