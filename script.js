// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// SELECTORS
const from = document.querySelector("#name-form");
const groceryFrom = document.querySelector("#grocery-form");
const greeter = document.querySelector("h2");
const ol = document.querySelector("ol");
const clear = document.querySelector("#clear");

// CHECKING LOCALSTORAGE FOR USERNAME WHEN IT LOADS
const userName = localStorage.getItem("userName");

// ADDING A CUSTOM MESSAGE WITH THE USER NAME
const greetings = (name) => {
    greeter.innerText = `Hello ${name}!`
}

// CHECKING IF THERE IS A USERNAME IN LOCALSTORAGE GREET HIM
if(userName){
    greetings(userName)
}

// HANDLING THE SUBMIT EVENT
const handleSubmit = (e) => {
    // PREVENTING THE DEFAULT BEHAVIOR OF THE FORM (reloading the page)
    e.preventDefault();
    
    // GETTING THE VALUE OF THE INPUT
    const userName = e.target[0].value

    // SAVING THE USERNAME IN LOCALSTORAGE
    localStorage.setItem("userName", userName);

    // GREETING THE USER by changing the text of the h2
    greetings(userName)
}

// ADDING EVENT LISTNER FOR THE FORM SUBMITION EVENT
from.addEventListener("submit", handleSubmit);



// GROCERY EXAMPLE

const handleDelete = (event) => {
    console.log(typeof Number(event.target.id));

    const grocerysArr = JSON.parse(localStorage.getItem("grocerys"))

    const newGrocerysArr = grocerysArr.filter((grocery) => {
        return grocery.id !== Number(event.target.id)
    })

    localStorage.setItem("grocerys", JSON.stringify(newGrocerysArr))

    event.target.remove();
}

// ADDS THE GROCERY TO THE ORDERED LIST
const addGroceryToList = (grocery) => {
    // {
    //     id:156498646413
    //     title:"pear"
    // }
    const li = document.createElement("li");

    li.innerHTML = `${grocery.title}`;
    li.addEventListener("click", handleDelete)
    li.id = grocery.id;

    ol.appendChild(li);
}

const checkGrocerys = JSON.parse(localStorage.getItem("grocerys"))

if(checkGrocerys){
    checkGrocerys.forEach(element => addGroceryToList(element))
}


// https://www.w3schools.com/js/tryit.asp?filename=tryjson_store
// https://aws.amazon.com/documentdb/what-is-json/#:~:text=JavaScript%20Object%20Notation%2C%20more%20commonly,a%20wide%20variety%20of%20applications.
const handleGrocerySubmit = (e) => {
    e.preventDefault();

    if(e.target[0].value == ""){
        alert("Please enter a grocery")
        return
    }

    let grocerysArr = [];
    
    // CHECKING IF THERE'S A GROCERY LIST IN LOCALSTORAGE
    if(localStorage.getItem("grocerys")){
        // IF THERE IS, GET IT AND PARSE IR SO WE CAN TURN IT FROM A TRING TO AN ARRAY OF STRINGS
        grocerysArr = JSON.parse(localStorage.getItem("grocerys"))
    }

    // CREATE A UNIQUE ID FOR THE GROCERY
    const d = new Date();
    let ms = d.getMilliseconds();
    id = Math.floor(Math.random() * 1000 * ms);

    // GETTING THE VALUE OF THE INPUT
    const grocery = {
        id: id,
        title: e.target[0].value
    }

    // ADDING THE NEW GROCERY TO THE ARRAY
    grocerysArr.push(grocery)

    // SAVING THE NEW ARRAY IN LOCALSTORAGE (we need to turn it into a string)
    localStorage.setItem("grocerys", JSON.stringify(grocerysArr));

    // ADDING THE NEW GROCERY TO THE ORDERED LIST
    addGroceryToList(grocery)

    e.target[0].value = ""
}

groceryFrom.addEventListener("submit", handleGrocerySubmit);

clear.addEventListener("click", () => {
    // localStorage.clear();
    localStorage.removeItem("userName");
    localStorage.removeItem("grocerys");
    greeter.innerText = `Welcome!`
    ol.innerHTML = "";
})


