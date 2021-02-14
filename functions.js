const helloWorld = () => console.log("new Hello World")
const add = (a,b) => console.log(a+b)
const subtitle = "Zajecia backend"
const sample = () => 'proba funkci';

module.exports = {
    helloWorld,
    add,
    subtitle,
    sample
}

console.log("functions.js loaded correctly");