# CSC 340

Notes for JavaScript 1

## Quick Links :link:

* [W3 Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)

## Video Resources :movie_camera:

Week 1

* :link: [Getting Started With JavaScript](https://www.youtube.com/watch?v=0pEeWU8ryXw)
* :link: [Web Development](https://www.youtube.com/watch?v=mGS321QNNuw)
* :link: [VS Code Extensions](https://www.youtube.com/watch?v=xgslBP0sC9M)

Week 2

* :link: [Variables](https://www.youtube.com/watch?v=0pEeWU8ryXw)
* :link: [Conditional Statements](https://www.youtube.com/watch?v=0Izk4SZ415s)

Week 3

* :link: [Query Selectors](https://www.youtube.com/watch?v=cTbgQ-1lhk4)
* :link: [Loops](https://www.youtube.com/watch?v=F7fO1LsAIEY)

Week 4

* :link: [Arrays and Objects](https://www.youtube.com/watch?v=Bjbgk22DJEk)
* :link: [Basic Events and Functions](https://www.youtube.com/watch?v=i3ZzH-aHfCg)

Week 5

* :link: [Object Oriented Programming (OOP)](https://www.youtube.com/watch?v=GInn4IAIt1g)
* :link: [Timers: setTimeout() and setInterval()](https://www.youtube.com/watch?v=rVyuh4M33u4)

Week 6

* :link: [JavaScript Object Notation (JSON)](https://www.youtube.com/watch?v=XWa3vrYMPzY)
* :link: [Using Fetch to Retrieve Data](https://www.youtube.com/watch?v=txaNNoSgVT0)

Week 7

* :link: [Query Selector All](https://www.youtube.com/watch?v=SVr6FNdewq8)
* :link: [Invasion Game](https://www.youtube.com/watch?v=4PCiVZ44C5s)

## :book: Week_01 Notes

### Linked github account

Linked github account and saved main branch to VSC workspace

### Week 1 Project: building on <code>gamelet.html</code>

9/7 - Created and completed the first week project
<details>

<summary>Using <code>handleKeyPress()</code>in <code>.js </code></summary>

```js
const ball = document.getElementById("ball"); // Get the ball
document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0; // set initial position

console.log(ball);

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball's position
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  console.log(ball);
  ball.style.left = position + "px";
}
```

</details>

<details>

<summary> Load <code>.js</code> file inside body tag:</summary>

```js
<body>
    <div id="ball"></div>
    <script src="js/main.js"></script>
  </body>
```

</details>

## :book: Week_02 Notes

### Week 2 Project: Creating Lists

<details>

<summary>Assignment Details</summary>

Create your JavaScript application using Visual Studio Code and the following directions below:

1. Create a new folder called Week2
2. Open the folder in Visual Studio Code
3. Create a home.html page
4. Create a css folder and a file in it with a name of styles.css
5. Create a js folder and a file called main.js within the folder
6. On the html page, in the head, add a reference to your css file and a script tag referencing your JavaScript file
7. Add an h1 to the body and center the tag in css
8. Change the background color of the page in css to black and the forecolor to white
9. In JavaScript, when the page loads then write to the page a list of your 5 favorite foods
10. Log to the Console a short message about how you feel about JavaScript so far
11. Zip up the project folder and submit it via the assignment link

</details>
