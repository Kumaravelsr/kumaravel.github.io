let n = 10
function multiply(num2) {
    n = 1000;
    let result = n * num2;
    return result;
}
multiply(20);
document.querySelector('p.test').textContent = n;
//document.querySelector('p.test').textContent = multiply(30);
//document.querySelector('p.test').textContent = multiply(40);
/*document.querySelector('html').addEventListener('click', () => {
    alert('Hai')
})*/

const myImage = document.querySelector('img')
myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google.jpeg') {
        return myImage.setAttribute('src', 'images/google2.png')
    }
    else {
        myImage.setAttribute('src', 'images/google.jpeg')
    }
}

const myHeading = document.querySelector('h1');

function setUserName() {
    const uName = prompt('enter the user name: ');
    if (!uName) {
        setUserName();
    } else {
        localStorage.setItem('name', uName);
        myHeading.textContent = `mozilla is cool,${uName}`;
    }
}
if (!localStorage.getItem('name')) {

    setUserName()
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `mozila is cool,${storedName}`;
}
document.querySelector('button').onclick = () => {
    setUserName();
}