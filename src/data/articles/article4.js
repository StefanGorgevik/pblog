const article4 = [{
    title: "filter()",
    text: ["filter method accepts a callback function as a parameter that is executed for each item in an array. After it finishes, it returns an array with items that fulfilled the condition added in the callback function."],
    include: 'filter'
},
{
    title: "find()",
    text: ["find is perfect when you want to check or find an item in an array. It receives a function as an argument and will search for an element in an array until the given condition is met. If the element is found, it will return that element, and if not, it will return 'undefined'"],
    include: 'find'
},
{
    title: "findIndex()",
    text: ["If you need a quick function to find the index of an element without looping through it, you can use findIndex. It takes a function as a parameter and runs a test against a condition. If the item is found, it will return the index, and if not, it will return '-1'."],
    include: 'findIndex'
},
{
    title: "forEach()",
    text: ["This method is actually a loop that applies a function on each element in a given array."],
    include: 'forEach'
},
{
    title: "map()",
    text: ["Another loop function that takes a parameter which is a callback function, and creates a new array with the results of the callback function applied to each element in that array. With map, you can choose between creating a new array or changing the original one."],
    include: 'map'
},
{
    title: "reduce()",
    text: ["The reduce method takes a callback function as a parameter, that has two parameters of its own, the total and current value. You can use this to do a lot of operations inside the reduce function without writing long loops."],
    include: 'reduce'
}]

export default article4;