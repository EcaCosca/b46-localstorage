// https://www.w3schools.com/jsref/prop_win_localstorage.asp

const from = document.querySelector("#name-form");
const groceryFrom = document.querySelector("#grocery-form");
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

// GROCERY EXAMPLE
// https://www.w3schools.com/js/tryit.asp?filename=tryjson_store
const handleGrocerySubmit = (e) => {
    e.preventDefault();
    
    const grocery = e.target[0].value

    let grocerysArr = ["apple", "orange", grocery]
    
    console.log(grocerysArr);
    console.log(typeof grocerysArr);

    localStorage.setItem("grocerys", JSON.stringify(grocerysArr));

    const result = JSON.parse(localStorage.getItem("grocerys"))

    console.log(result);
    console.log(typeof result);
}

groceryFrom.addEventListener("submit", handleGrocerySubmit);

