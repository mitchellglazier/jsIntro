

var pDemo = document.getElementById("demo")
var imageSrc = document.getElementById("img")
pDemo.innerHTML = "Hello World"

imageSrc.src = "https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
pDemo.style.color = "red"

var colors = ["red", "#FFC537", "green", "#2966FF"]
var btn = document.getElementById("btn")

btn.addEventListener("click", changeColor)
function changeColor() {
document.body.style.backgroundColor = colors[Math.floor(Math.random() = colors.length)]
}

//Scope

// var foo = 'bar'; //global variables
//
// function someFunction(params1, params2) {
//   //params1 and 2 are local variables
// }
//
// function myFunction() {
//    console.log(bar) // error
//    console.log(foo) // 'bar'
// }
//
//   function whatIsThis() {
//   baz = "what variable is this?"
// }
//
//  console.log(baz)
//
//  whatIsThis()
//
//  console.log(baz)

// objects are - arrays, hashes, function, classes... also the whol DOM
// window object wha tthe user sees
//
// datatypes
// strings, boolean, numbers, null, undefined, symbol
