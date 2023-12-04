# BATCH 46 Localstorage

## Description

The lesson demonstrates the use of LocalStorage in a web application to store user data like usernames and a grocery list. It includes basic functionalities like storing and retrieving data from LocalStorage and handling form submissions.

## Subjects Covered

- Introduction to LocalStorage
- Utilizing form submissions to store data
- Displaying stored data
- Deleting specific data entries
- Clearing LocalStorage

## Documentation

### LocalStorage
- Used to store key-value pairs locally in a web browser.
- Allows storing data persistently even after the browser is closed.
- [localStorage Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### JSON Format
- JSON (JavaScript Object Notation) is a lightweight data-interchange format.
- Used for data storage and exchange between a server and web application.
- [JSON Documentation](https://www.json.org/json-en.html)

### `JSON.stringify()` and `JSON.parse()`
- `JSON.stringify()` converts a JavaScript object into a JSON string.
- `JSON.parse()` parses a JSON string and constructs the JavaScript object described by it.

## Resources
- [W3Schools - Window.localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [GeeksforGeeks - Max Size of LocalStorage Values](https://www.geeksforgeeks.org/what-is-the-max-size-of-localstorage-values/)
- [W3Schools - JSON Store](https://www.w3schools.com/js/tryit.asp?filename=tryjson_store)
- [AWS - What is JSON?](https://aws.amazon.com/documentdb/what-is-json/#:~:text=JavaScript%20Object%20Notation%2C%20more%20commonly,a%20wide%20variety%20of%20applications.)

## Additional Notes
- The `clear` button clears both the stored username and the grocery list.
- Unique IDs are generated for each grocery item using a combination of timestamp and randomness.

Feel free to explore the provided code files (`index.html` and `script.js`) for a detailed understanding.

For more details, refer to the code files and the links provided in the resources section.

