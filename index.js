// ✨ You got this! 


var button = document.getElementById('toggle')
console.log('hello');

function myFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
    console.log('dark mode on');
 }

button.addEventListener('click', myFunction);