const article4 = [
    {
        title: "Phases",
        text: ["Before we take a dive into the lifecycle methods of React class components, you need to know the three phases that one component can be in. These series hold different methods inside them."],
        include: 'phases'
    },
    {
        title: "constuctor()",
        text: ["constructor is the first thing that is called when a component is mounted. In the constructor you can declare your state, you can bind your functions, etc. Keep in mind that you need to pass super(props) which will let the component inherit props from the parent component constuctor method."],
        include: 'constructor'
    },
    {
        title: 'getDerivedStateFromProps()',
        text: ["Before the element is rendered on the page, getDerivedStateFromProps is called which sets up the state object based on the initial props the component receives. It accepts the state as argument and returns it with changes."],
        include: 'getDerivedStateFromProps'
    },
    {
        title: 'render()',
        text: ["Render is a must when using class components and it is called after getDerivedStateFromProps() finishes. It is used for rendering your elements onto the DOM."],
        include: 'render'
    },
    {
        title: "componentDidMount()",
        text: [
            "componentDidMount is a method that comes with a class component and is called after render() finishes."
        ],
        include: 'componentDidMount'
    },
    {
        type: 'between',
        text:[ "We finished the mounting phase. Let's move on with the update phase. An update occurs everytime there is a change in the props or state of the component."]
    }, 
    {
        title: 'getDerivedStateFromProps()',
        text: ["getDerivedStateFromProps is also called when the component is updated and it is the first method that is executed. You can still use the method the same, for changing the state based on the initial props. "]
    }, 
    {
        title: 'shouldComponentUpdate()',
        text: ["shouldComponentUpdate needs to return true or false in order to tell React whether a component needs to be updated. You can do a lot of validations in this method before approving the update. Keep in mind that you cannot update the state in this method. You will receive next and prev params which you can compare and then decide whether to update or not. This method is mainly used for optimization."],
        include: 'shouldComponentUpdate',
    }, 
    {
        title: 'render',
        text: ["After shouldComponentUpdate finishes, render starts again. Any changes made in the state or props of your component will be re-rendered to the HTML."]
    }, 
    {
        title: 'getSnapshotBeforeUpdate',
        text: ["getSnapshotBeforeUpdate() is rarely used, but it is a method that lets you see the state and props before the update occurred. This means that you can check what the values are before the update."],
        include: 'getSnapshotBeforeUpdate',
    }, 
    {
        title: 'componentDidUpdate',
        text: ["The final method in the update phase is componentDidUpdate(). It runs after the component is updated and after the changes are re-rendered to the HTML."],
        include: 'componentDidUpdate',
    },
    {
        type: 'between',
        text:[ "The last phase we need to cover is the unmounting phase. This is the phase when the component leaves the page."]
    },
    {
        title: 'componentWillUnmount',
        text: ["componentWillUnmount() is the only method that runs when the component is unmounting from the HTML. "],
        include: 'componentWillUnmount',
    }
]

export default article4;