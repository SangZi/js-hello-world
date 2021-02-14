let inputGreetingPerson = null;

function onload() { 
    inputGreetingPerson = document.getElementById('inputGreetingPerson');
}

function showMessage(textContent) {
    document.getElementById('greeting').textContent = textContent;
}

function printCustomizedGreeting() {
    showMessage("Hello " + inputGreetingPerson.value);
}