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
},
{
    title: "some()",
    text: ["Another method that loops through an array and test it against a condition passed in the callback function that the some() method receives as a parameter. If at least one element is found, it will return 'true', and if not, it will return false."],
    include: "some"
},
{
    title: "every()",
    text: ["This method is great if you need a pure array, meaning that every element in the array fulfills a condition that is given in the parameter function received in every(). If every item fulfills the condition, it will return true, and if not, it will return false."],
    include: "every"
},
{
    title: "flat()",
    text: ["This method will come in handy if you have an array with elements that are in another array(sub-array). flat() can go only one level into the array and destructure those elements. The example should clear things up."],
    include: "flat"
},
{
    title: "flatMap()",
    text: ["If you need to do something more than flat(), flatMap() does the same, but in the same time, it gives you map() which gives you a callback function that can be applied on every element in the array."],
    include: "flatMap"
},
{
    title: "sort()",
    text: ["Next on the list is sorting method that takes a function as a parameter that takes each item in an array and sorts it."],
    include: "sort"
},
{
    title: "concat()",
    text: ["Concat is a function that takes two arrays and joins them into a new one."],
    include: "concat"
},
{
    title: "includes()",
    text: ["Another simple way to check if an item exist in an array is to use includes(). If an array contains a given element, it returns true, if not, it returns false."],
    include: "includes"
},
{
    title: "reverse()",
    text: ["The reverse method takes an array an reverses the order of the elements backwards."],
    include: "reverse"
},


]

export default article4;