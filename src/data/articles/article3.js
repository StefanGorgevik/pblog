
export const article3 = [
    {
        title: "What is React?",
        text: ["React was created by Facebook in 2011 and it serves as a front-end library. It is used for building dynamic pages, single-page websites. It can be used for both mobile and web applications. Every component in React can be reused, and you can create complex and dynamic user interfaces.",
            "React supports server-side rendering (which is a technique that renders the client-side application on the server and then it sends it directly to the user.",
            "React uses the virtual DOM instead of the browser DOM"],
    },
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
        title: "Difference between a component and element",
        text: ["Elements are plain objects that are actually returned from the components. An element is what describes the DOM nodes that a component represents.",
            "On the other side, a component can be a function or a Class, which comes with several methods, like render(), componentDidMount(), etc. The class components return an element in their render() method, and functional components return the element as a normal function."]
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
    },
    {
        title: "React Class - Lifecycle methods",
        text: ["Every class component provides several methods including componentDidMount, componentDidUpdate, shouldComponentUpdate, render, etc. As for the functional components, you have hooks that you can use, like useEffect. Take a look at the article if you want to learn more."],
        more: true
    },
    {
        title: "Redux Saga",
        text: ["Redux Saga is a library that acts as a middleware for the Redux store and allows outside resources to be interacted with asynchronously. With this middleware, you can make HTTP request, access browser storages without waiting for the operation to finish. Sagas are actually asynchronous functions that wait for actions that trigger them."],
    },
    {
        title: "Arrow functions in React",
        text: ["With ES6, arrow functions made a simpler syntax for writing functions. Because auto binding in ES6 is disabled, arrow functions let you bind the contenxt of the components properly."],
        include: 'arrow-functions'
    },
    {
        title: "Ref",
        text: ["Ref stands for reference and it helps with storing a reference to an element, which will be returned by the render method of that element. They are good for managin focus on your page, or to start animations. Ref is a function that can access the DOM element and the React element created by you. Usually, refs are used when you want a child component's value to be changed without changing any props."],
    },
    {
        title: "Modularizing code in react",
        text: ["Code modularization can be done with creating separate components in separate files, and then export them and import them where needed."],
    },
    {
        title: "Pure components",
        text: ["Pure functions accept an input and return a value without making any modifications outside of the scope.That being said, pure components compares the props and state, and in sense, it handles the shouldComponentUpdate method for you. Pure components are used for performance optimization."],
    }
]