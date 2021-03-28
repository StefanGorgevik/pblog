
export const article3 = [
    {
        title: "How react works with the virtual DOM?",
        text: ["Because nowadays we are using the dynamic approach of creating website, it is really hard to communicate directly with the DOM and it takes a lot more time to accomplish something. In order for React to work properly when creating a website, there is a virtual DOM (not created by and for React), that compares if anything changed between the DOM and the React elements. If anything changes in your components, the difference between the DOM and your app will be applied by the Virtual DOM."]
    },
    {
        title: "What is JSX?",
        text: ["JSX stands for Javascript XML and it is a syntax improvement for JS. For React, it helps with creating React elements and any JS expression can be wrapped in curly braces in between your elements. With the help of JSX, you can render elements and components inside of loops, assign them to variables, and a lot more, which makes everything a lot more dynamic."]
    },
    {
        title: "What is ReactDOM",
        text: ["ReactDOM actually connects React with the DOM. Before, they were together, as a part of one library, but later on they were split. Nowadays, it is mostly used for mounting your main component onto the DOM."]
    },
    {
        title: "Controlled vs. Uncontrolled Components",
        text: ["Controlled Elements are elements that have their value controlled by React. This means that the parent element containing for example an input, will keep track of the onChange callback function and will rerender the component each time the callback is fired. All in all, with controlled components, every state mutation will result in an associated handler function.",
            "As for the uncontrolled components, the form data is handled by the actual DOM. This means that with uncontrolled elements, you can write a handler that gets the refs values directly from the DOM, and not for each state update."]
    },
    {
        title: "Higher-order component (HOC)",
        text: ["It is a function that receives a component and returns a new one. With HOC, you can reuse a lot of code and avoid repeating logic. For example, maybe you didn't know that, but Redux's connect function is actually a HOC."]
    },
    {
        title: "Redux Thunk",
        text: ["It is a helpful middleware that can help you write action creators that return a function instead of an action. Why is this useful? Well, you can use Thunk for asyncronous programming because a dispatch of an action can be delayed until a condition is met. The function that we create receives two methods as parameters from the store: dispatch and getState. Thunk is a middleware so you need to apply it with applyMiddleware() in your store file."]
    },
    {
        title: "setState() actions",
        text: ["setState actions are asynchronous because they are not directly mutating the state but they send a transition. Mainly, setState is asynchrounous because it rerenders parts of your application. Making it syncronous will freeze the browser. setState can also take a callback function that is invoked after setState finishes and the component finished its re-render. This makes setState() to be asynchronous."]
    }
]