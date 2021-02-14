let inputGreetingPerson = null;

/*
function changeMessage(name) {
    message = 'Hallo ' + name;
}
*/
function onload() { 
    inputGreetingPerson = document.getElementById('inputGreetingPerson');
}

function showMessage(textContent) {
    document.getElementById('greeting').textContent = textContent;
}

function printCustomizedGreeting() {
    showMessage("Hello " + inputGreetingPerson.value);
}