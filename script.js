// https://www.w3schools.com/jsref/prop_win_localstorage.asp

const from = document.querySelector("form");
const greeter = document.querySelector("h2");

const userName = localStorage.getItem("userName");

const greetings = (name) => {
    greeter.innerText = `Hello ${name}!`
}

if(userName){
    greetings(userName)
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    const userName = e.target[0].value

    localStorage.setItem("userName", userName);

    greetings(userName)
}

from.addEventListener("submit", handleSubmit);