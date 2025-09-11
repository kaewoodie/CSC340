/* Array to hold list items of favorite foods */
const favoriteFoods = [
    'Raspberries',
    'Salmon',
    'Apples',
    'Cookies',
    'Cheesesteaks',
];

/* Build the list of favorite foods */
const list = document.getElementById('favoriteFoods');
favoriteFoods.forEach(item => {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    list.appendChild(listItem);
});

/* Print a message to the console */
const message = "I am really enjoying JavaScript 1 so far, and am looking forward to the final project.";
console.log(message);