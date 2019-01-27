var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ethan-beach.jpg') {
        myImage.setAttribute('src', 'images/jejudo.jpg');
    } else {
        myImage.setAttribute('src', 'images/ethan-beach.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Good day, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Good day, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}
