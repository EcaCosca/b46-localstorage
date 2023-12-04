// https://www.w3schools.com/jsref/prop_win_localstorage.asp

const from = document.querySelector("#name-form");
const groceryFrom = document.querySelector("#grocery-form");
const greeter = document.querySelector("h2");
const ol = document.querySelector("ol");
const clear = document.querySelector("#clear");

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
const addGroceryToList = (grocery) => {
    const li = document.createElement("li");
    li.innerHTML = grocery;
    ol.appendChild(li);
}


// https://www.w3schools.com/js/tryit.asp?filename=tryjson_store
// https://aws.amazon.com/documentdb/what-is-json/#:~:text=JavaScript%20Object%20Notation%2C%20more%20commonly,a%20wide%20variety%20of%20applications.
const handleGrocerySubmit = (e) => {
    e.preventDefault();
    let grocerysArr = []
    
    if(localStorage.getItem("grocerys")){
        grocerysArr = JSON.parse(localStorage.getItem("grocerys"))
    }

    const grocery = e.target[0].value

    grocerysArr.push(grocery)
    
    console.log(grocerysArr);
    console.log(typeof grocerysArr);

    localStorage.setItem("grocerys", JSON.stringify(grocerysArr));


    grocerysArr.forEach(element => addGroceryToList(element))


    // const result = JSON.parse(localStorage.getItem("grocerys"))

    // console.log(result);
    // console.log(typeof result);

    e.target[0].value = ""
}

groceryFrom.addEventListener("submit", handleGrocerySubmit);

clear.addEventListener("click", () => {
    // localStorage.clear();
    localStorage.removeItem("userName");
    localStorage.removeItem("grocerys");
    ol.innerHTML = "";
    greeter.innerText = `Welcome!`
})

