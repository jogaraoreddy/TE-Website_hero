1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element
Answer: If we were to try to render it, it'll throw an error because we can only render one parent
element, which can have as many children. Solution is to wrap both h1 and p tags in a div.

4. What does it mean for something to be "declarative" instead of "imperative"?

Answer: declarative refers to when you just define what you need to do and the work is
done, regardless how. imperative is when you also tell how to do it as well.

5. What does it mean for something to be "composable"?

Answer: composable is when many smaller things make up a bigger goal.


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

Quiz!

1. What is a React component?
A react component is a piece of reusable code. like functions in 
programming. It returns React elements. JSX

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
myComponent starts with a lower case letter. components should always be in
Pascal case or Camel case with first letter capital basically.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

This code works fine. But Header is not correctly defined as a React
component. should be <Header /> in the render.

// Parent/Child Components


import React from "react"
import ReactDOM from "react-dom"

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() { // child
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Page() { //parent
    return (
        <div>
            <Header />  <== Here's the child component , like an object instance.
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))


StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application. It activates additional deprecation checks and warnings for its child components. One of the reasons for its popularity is the fact that it provides visual feedback (warning/error messages) whenever the React guidelines and recommended practices are not followed. Just like the React Fragment, the React StrictMode Component does not render any visible UI. 

The React StrictMode can be viewed as a helper component that allows developers to code efficiently and brings to their attention any suspicious code which might have been accidentally added to the application. The StrictMode can be applied to any section of the application, not necessarily to the entire application. It is especially helpful to use while developing new codes or debugging the application.


// Props in react

Props are like function arguments, these allow the function to be reused again and again without making a new one 

HERE the name, img, phone, etc. parameters we give in html we do the same here with the exception of it being
called any variable name we like. but if we make multiple copies of the same component, we cannot change the prop name or else it wont work cause it'll expect a different variable name

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />



// Receiving props in components

export default function Contact(props) { // props argument can be called whatever you wish , just props (properties) is the convention.
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

Props Quiz:

1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!




// JS in JSX (anything in {} is considered javascript)

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */
    return (
        <h1>Hello {firstName} {lastName}!</h1>
    )
}

2 >  return (
        <h1>It is currently about {new Date().getHours() % 12} o'clock!</h1> or we can create a date object variable first
    )

3 >

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    /**
     * Challenge: fix the h1 below to use the timeOfDay
     * string we determined in the code above
     */
    
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

// destructuring props (objects)

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person
console.log(name)

// Challenge: fix the bug, now that we've destructured the props object
export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

//  CONDITIONAL RENDERING

    using ternary?
    <h3 style={{display: setup ? "block" : "none"}}>{setup}</h3> 

    basically if setup value exists the display is block otherwise none

    ternary in place of if-else

    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = false
    
    let answer = isGoingOut ? "Yes" : "No"              ternary operator is ? so left of : is true and right is false.
    



    using logical and

    {setup && <h3>{setup}</h3>} if setup variable is none value is 0 and 0 and 1 always gives 0.

//  PASSING IN NON STRING PROPS

use {} braces

<Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}, {...}]}
            />

<Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />

{anything here is javascript, int, float, bool, array, ll, objects, etc. even a lambda function or an arrow function}

//  F-STRINGS IN JS

<img src={`../images/${props.img}`} <== example ${} with `` is the convention here


// array map practice

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
// console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`) its an arrow function cleaned up 

actual arrow one looks like

pokemon.map((mon) => {
    return `<p>${mon}</p>`
})

console.log(paragraphs)


//  RENDERING ARRAYS IN REACT 

export default function App() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    
    const colorElements = colors.map(color => <h3>{color}</h3>)
    
    return (
        <div>
            {colorElements}
        </div>
    )
}

//  MAPPING COMPONENTS USING MAP

import jokesData from "./jokesData"

/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App() {
    const jokeElements = jokesData.map(joke => {       HERE NOW jokeElements is an array of components.
        return <Joke 
        setup={joke.setup}
        punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}


//  MAPPING QUIZ
1. What does the `.map()` array method do?
map() creates a new array on an existing array by performing a function
on it


2. What do we usually use `.map()` for in React?
mapping data for props or components


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
map makes our lives easier cause if we get a new data then instead
of typing it out, map can simply update the prop or the component

like use array length in loops instead of a specified length


// passing object as props in case the props are too much

return <Card
            key={item.id} 
            //passing item as one whole object prop
            item={item}

            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
        />

and in card.jsx

let badgeText
    if (props.item.openSpots === 0) badgeText = "SOLD OUT"
    else if (props.item.location === "Online") badgeText = "ONLINE"
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../public/assets/${props.item.coverImg}`} alt="katie" className='card--image'/>
            <span className='card--rating'>
                <img src={starImg} alt="" className='card--star'/>
                    {props.item.stats.rating}
                <small className='card--place'>
                    ({props.item.stats.reviewCount}) • {props.item.location}
                </small>
                </span>
            <p className='card--content'>{props.item.title}</p>
            <h3 className='card--price'>From ${props.item.price} / <span className='card--qty'> person</span></h3>
        </div>
    )

we do props.item to access item object and props.item.anykeyhere to access the values inside item.
cleans up our code by a good degree.


import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const {url} = memesArray[randomNumber] // object destructing
        console.log(url)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

//  add new elements and preface of React States

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        document.getElementById()
        console.log(thingsArray)
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

//      PROPS VS. STATE

PROPS ARE IMMUTABLE PROPERTIES PASSED TO A COMPONENT LIKE FUNCTION AND ITS ARGUMENTS. A COMPONENT CANNOT/SHOULD NOT MODIFY ITS PROPS LIKE A FUNCTION SHOULDNT CHANGE ITS ARGUMENTS.

STATES ARE VALUES MANAGED BY THE COMPONENT, LIKE FUNCTION DECLARED VARIABLES, NOT ARGUMENTS. IT CAN CHANGE. USED IN TIMES WE NEED TO UPDATE OUR REACT APP TO DISPLAY A NEW VALUE OR SOMETHING.

//      PROPS VS STATE QUIZ

1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.


//          REACT USESTATE()

import React from "react"

export default function App() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    const result = React.useState("Yes")
    console.log(result)

    // OUTPUT : ["Yes", f()]  f is a function and result is an array
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}

//  ARRAY DESTRUCTURING
use 
const [array element variables ie. anything] = array

saves us from indexing result[0]

const [result, func] = React.useState("Yes")
    console.log(result)
    
result is now Yes and func is f()

//      CHANGING STATE

import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
        setIsImportant("No")
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

A Better Example

import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    return (
        <div className="counter">
            <button
            className="counter--minus"
            onClick={() => setCount(count - 1)} Notice instead of a const value we gave a variable value. like a function call.
            >–
            </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button
            className="counter--plus"
            onClick={() => setCount(count + 1)}
            >+
            </button>
        </div>
    )
}

//      CHANGING STATES WITH A CALLBACK FN.

import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add(){
        setCount(prevCount => prevCount + 1)     // prev is the prefix for the old state value so its prev + state_name in camel
                                                    like set + state_name in camel for setter function in the useState.
    }
    
    function subtract(){
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

//          USING STATE AS A PROP

            <Count number={count} />    // say counter--count is a component
        then we'd do props.whatever_we_call_count in the component and it'll work!


//      Quiz

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
a. the value of the new State.
b. A callback function - state changes to whatever the callback returns

2. When would you want to pass the first option (from answer
   above) to the state setter function?
when we just want a state change without care of old states.

3. When would you want to pass the second option (from answer
   above) to the state setter function?
when we want to use the old State to determine a new State.


//      RANDOM MEME

   function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const {url} = memesArray[randomNumber]
        setMemeImage(url)
        
    }


//          TERNARY SYNTAX => condition ? exprIfTrue : exprIfFalse

export default function App() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const isGoingOut = false
        // let answer = isGoingOut ? "Yes" : "No"

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

//              FLIPPING STATES

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function handleState(){
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div 
            className="state--value" 
            onClick={handleState}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )

    //      SPREAD OPERATOR IN JS

        SYNTAX: let var1 = [...value]

    In the above syntax, … is a spread operator which will target all values in a particular variable. When … occurs in the function call or alike, it’s called a spread operator. Spread operator can be used in many cases, like when we want to expand, copy, concat, with math object.

    examples : https://www.geeksforgeeks.org/javascript-spread-operator/

in react


function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
}



    // REST PARAMETER IN JS (...parameters):

    When … is at the end of the function parameter, it is the rest parameter. It stores n number of parameters as an array.

    example
     function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); //3
    console.log(fun(1,2,3)); //6
    console.log(fun(1,2,3,4,5)); //15



//              MODIFYING OBJECTS USING STATES

const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,                     // we use spread to return all objects and add in our update as a key change
                                                     JS will take the last same key as the latest value and update it
                isFavorite: !prevContact.isFavorite
            }
        })
    }



//              EVERY TIME A STATE CHANGES, BY ANY COMPONENT, PARENT OR CHILD IT'LL RE-RENDER THE COMPONENTS.

//      SETTING STATE FROM CHILD COMPONENTS

CHILD COMPONENT OF STAR

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}

IN THE PARENT

<Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    
NOTE : we cannot give Star OnClick since its a React Component and all props it gets are custom props not DOM props
like eventListeners of HTML. so we give it a prop and in our child jsx we can then use onClick to trigger the value of the prop

which is a function here.


// PASSING DATA AROUND IN REACT.

SAY A CHILD COMPONENT HAS A STATE, AND ITS SIBLING/ANOTHER CHILD ON THE SAME LEVEL AS IT NEEDS THE STATE AS WELL
WE CAN PASS THE STATE USING PROPS. SIMPLY WE CAN MOVE THE STATE TO THE PARENT AND PASS IT DOWN TO ITS CHILDREN AS A PROP 
LIKE WE HAVE SEEN IN THE ABOVE CODE.

A CHILD COMPONENT CANNOT PASS ITS STATE TO ITS SIBLING OR ANOTHER CHILD IN THE TREE. IT CAN ONLY HAPPEN IF THE STATE IS RESIDED WITH 
THE PARENT AND IT PASSES IT DOWN TO ITS CHILDREN AS PROPS.



// example => user state was with Header and Body needed it so we moved the state to the app.


import Header from "./Header"
import Body from "./Body"

export default function App() {
    
    const [user, setUser] = React.useState("Joe") <==  state is here with a parent
    
    return (
        <main>
            <Header state={user}/>  <== passed to the child as props
            <Body state={user} />
        </main>
    )
}

Usage Example

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.state}!</h1>
        </section>
    )
}

ITS A TEDIOUS PROCESS THAT CAN BE REMEDIED BY REDUX (A STATE MANAGER) OR CONTEXTS IN REACT.
IT'S GENERALLY A GOOD PRACTICE TO KEEP STATES AS LOCAL AS POSSIBLE, ONLY CLOSELY ACCESSED BY THOSE WHO'D NEED IT
NOT THE ENTIRE HIERARCHY/TREE. 



                 i have state
 SAY I HAVE      PARENT HERE
                /           \
            CHILD            CHILD
           /    \           /      \
        GRAND   GRAND     GRAND   GRAND
    i had        i need
    state        state

it's generally not advised to keep your state this high up



INSTEAD do this

                 PARENT HERE
                /           \
            i have
            state    
            CHILD            CHILD
           /    \           /      \
        GRAND   GRAND     GRAND   GRAND
       i gave     i need
       state to    state
       him up


//          BOXES CHALLENGE PART 1

const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div> <=== HERE WE USE THE BOX ID TO MAKE A DIV FOR EACH BOX
    ))
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            {squareElements}
        </main>
    )

//      DYNAMIC STYLES IN REACT (BASICALLY JSX STYLES BUT ADVANCED/CONDITIONAL)

// Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to #222222
    // If darkMode is false, set it to #cccccc
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc" // CHANGES COLOR WHEN DARK MODE IS ACTIVE.

        or

        //  backgroundColor: squares.length%2==0 ? "#ffffff" : "#303030"  // this checks if number of squares present on page are even or not
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))

    //      BOXES CHALLENGE PART 2

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

     export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
    return (
        <div style={styles} className="box"></div>
    )
}

IN APP
<Box key={square.id} on={square.on} />    <== component created with props


//          BOXES CHALLENGE PART 3 - LOCAL (actually called DERIVED) STATES (MONKEY WAY OF DOING PART 3)

            Edit : We don't use Derived States anymore cause it can lead to bugs or data discrepancy (difference.)

 /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    
    const [localOn, setLocalOn] = React.useState(props.on)
    // console.log(localOn) // working
    
    function handleClick(){
        setLocalOn(prevLocalOn => !prevLocalOn)
    }
    
    const styles = {
        backgroundColor: localOn ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} onClick={handleClick} className="box"></div>
    )


    // WHY DID WE DO THAT? SINCE WE ARE PASSING STATE AS A PROP AND ITS IMPOSSIBLE TO MODIFY A PROP
    WE HAVE TO SET A LOCAL STATE TO OUR CHILDREN BASED ON THE PROP THAT ALLOWS IT TO MODIFY THE STATE LOCALLY
    JUST FOR ITSELF AND NO ONE ELSE.



//          BOXES CHALLENGE PART 3 - UNIFIED STATES (CORRECT WAY OF DOING PART 3)

/**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
    function toggle() {
        console.log("Clicked!")
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={toggle}
        />
    ))

    in box

     return (
        <div 
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
        </div>
    )

//  PART 3 - CHANGING STATES THROUGH BOX ID

1) ADD A ID PROP TO BOX (yeah I know id is passed to the key prop, but key is not an accessible prop its a default prop
that should be there to act as a unique identifier for mapped components)
======>  id: {square.id}

2) GET THE ID AS AN ARGUMENT FOR TOGGLE
======>  function toggle(id){
            console.log(id)
}

3) HOW TO PASS ID AS AN ARGUMENT TO EVENT LISTENER??? IT WONT TAKE ARGUMENTS SINCE ITS A PROP VALUE
SOLUTION =====> onClick={props.toggle()} <== its wrong
         =====> onClick={() => props.toggle(props.id)}  <=== right.




//          BOXES CHALLENGE PART 4 (COMPLETING PART 3)

         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 

    Solution, loop through the array to find a matching id , if we find a matching id then we just reverse its on value
    and push the object in a new array that will not directly modify the old state array.



    setSquares(prevSquares => { 
        step 1 : make a new array  const newSquares = []
        step 2 : loop
                for (let i = 0; i < prevSquares.length; i++) {
        step 3: find and store the current square object in our array

                currSquare = prevSquares[i]
        
        step 4: check for id  if ( currSquare.id === id (in toggle) ) 
        step 5: change the object using spread
                updateSquare = {
                    ...currSquare,
                    on: !currSquare.on
                }
        
        step 6: push update inside our new Array
                newSquares.push(updateSquare)

        else? push the currSquare instead ^^
                }

        step 7: return the newSquares Array from setSquares
                return newSquares
    })

//      therefore react will re render all the boxes each time you click!




//          BOXES CHALLENGE PART 5 (IMPROVING PART 4 SOLUTION TO BE SHORTER)

        THE LOOP IS GOOD AND IT WORKS BUT AS REACT IS DECLARATIVE AND NOT IMPARATIVE, WE CAN DO IT 
        BETTER, WAY BETTER THAN ABOVE.

        USING MAP!!!!!!

        setSquares(prevState (I can name this whatever the f I want!) => {
            return prevState.map(square => {
                return square.id === id ? {...square, on: !square.on} : square

                like above ^ it doesnt modify the state directly.
            })
        })

        WHAT DID WE EVEN DO?
        we mapped through our old array and used ternary to check if the id matches, if it does then we return the updated object like
        in the loop or just the original object if it doesnt match.


        therefore, when we click the box it triggers the onClick which has a arrow function or normal function doesnt matter which runs
        the toggle function with the prop id argument so we can get which box we clicked. 

        then its just the matter of matching the id and flipping the on property of the box object in the state using the set fn.


another clever trick => const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}  <== do the thing we have to do in the box component here itself


            so we wont need an id prop again and in box we can just onClick={props.toggle}
        />
    ))

//         CONDITIONAL RENDERING (IN DETAIL)

example :   

/**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown, setIsShown] = React.useState(false)
    
    const styles = {
        display: isShown ? "block" : "none"    <--- using ternary to change the style.
    }
    
    function toggleLine(){
        setIsShown(prevState => !prevState)
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p style={styles}>{props.punchline}</p>
            <button onClick={toggleLine}>Show Punchline</button>
            <hr />
        </div>
    )

    Using && is a faster way but unstyled.    {isShown && <p>{props.punchline}</p>}  does the same thing as the style ternary.

    HOT TIP!  if you have a condition1 && anything not a condition  the computer internally will only check the condition1 and && symbol why?
    cause its common knowledge that for 'AND' logic to output true both conditions need to be true


    the thing after && sometimes is not a condition thats why its true by default. so our   {isShown && <p>{props.punchline}</p>} line works cause the paragraph will render always and computer does not need to check it so it skips anything after the and

    and checks if the first statement is true or false.


example 2:

const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
                messages.length > 0 &&     //       if array is empty it'll not render the h1 (shorthand = message.length
                                                                                                            because 0 is already false.
                                                                                                            BIG BRAIN!)
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )

    //      CONDTIONAL RENDERING (TERNARY)

            <button onClick={toggleLine}>{isShown ? "Hide" : "Show"} Punchline</button> 
            if isShown is true btn is Hide P...
            if its false then btn is Show P...

    better example :

        /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread {
                    messages.length === 1 ? "message" : "messages"}
                </h1>
            }
        </div>
    )


//              Conditional Rendering Quiz

1. What is "conditional rendering"?

Sometimes we need to render components or things on page based on a 
certain condition. Like number of messages or Jokes.


2. When would you use &&?

&& Logical AND is for when the condition is simply whether to render it
or not.


3. When would you use a ternary?

ternary is a good shorthand if else when you need to decide between 2 options
on what to display.


4. What if you need to decide between > 2 options on
   what to display?

a traditional if-elseif ladder or switch statements work well.
eg, let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        
    } else {
        
    }
    return (
        <div>{someVar}</div>
    )




//                  FORMS IN REACT!

HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.


//      watch for input changes

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        setFirstName(event.target.value) <== event is given by browser when eventListeners fire
                                                .target is the element that triggered the event in this case the input tag
                                                .value is the value currently in the target i.e. text in the input.

                                                we stored that in our state. and changed it. without care of prevState.
        /**
         * Challenge: update the firstName state on every keystroke
         */
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}

//          WHAT IF WE ADD MORE FIELDS
            
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />




        WE SEE THAT USING OBJECTS AND SPREADING WE CAN TRACK MORE THAN ONE FIELD
        BUT WE'D HAVE TO ADD A `name` prop to our input like in HTML to distinguish different fields in react.

 const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    //          CONTROLLING INPUTS/COMPONENTS IN REACT


    An input like <input /> is uncontrolled. Even if you pass an initial value like <input defaultValue="Initial text" />, your JSX only specifies the initial value. It does not control what the value should be right now.

    To render a controlled input, pass the value prop to it (or checked for checkboxes and radios). React will force the input to always have the value you passed. Usually, you would do this by declaring a state variable:


    <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}  <----- THIS `value` prop is what forces JSX to match the component state. Basically now input
                                                    does not dictate what value should be in this input box, React is now in control
            />


    THIS KIND OF CONTROLLING IS A CALLBACK TO OUR UNIFIED STATES IN BOX CHALLENGE PART 3-5 (THE CORRECT WAY YK?)
    input has its own state and so does React, what we were doing is essentially DERIVED STATE
    which works fine but as you know is problematic. and React tends to complain about UNCONTROLLED COMPONENTS

    so rather than having 2 states mirror each other, we can have 1 state for every thing in the component (..almost)
    and can control/force the state so that there are no local data discrepancies or bugs relating to local states.

    A controlled input makes sense if you needed state anyway—for example, to re-render your UI on every edit:

        function Form()
        const [firstName, setFirstName] = useState('');
        return (
            <>
            <label>
                First name:
                <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            {firstName !== '' && <p>Your name is {firstName}.</p>}
            )

    
    It’s also useful if you want to offer multiple ways to adjust the input state (for example, by clicking a button):

        function Form()
        // ...
        const [age, setAge] = useState('');
        const ageAsNumber = Number(age);
        return (
            <>
            <label>
                Age:
                <input
                value={age}
                onChange={e => setAge(e.target.value)}
                type="number"
                />
                <button onClick={() => setAge(ageAsNumber + 10)}> <--- here the button is also modifying the value other
                                                                        than the listener
                Add 10 years
                </button>
        )


//          TEXT AREA IN REACT

            FEATURES : VERY MUCH LIKE A MIX OF HTML TEXTAREA AND REACT INPUT
            HOW?
             <textarea 
                name="comments"
                onChange={handleChange}
                value={formData.comments}
            />

            self closing takes the same props and behaves like it should, like a textarea in html but written in React style ^^


//          LABELS AND CHECKBOXES

    labels in react take the prop htmlFor instead of just for (htmlFor is the actual DOM)

    checkboxes are just a type of input taking a boolean value true or false.

    <input 
                type="checkbox"      <---- its a checkbox not text
                id="isFriendly"                 <---- that's for the label, so it knows htmlFor this element
                checked={formData.isFriendly}       <---- value equivalent in radio and checkboxes
                onChange={handleChange}             <---- handler
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            

    MINOR HANDLER CHANGE

     const {name, value, type, checked} = event.target   <--- destructured our event object for better measure
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value  <----- since checkbox checks for checked not value while both mean the same thing this ternary helps decide based on type.
            }
        })



//              RADIO BUTTONS IN REACT

elaborate JSX 

  <fieldset>     <-- think of think like a array of fields
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"                  <--- these take value
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

    but RADIO is very much a checkbox and input combined so controlling them requires some effort.


    BUT how to control?

     value="part-time"
     checked={formData.employment === "part-time"} <--- we give it a checked prop but here checked isnt a boolean but it should be equal to the value of the radio button


//          SELECT BOXES IN REACT

        IN HTML WE HAVE A SELECTED PROP TO SELECT AN OPTION
        IN REACT IT'S SAME LIKE OTHER ELEMENT PROPS

        make a field for it in the object
        give it a name
        hook it up to the same handler and
        it will work

    oh the label, sorry 
    here it is

    <label htmlFor="favColor">What is your favorite color?</label>
            <br />

            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>


//      SUBMITTING FORMS IN REACT

SINCE WE ARE CONTROLLING OUR INPUTS AND USING AN OBJECT STATE WE CAN DIRECTLY PASS THE OBJECT TO OUR API OR SIMILAR

WE DO NOT USE METHOD POST OR GET OR STUFF LIKE THAT IN REACT ...PHEW..

INSTEAD <form onSubmit={handleSubmit}> WE TRIGGER AN onSubmit EventListener
and the function might look like this...

  function handleSubmit(event) {
        event.preventDefault()  <--- this prevents the webpage to reload itself as we submit cause it puts our form data in the url
                                    if we do not prevent it. so that as we submit our object can return to its initial State 
                                    before data was added.
        // submitToApi(formData)
    }


HOT TIP! : SINCE HTML5, A <button> is by default a type submit button unless specified by us using type prop

//          FORMS QUIZ

1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.


//          A PRACTICE SIGN-UP FORM

    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords do not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
     
export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}


//          MAKING API CALLS 
STEP : 1 GET THE DATA (through fetch or similar service)
STEP : 2 SAVE THE DATA TO THE COMPONENT STATE

One approach to using the Fetch API is by passing fetch() the URL of the API as a parameter:

fetch(url)
The fetch() method returns a Promise. After the fetch() method, include the Promise method then():

fetch(url)
  .then(function() {
    // handle the response
  })
If the Promise returned is resolve, the function within the then() method is executed. That function contains the code for handling the data received from the API.


fetch is a promise (basically means it will do its thing for sure)
then is to process the promise if fulfilled.

const [data, setData] = React.useState({})
    

    
    fetch("https://swapi.dev/api/people/1")  <---- any API link here
        .then(res => res.json())    <---- data is parsed as json here 
        .then(newData => setData(data)) <--- it sets the state with the retrieved data


    BUT HERE'S THE PROBLEM. THE API FETCH KEEPS ON UPDATING THE STATE AND RE RENDERING OUR COMPONENT OVER AND OVER AS IT SITS RIGHT ON TOP OF THE COMPONENT BODY GENERALLY.  ITS A SIDE EFFECT THAT WE NEED TO DEAL WITH


            WHAT IS API?
            its someone who listens to your request, takes it and gives you data in return
            like a waiter.
            or you can think of it as a middleman in a business consumer chain
            or a translator between 2 people of different languages.

//          SIDE EFFECTS IN REACT AND HOW TO HANDLE IT

    SIDE EFFECTS IN REACT CONTEXT IS REALLY ANYTHING FROM OUTSIDE THAT REACT DOES NOT HAVE A CONTROL OVER. AND CANNOT DEAL ON ITS OWN
    LIKE APIs, THEY LIVE OUTSIDE OUR REACT PROJECT/SCOPE AND HENCE REACT CANNOT CONTROL THEIR BEHAVIOUR

    THAT LED TO THE PROBLEM OF RENDER LOOP WE JUST HAD ABOVE.

    THINGS IT CAN'T CONTROL, WE CAN JUST WRITE CODE TO INTERACT AND USE THEM BUT REACT IS NOT IN CONTROL:
    1) API/DATABASE INTERACTIONS
    2) localStorage in browser to store data locally
    3) Web Sockets like Chat apps that update live.
    4) Syncing 2 different internal States in React.


    HOW TO DEAL WITH EFFECTS ? useEffect Hook in React.

    https://overreacted.io/a-complete-guide-to-useeffect/ <--- best doc to read about it

    useEffect like useState is a hook that lets us deal with the side effects that come with outside interactions.

    how to use it
     
     like state it has 2 parameters
    a function to execute the outside interaction code. it runs at every render and update.

    and something that executes only after our UI is rendered on page to deal with the side effect.

    eg.

    useEffect(() => { <--- it could be a normal function inside as well
        fetch(api url)
        .then(res => res.json())  parse it
        .then(data => setState(data)) update the state
    }, // here goes the 2nd parameter.)


eg.

 const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")}
        , [])  <--- 2nd parameter is an array called DEPENDENCIES ARRAY.




    React.useEffect(function() {
        console.log("Effect ran")
    }, [count])   <---- here it means the effect depends on the state value and whenever it will change it will cause the useEffect to 
    re run itself as the app re renders to update the state.

    if I put a hardcoded number instead of count (or hardcoded value) the effect will run once as the app starts but will not run again
    as if it would compared the value it had and the value after re render they are the same


    THATS WHY ITS CALLED A DEPENDENCY ARRAY, useEffect depends on this parameter array to determine whether to re run the effect function or not.

    if i put in the count state, the effect will run each time the app re renders cause of the state change as it depends on the count.

    arrow function version of this code :
    React.useEffect(() => console.log("Effect ran"),
    [count])



//          SIDE EFFECTS QUIZ

1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function




/**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     instead of logging some console value it will log the data from the API
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     it will hardly change although we need to have a dependencies array to avoid it being re run infinitely like a loop.
     */


    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    Here since the state changes, the app re renders and the count doesn't change so the useEffect wont run again.
    but if we change the count the effect will run again and make an api call again.

     * 3. What SHOULD be in our dependencies array in this case?
     dependencies array should be empty. 

     why? it doesnt depend on count and leaving dependencies empty means when useEffect will compare the array for changes it'll not find
     a change and hence wont call the api again.
     assuming we only want the call to happen once , on component first render.


     when to use dependencies?

      /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    we used an f string or template string in js its called
    to make the number linked to count variable. 

    and since the api request depends on the value of count , 
    we should use count as a dependency.


//  MEMORY LEAK IN REACT

/**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )

IN WINDOW TRACKER

const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)  <--- local state to store the width changes.
    
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])   <--- makes it so it will only run once once component is mounted
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )


WE use State and effect hooks to effectively listen and update the width change in real time

Now the bug occurs 

when we click toggle in App() it stops rendering the Window Tracker component, basically unmounts the component

but the browser is still trying to listen for a resize event in the effect hook. so if we try to change window size while we have
toggled off the tracker component

REACT THROWS A WARNING THAT BROWSER IS TRYING TO LISTEN FOR AN EVENT AND UPDATING THE STATE OF AN UNMOUNTED COMPONENT
WHICH CAN LEAD TO A MEMORY LEAK.


// CLEANING UP USE EFFECT TO AVOID SUCH WARNING

useEffect not only runs a function in the first parameter but can return from it as well, called a `cleanup` function.
it cleans up after the side effects we created using the useEffect hook so that memory leaks or similar warnings from unmounted
components can be addressed.

 React.useEffect(() => {
        function watchWidth() {         <--- made a new function to avoid writing the same arrow function and cluttering code.
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)  <--- here the cleanup was simply to remove the listener when unmounted.
        }
    }, [])

NOW EVEN IF THE COMPONENT UNMOUNTS AND WE TRY TO RESIZE THE WINDOW THE MEMORY LEAK WARNING IS GONE SINCE THE LISTENER IS REMOVED.

TOGGLING OFF A COMPONENT MAKES REACT REALISE THE COMPONENT IS GOING TO BE REMOVED FROM THE DOM.
AND HENCE IT RUNS THE RETURN FUNCTION IN THE USE-EFFECT (IT DOESNT KNOW WHAT THE FUNCTION IS, WE AS DEVS ONLY DO.)


PROBLEM WITH ASYNC/AWAIT IN REACT USE EFFECT.

ASYNC BASICALLY ALWAYS RETURNS A PROMISE, OF SUCCESSFUL COMPLETION OF THE FETCH OR SIMILAR.
AND REACT EXPECTS US TO RETURN A FUNCTION FROM USE EFFECT THAT IT CAN USE TO `cleanup` ANY SIDE EFFECTS OR BUGS CAUSED.

AND SINCE WHAT ASYNC GIVES IS A PROMISE IT'S NOT DESIRABLE TO HAVE HERE UNLESS WORKED AROUND.


WHAT'S THE WORKAROUND?
1) define a separate function in useEffect before fetch.
2) make it async and await the fetch.
3) call the function itself in the end.

code? 
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
            
        }
        getMemes()
        
        return () => {   <--- then we are still allowed to clean up
            
        }
    }, [])

but these are a lot of functions to remember and use, in this context.

basically, useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function

syncing data with localStorage

syntax:
localStorage.getItem("key")  <-- getting data
localStorage.setItem("key", value) <===  setting data


value SHOULD BE A STRING ONLY SO FOR ARRAY OR OBJECT VALUE TYPES USE JSON.STRINGIFY TO SET ITEM
AND JSON.PARSE TO GET ITEM



eg.
 const [notes, setNotes] = React.useState(
        JSON.parse(localStorage.getItem("notes")) || []   <---- WHY OR CONDITION?   maybe it cant find the key, returns null then and json parses null as undefined... and state can not be undefined.
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])


//          LAZY STATE INITIALISATION
sometimes we are running code in our state like the localStorage , console logs and so on instead of a object or a value.
so whenever the state changes, the app re renders which isnt desired always as the code running in the state might be a heavy operation that takes time
so re initialising this way isnt what we want


in this case React offers a `lazy state initialisation` so such code based states get initialised only once per app launch and dont re run on changes.

basically we wrap the expensive call or code in an function definition with a return (implicit or explicit) so that it runs only once.

eg.

const [state, setState] = React.useState(console.log("state initialised"))
this will run every time there's a change on the app
now its a miniscule code but what if its a heavy call like localStorage

we wrap it around a function (even arrow functions)
const [state, setState] = React.useState(() => console.log("state initialised"))   <--- now it will only run once.

for our localStorage code

   const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )

// NOTES APP

/**
     * Challenge: When the user edits a note, reposition
     * it in the list of notes to the top of the list
     */

function updateNote(text) {
        // Try to rearrange the most recently-modified
        // not to be at the top
        setNotes(oldNotes => {
            // Create a new empty array  ->   const newArr = []
            // Loop over the original array -> for(let i = 0; i < oldNotes.length; i++) oldNote = oldNotes[i]
                // if the id matches   ->         if(oldNote.id == currentNoteId)
                    // put the updated note at the -> newArr.unshift({...oldNote, body:text})  (UNSHIFT ADDS IN THE BEGINNING)
                    // beginning of the new array
                // else
                    // push the old note to the end -> newArr.push(oldNote)        (PUSH ADDS IN END)
                    // of the new array
            // return the new array             -> return newArr
        })
        
        // This does not rearrange the notes
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))
    }
    

//          UPDATE DEBOUNCING 

sending requests with a specified delay so that its managable at slow network or servers.

if another request happens in the delay, React cancels previous request and sets up a new delay.

 useEffect(() => {
        const timeOutId = setTimeout(() => {
            if(tempNoteText !== currentNote.body){

                updateNote(tempNoteText)
            }
        }, 500)

        return () => clearTimeout(timeOutId)
    }, [tempNoteText])


//              STYLED COMPONENTS IN REACT (PACKAGE)

Basically styling components in the same file so we dont need html components

but can make our own styled, makes classes redudant.


import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  color: #b19cd9;
`

const Section = styled.div`    <---- `` these are important, 
  background-color: #ffffff;    <------ styled makes it so we use normal CSS style writing and not camelCase.
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section>
            <WeekdayTitle>M</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>W</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>T</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>F</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
          <Section>
            <WeekdayTitle>S</WeekdayTitle>
          </Section>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))


//      STYLING THROUGH PROPS

THERES A BUTTON IN ANOTHER FILE (AS COMPONENT)

const Button = ({text}) => { <---- BTW THIS WORKS SAME AS A FUNCTION IN REACT WE CAN EXPORT ANYTHING 
    return (
        <StyledButton>{text}</StyledButton>
    )
}

export default Button

THEN IN MAIN FILE

 <Button text="me first"/>   <--- WE CAN USE PROPS HERE LIKE WE USUALLY DO.
 <Button text="me second"/>

 PASSING PROPS WITHOUT VALUE

      <Button primary text="me first"/>   HERE PRIMARY IS A PROP

STYLING WITH PROPS USING CONDITIONS

const StyledButton = styled.button`
    background-color: ${({primary}) => primary? 'red' : 'blue'};  <-- HERE WE USED A TERNARY
    ....

OKAY BUT HOW ?

WE FIRST USED THE ${} AND SINCE `` ARE THE TEMPLATE STRING FORMAT WE CAN DO IT WITH STYLED.

SO WE JUST PASSED A FUNCTION WITH `primary` WHICH SAYS IF IT DOES EXIST ON THE COMPONENT
CHANGE THE STYLE.

ITS LIKE SAYING IF PRIMARY IS TRUE OR FALSE BUT WE DIDNT SPECIFY THE VALUE SO ITS EXISTS OR NOT EXISTS IN THIS CONTEXT.


//              EXTENDING STYLES IN STYLED COMPONENTS (SIMILAR TO USING .btn .progress , SO THE COMPONENT HAS ALL STYLES OF .btn 
and .progress changes it up a bit)

SYNTAX : const Name = styled(component you wanna extend from)`
    some-style-here: value;
`

eg.

const Title = styled.h1`
    color: #aaecf0;
`

const SubTitle = styled(Title)`
    font-size: 12px;
`


//          POLYMORPHIC PROPS IN STYLED COMPONENTS

using `as` prop  <ParagraphTitle as={ReversedTitle}>I am a paragraph title</ParagraphTitle>

first > reversing title in a component using JS methods
    const ReversedTitle = props => <ParagraphTitle {...props} children={props.children.split('').reverse()}/>
                                ^        ^               ^        ^                  ^               ^           
                              arrow      component name    spread   its              using split to      JS reverse method
                             function                                   children           make a arr
                                                                                    (children works on the text
                                                                                    hint : log the component object in console
                                                                                    and confirm)


props.children accesses items inside the two component tags.
eg.
const ReversedButton = props => <StyledButton {...props} children={props.children.split('').reverse()}/>



const Button = ({text, primary}) => {
    return (
        <StyledButton as={ReversedButton} primary={primary}>{text}</StyledButton>
    )                                                         ^
}                                                       props.children


//          PASSING STYLES AS PROPS

 <Icon primary border='solid 3px'/>

        RECEIVING?     border: ${({border}) => border || 0} IS ONE WAY OF USING IT IN STYLED COMPONENTS
           border: ${({border}) => border || 'solid 3px blue'} <-- with a default blue case

        ALSO 
        const Icon = ({primary, border}) => {
    return (
        <StyledIcon border={border} primary={primary}/>
    )}


//              IF/ELSE IN STYLING

EG.
  background-color: ${({status}) => {
        if (status === 'in-progress') return 'yellow';
        else if (status === 'done') return 'green';
        else return 'red';
    }};


// NESTING STYLES IN STYLED COMPONENTS

const StyledButton = styled.button`
    background-color: ${({primary}) => primary? 'red' : 'blue'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    flex-direction: column;
    
    &:hover {
        background-color: grey;
    }
    
    .subtext {   <--- WORKS FOR ANY `.subtext` under this component StyledButton
        font-size: 10px;
    }
`

const Button = ({text, primary}) => {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className="subtext">sub text</p>
        </StyledButton>
    )
}

//           CSS ANIMATIONS IN STYLED COMPONENTS

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const Title = styled.h1`
    color: #aaecf0;
    animation: 5s ${fadeIn} ease-in;

// TRANSFORM ANIMATIONS
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
 { `infinite` makes animations loop forever ^^ }


 //CHILDREN IN HTML?
<div><span></span></div>
  ^         ^     
parent    child

REACT?
<div>{props.value}</div>
parent - child

STRICT PARENT - CHILD RELATIONSHIPS - SELECT AND OPTION, UL OR OL AND LI  they need to be used together. or it wont make sense

// USING <> </> STYLE TAGS IN REACT , TO ELIMINATE SIMPLE PROP NEEDS

IN A FUNCTION BUTTON...

const Button = props => {
    return (
        <button>{props.children}</button>
                    ^
                implicit prop that means anything between an open and close tag will be rendered.
    )
}

function App() {
  return (
    <main>
      <Button>Buy Now!</Button> <--- this will now work like an HTML tag.  PS: if you dont use props.children or {children} it wont work
    </main>
  )
}

we can now put anything inside our button

like 

<Button>
<ul>
<li>List Item here</li>
</ul>


</Button>

even other components like icon from icon packs.
    //                  THIS MAKES DESIGNING EASIER SINCE ITS LIKE HTML SO POSITIONING AND STYLING IS EASIER


//          PROPS SPREADING

SOMETIMES WHEN WE MAKE A CUSTOM COMPONENT, A USER MIGHT EXPECT TO ADD SOME PROPS TO HIS LIKING (OR A DEV WHOS NOT SEEN OUR COMPONENT CODE)

SO RATHER THAN ANTICIPATE WHAT PROPS ONE MIGHT USE, USE SPREAD TO COPY DOWN ANY CHANGES COMING FROM MAIN FILE TO COMPONENT FILE.

{...props} <--- 
const ReversedButton = props => <StyledButton {...props} children={props.children.split('').reverse()}/>

just like here , {...props} accesses all props, then we used children to edit out one property while keeping all others same throughout


THIS MAKES <Button onClick=""> AND MANY OTHER HTML PROPS POSSIBLE FOR OUR CUSTOM COMPONENT WITHOUT ADDING EVERY SINGLE PROP IN OUR COMPONENT

**JUST WARNING**  USE THE SAME TERMS USED IN HTML, YOU CANNOT CALL ONCLICK, HANDLECLICK OR SOMETHING

OR ELSE THIS PROP SPREADING IS USELESS.

*KEY POINT* THIS ONLY WORKS WITH HTML PROPS, NOT REACT SPECIFIC PROPS. LIKE VARIANT PROP.





//      DESTRUCTURED PROPS ADVANCED AND USING REST SYNTAX

SAY A DEV DESTRUCTURES PROPS WHILE YOU'RE USING SPREADED PROPS.

THEN `{...props}` wont work since you only pull in the required props.

export default function Button({children, variant}) {
    return (
        <button {...props}>    <--- this wont work since we pulled out children and variant props only
            {children}
        </button>
    )
}


FIX? THE REST SYNTAX : ITS LIKE SPREAD BUT DOES THE OPPOSITE WORK.

export default function Button({children, variant, ...rest}) {  <--- WE PRIMARILY USE REST IN FUNCTION ARGS WHEN WE DONT KNOW HOW MANY ARGS TO EXPECT. BTW YOU CAN NAME THIS rest to ANYTHING YOU DESIRE.
    return (
        <button {...props}>
            {children}
        </button>
    )
}



SO SPREAD VS REST?
SPREAD - USED TO COPY DOWN PROPS AS EXACTLY. PASSED BY USER.

REST - USED IN FUNCTION ARGUMENTS WHEN THE NUMBER OF ARGUMENTS IS N.

eg. 
The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

For instance, consider this code that uses rest to enclose some values into an array:

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]


In JavaScript functions, rest gets used as a prefix of the function’s last parameter.

Here’s an example:

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}
The rest operator (...) instructs the computer to add whatever otherInfo (arguments) supplied by the user into an array. Then, assign that array to the otherInfo parameter.



//**FREECODECAMP EXPLAINATIONS**
Arguments vs Rest Parameters: What’s the Difference?
Here are some of the differences between JavaScript arguments and the rest parameter:

Difference 1: The arguments object is an array-like object — not a real array!
Keep in mind that the JavaScript arguments object is not a real array. Instead, it is an array-like object that does not have the comprehensive features of a regular JavaScript array.

The rest parameter, however, is a real array object. As such, you can use all array methods on it.

So for instance, you can call the sort(), map(), forEach(), or pop() method on a rest parameter. But you cannot do the same on the arguments object.

Difference 2: You cannot use the arguments object in an arrow function
The arguments object is not available within an arrow function, so you can’t use it there. But you can use the rest parameter within all functions — including the arrow function.

Difference 3: Let rest be your preference
It is best to use rest parameters instead of the arguments object — especially while writing ES6 compatible code.

Now that we know how rest works, let's discuss the spread operator so we can see the differences.

What Is the Spread Operator and How Does spread work in JavaScript?
The spread operator (...) helps you expand iterables into individual elements.

The spread syntax works within array literals, function calls, and initialized property objects to spread the values of iterable objects into separate items. So effectively, it does the opposite thing from the rest operator.

Note: A spread operator is effective only when used within array literals, function calls, or initialized properties objects.

So, what exactly does this mean? Let’s see with some examples.

Spread Example 1: How Spread Works in an Array Literal
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// The invocation above will return:
[ "Oluwatobi", "Sofela", "is", "my", "name." ]



**Coming back to our code**

export default function Button({children, variant, ...rest}) { 
    return (
        <!-- <button {...props}> --> props not defined so instead
        <button {...rest}> <---using rest props as a spread.
            {children}
        </button>
    )
}


eg. using rest props

export default function Button({children, ...rest}) {
    /**
     * Challenge: accept the `size` prop and set the `className` of the
     * <button> to:
     * 
     * "button-small" if `size` is "sm"
     * "button-large" if `size` is "lg"
     * 
     * Note: don't try to manually add a `className` to the Button
     * instance in index.js yet. (DO add `className` to this file
     * as part of the challenge, though.)
     */
    
    let clsName
    if(rest.size === "sm"){
        clsName = "button-small"
    }
    else if (rest.size === "lg"){
        clsName = "button-large"
    }
    else{
        clsName = ""
    }
    
    return (
        <button className={clsName} {...rest}>
            {children}
        </button>
    )
}


WHAT IF I ADD A CLASS TO COMPONENT? AND SET ITS CSS
> THE REST WILL SPREAD THE PROPS SO THERE WILL BE 2 `className` props and REACT WILL PRIORITIZE THE ONE THAT COMES LATEST 
eg <button {...rest} className={clsName}> it'll take the clsName
and <button className={clsName} {...rest}> it'll take the one in the rest prop. since its the latest


A simple dirty fix ? 

use template strings and pass className prop value as a concat string with the className of button

/**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */
    
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    return (
        <button className={`${sizeClass} ${className}`} {...rest}>
            {children}
        </button>)

Elegant solution? 

**USE A LIBRARY LIKE CLSX OR CLASSNAMES**

import classnames from "classnames"
  const allClasses = classnames(sizeClass, className) <--- WILL PERFECTLY CONCAT 2 OR MORE CLASSNAMES SO THE CSS WILL WORK


CLEANER CODE
let sizeClass = size ? `button-${size}` : "" then css will be changed, small to sm and large to lg

**Capitalize String in JS**     const btnText = variant.charAt(0).toUpperCase() + variant.slice(1)

button //

  let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )


//          CHALLENGE

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({src, children, ...rest}) {
    
    const variant = src ? 'avatar' : children ? 'avatar avatar-letters' : 'avatar avatar-icon'
    const colorArray = ['red', 'navy', 'pink', 'blue', 'green']
    const randomizer = Math.floor(Math.random() * colorArray.length)
    const colorClass = colorArray[randomizer]
    
    
    return (
        <div className={`${variant} ${colorClass}`} {...rest}>
        {src && <img src={src}/>}
        {children ? children : 
        <IoPersonSharp />}
        </div>
    )
}


`EXAMPLE`

  <Avatar src="./images/hardik.jpg" alt="Hardik Sharma" />
      <br />
      <Avatar>HS</Avatar>
      <br />
      <Avatar />

// **FISHER-YATES SHUFFLE ALGORITHM**

its an inplace shuffle or sort

function algo(arr) {
    const arrDupe = arr.slice(0)
    let currentIndex = arrDupe.length, let randomIndex;

    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        //swap

        [arrDupe[currentIndex], arrDupe[randomIndex]] = [arrDupe[randomIndex], arrDupe[currentIndex]]
    }

    return arrDupe
}

// *DANGER OF NAIVETY*

https://blog.codinghorror.com/the-danger-of-naivete/

TLDR: 

THIS ALGO IS SIMPLE AND PRODUCES RESULTS BUT IT WOULD GET WORSE WHEN DATA INCREASES

SAY THE ARRAY HAS 3 ELEMENTS SO 3! = 6 COMBINATIONS POSSIBLE
THIS ALGO COMES UP WITH N TO THE POWER N COMBINATIONS. DUE TO REPETIONS IN THE LOOP. 
INCLUDING ALL ELEMENTS IN THE LOOP MAY SEEM GOOD BUT THEY ARE HAZARDOUS IN THE LONG RUN.

OVERSIMPLIFIED ALGO ISNT WRONG THIS IS JUST INEFFICIENT AND SLOW LATER ON.


// **DURSTENFELD SHUFFLE (OPTIMISED FY SHUFFLE)**

its also inplace so make a dupe of the array

function algo(arr) {
    for (let i = arr.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1))
        var temp = arr[i]

        //swap
        arr[i] = arr[j]
        arr[j] = temp

    }
}

using map and sort is also fast. and preferrable in elements are about 0-100.
Past that use this optimised KNY shuffle


//      COMPOUND COMPONENTS - transparent, more diversely usable and way to prevent `Prop Drilling : passing down props over and over from a grandparent to a grandchild through parents/children that dont even use them`

eg.

function App() {
  return (
    <Menu>
      <MenuButton buttonText="Sports"/>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]}/>
    </Menu>
  )
}

# Compound Components Quiz

1. How would you explain the concept of compound components in React to someone who
   only knows the very basics of React?

Components that work together to accomplish a greater objective than might make
sense to try and accomplish with a single component alone.


2. What are some examples of HTML elements that work together to add functionality
   or styling to each other?

<ul> & <li>, <select> & <option>, <table> & all the other table elements


3. How can compound components help you avoid having to drill props multiple levels
   down?
   
Compound component "flatten" the heirarchy that I would otherwise need to pass
props through. Since I need to provide the children to render, the parent-most
component has direct access to those "grandchild" components, to which it can
pass whatever props it needs to pass directly.



//      SPLICE IN JS

The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.


//      IMPLICIT STATES TO PASS STATES TO COMPOUND COMPONENTS

USING `REACT.CHILDREN` OR `CONTEXT` API

using map to augment new props to children components
`it returns a new children array/component and doesnt modify the original`

{`React.Children.map(#whatToModify, callback fn.)`}
{`React.cloneElement(whatToClone, whatToAdd/Change)`}

eg.

{React.Children.map(children, (child) => { <--- pass in what to map and the mapping function
                return React.cloneElement(child, {   <--- passed in what to clone and what to change in it, we gave it an object of props.

                    open, 
                    toggle
                })
            })}

## ES6 shorthand for objects with same key and value name

is just writing the name, anothername
here we gave ```toggle``` and ```open``` props to each children. using map


// SHORTCOMING OF REACT.CHILDREN (ELUDE TO CONTEXT API)

ITS FRAGILE OR DELICATE : REACT.CHILDREN WORKS AS DIRECT CHILDREN FOR A COMPONENT OR WRAP

LIKE   <Menu>
      <MenuButton buttonText="Sports"/>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]}/>
    </Menu>

so React.Children only applies to the direct children of Menu component
as seen here

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    return (
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}

so if I did

<Menu>
<div>               <---- a div wrapper for maybe more styling
<MenuBtn>Sports</MenuBtn>
<MenuDropdown>{mapped component MenuItems}</MenuDropdown>
</div>
</Menu>

the React.Children will give an error since it is trying to create a React component clone (as in the Menu code) of a JSX/HTML tag which
isnt possible and the children arent now direct to menu they are its grandChilds which React.Children API fails to work with.


2) REACT.CHILDREN IS LIMITED IN ITS DEPTH.

/** Discovery Challenge:
     * In the MenuButton, MenuDropdown, and MenuItem components, 
     * accept `toggle` and `open` props and just console log 
     * both of them in all 3 components.
     */

WHAT WE FOUND : MenuButton and MenuDropdown can access and log the `toggle` and `open` props. but MenuItem returns `undefined` for both
open and toggle. As we know React.Children only accessed the direct children of the Menu which were button and dropdown 
only those 2 components had the access to the props we passed to React.Children.map

In case we wanted the menuItem to also have access to either or both these props , its not possible to do with React.Children.

# UNLESS WE GO IN DROPDOWN COMPONENT AND DO A REACT.CHILDREN.MAP AGAIN , which doesn't fix the prop drilling issue we are having


## REACT CONTEXT API - THE MORE WIDELY USED WAY TO HANDLE IMPLICIT STATES/ FIX THE PROP DRILLING ISSUE.

`We create a Provider Parent above the subtree that needs the state to be around at random children without drilling them each level`
this Provider Component has all the props and or states that are needed by the different app components which arent as accessible to just
pass props normally. maybe they are very distant siblings or grandchild or grand parent whatever.

# Hook : useContext() [Use Values contained in the Provider component can be a fn. or a state or props or any data whatsoever.]

SO ANY CHILD OF THE PROVIDER PARENT CAN USE `useContext()` HOOK TO ACCESS THE VALUES OR DATA ITS HOLDING.

USING `createContext()`


We can make a context anywhere , inside main.jsx or App.jsx or even a separate file.

IF I CREATE CONTEXT IN THE SAME FILE
# DO NOT PUT CONTEXT INSIDE THE COMPONENT FUNCTION AS WE WANT IT TO BE AT THE TOP OF THE APP TREE.

so ,
imports here

context here

export default function App{

//App comp code

}


eg code.

import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()  <--- context here

export default function App() {
    
    return (
        <div className="container dark-theme">
            <Header />
            <Button />
        </div>
    )
}

Step 2 : wrap the return (//every jsx here)  in a Context wrapper, since its also a component

const ThemeContext = React.createContext()

export default function App() {
    
    return (
        <ThemeContext.Provider value="light">   <--- .Provider is the syntax that this component is a context provider
                                                        Here `light` is the value we want to provide to every thing in this return
                                                        Remember value can be any and everything. its just a prop so it need not be called value even.
        <div className="container dark-theme">
            <Header />
            <Button />
        </div>
        </ThemeContext.Provider>
    )
}

export {ThemeContext}   <--- exporting it to be used anywhere in our app using imports.


# Using Context inside the render itself

import `ThemeContext`

ReactDOM.createRoot(document.getElementById('root')).render(<ThemeContext.Provider value="light"><App /></ThemeContext.Provider>);

thats also ok.

# using Context using `useContext()` hook

import {ThemeContext} from './App'

export const Header = (props) => {
    const value = React.useContext(ThemeContext)  <===== storing the data ThemeContext.Provider had in a const value

}

//  PASSING PROPS AS OBJECTS USING CONTEXT
`simply value={{theme : theme, toggleTheme : toggleTheme}}  the inner one specifies an object`

# or shortHand it value={{theme, toggleTheme}}

THEN FOR USECONTEXT THE COMPONENTS CAN USE VALUE.PROP_NAME EG. VALUE.THEME OR DESTRUCTURE VALUE TO DIRECTLY SAY THEME OR TOGGLETHEME.


//          COMPOUND COMPONENTS WITH THE DOT SYNTAX
`sometimes to avoid importing components connected with a parent component and just using one single import we can use dot syntax`


HOW?

STEP 1 MAKE A NEW FILE AND IMPORT ALL THE PIECES YOU NEED FOR A COMPOUND COMPONENT, LIKE A MENU
FILE SHOULD BE IN THE SAME DIRECTORY AS THE COMPOUND COMP FILES
IF MENU AND ITS SUB COMPS IN A MENU FOLDER THE NEW FILE WILL BE IN THE MENU FOLDER

STEP 2 : IMPORT ALL THE PIECES

import Menu from "./Menu"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

STEP 3 : USE MENU. LIKE IT WERE AN OBJECT TO ASSIGN A KEY VALUE LIKE THING
Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

STEP 4 : EXPORT THE CHANGES IN THE FILE
export default Menu


NOW IN A PROJECT YOU CAN JUST IMPORT THE MENU from the new FILE (`ITS IMPORTANT TO DO IT FROM THE NEW FILE SINCE IT HAS THE DOT CHANGES`)

LIKE IF IT WAS import Menu from "./Menu/Menu"

it changes to  `import Menu from "./Menu/index"`

AND FOR THE COMPONENT TAGS :
<MenuButton> changes to <Menu.Button>
<MenuDropdown> changes to <Menu.Dropdown>

and so on.


# HEADLESS COMPONENTS : COMPONENTS WITH NO UI ONLY FUNCTIONS. LIKE FETCH REQUEST DATA IN A JS FILE AND COMMON FUNCTIONS USED THROUGHOUT APP

`ALWAYS TRY TO FOLLOW AHA PROGRAMMING LOGIC : AVOID HASTY ABSTRACTIONS , AND MAKE CODE STRAIGHTFORWARD`

say I have a toggle button with its state

using it like an other component 
wrapping `Star` with `Toggle`
<Toggle>
<Star />
</Toggle>

but its a headless component how will it render the star?

since Star is a child to Toggle we just need to tell Toggle to return not JSX but its children (they are jsx so they will render.)

export default function Toggle({children}) {
    const [on, setOn] = React.useState(false)
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return children
}


<Toggle Planning - Button, On and Display components>

the problem with headless components
even if we surrounded the child with a component that should control its state , the fact that the child also has its own state makes it so that if we 
clicked our parent component, the child inside it will also trigger its state,

Log the changes we can see that


export default function Star() {
    const [starred, setStarred] = React.useState(false)
    
    function toggle() {
        setStarred(prev => !prev)
    }
    
    return (
        starred ? 
        <BsStarFill className="star filled" onClick={toggle} /> :
        <BsStar className="star " onClick={toggle} />
    )
}

# Star has its own state

  <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
      </Toggle>

EVEN WRAPPED INSIDE A CONTEXTED COMPONENT, IT STILL TRIGGERS ITS OWN STATE EVENTS UNLESS WE CHANGE OR REMOVE IT

Final Code after removing `Star`

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
        <Toggle.On><BsStarFill className="star filled"/></Toggle.On>   on and off conditionally render their children (return on ? children : null)
        <Toggle.Off><BsStar className="star "/></Toggle.Off> (return on ? null : children)
        </Toggle.Button>
      </Toggle>
    </>
  )
}

# BUT OUR APP CODE IS VERY LONG AND COMPLICATED, WHAT TO DO??

`COMPOSING COMPONENTS TO BE MORE CLEAN`

Move the component code to another component
it'll make a lot more files but cleaner understandable code.

 <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>


for this long code. what we can do is render Toggle inside Menu then we can remove the wrapper.

export default function Menu({ children }) {
    return (
        <Toggle>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}

# LIKEWISE WE CAN MOVE AROUND COMPONENTS SO THAT A MENU WOULD NOT NEED TO TOUCH TOGGLE COMPONENTS NECESSARILY


# CUSTOM EVENT LISTENERS - REFS

we passed down prop functions from star to our toggle , using effects and now the star has a function for users to access while <Star /> is still abstract.


# REFS - Solution to our state effect loading as soon as App loads, this problem is prevalent in my QuizApp so it helps!

`TLDR : REFS ARE LIKE STATES BUT CHANGES DONT CAUSE A RE-RENDER. IN CASES OF API CALLS AND BACKEND STUFF THIS IS HELLA USEFUL!!!`

BASICALLY MANUALLY MANIPULATING THE <DOM> OF OUR APP (DOCUMENT OBJECT MODEL) THE DOM IS JUST A TREE OF OUR APP.

SYNTAX : const `any_name` = React.useRef(any_value_like_state) <--- Refs dont need a setter function

console.log(refName) logs {current : value_in_useRef} like for a counter {current : 0} and so on. so Refs are `objects`.


<now in useEffect any refs wont run on first load of our app without interaction. but a ref cannot be updated in a scenario where useEffect and 
a function are changing it. it will register its changes but only on a re-render will reflect the change in UI

like I made a function to increment a counter while a useEffect also is doing the same thing.

so triggering my function does change the value but I can only see it in the UI when the app re-renders. say I triggered it 4 times then 
re-rendered the app so useEffect incremented it too, and the final count is 5.


like a state, it can store anything, even JSX elements by passing a `ref` prop.

 <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
          ref={inputRef} <--- now inputRef.current holds the JSX element input.
        />


# USING REF TO FOCUS BACK : we can just do inputRef.current.focus()  [focus is a JS method which works like CSS:focus selector and since inputRef is nothing but the JSX element we can directly use the function JS provides, here.]


`More EXAMPLES : https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref`

REFS SHOULD NOT BE REPLACED WITH STATES COMPLETELY, STATES HANDLE WHAT SHOULD BE DISPLAYED ON THE SCREEN, FOR INTERNAL LOGIC THAT NEEDS NOT BE RENDERED.

LIKE MY API PREFERENCES, AND QUIZ DATA CAN BE HANDLED WITH REFS SO THEY DONT CREATE THE DOUBLING BUG.


# USING REFS, FORWARDREF AND USEIMPARATIVE HANDLE HOOK TO CALL CHILD FUNCTIONS

1. MAKE A REF IN PARENT
2. WRAP CHILD FUNCTION IN CHILD COMPONENT IN FORWARDREF
3. USEIMPARATIVEHANDLE HOOK TO PASS DATA FROM CHILD TO PARENT.





 /**
     * Challenge: We only want to run onToggle() AFTER the
     * first time rendering the component. We can use refs to
     * track whether or not it's the first time this component
     * is rendering
     * 
     * 1. Create a ref called `firstRender` which defaults to `true`
     *    (Since when we first create the ref, it's true that it
     *    is the first time the component is rendering)
     * 2. In the useEffect, check if your ref's value is `true`.
     *    If it is, set it to `false`. If it isn't... can you figure
     *    it out??
     * Hint: don't forget that your boolean value will be saved
     * under `firstRender.current`, not just `firstRender`!
     */


# BUG SOLUTION USING REFS.

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    React.useEffect(() => {
        if(onRef.current){
            onRef.current = false
        }else{
            onToggle()
        }
    }, [on])


# FIX UNDEFINED FN. USING A NOOP (NO OPERATION) FUNCTION.

SYNTAX : `in props` we can do {children, prop_1, funct = () => {}}   `SO IF USER DOESNT PASS A FUNCTION THAT ITS EXPECTING, IT'LL DEFAULT TO AN EMPTY FN.`


# RENDER PROPS

BASICALLY SOMETHING LIKE AN `addEventListener` provides US WITH 2 PROPS OR PARAMS, A STRING OF WHAT EVENT TO LISTEN FOR WHICH IS NOT SOMETHING WE CAN MAKE UP
BUT WE CAN CHOOSE FROM THE LIST OF EVENT TYPES THAT LISTENER PROVIDES FOR USE IN ITS DOCS.

AND A CALLBACK FN. WHICH RUNS WHEN THIS EVENT OCCURS. NOW WE CAN SPECIFY WHAT KIND OF FUNCTION WE WANT, MAYBE A LOG OR A CALCULATION OR A 
LOGIC , ETC. BUT WE DONT GET TO CHOOSE WHAT ARGUMENT THAT FUNCTION TAKES, IT TAKES THE `event` OBJECT AS AN ARGUMENT. IF WE LOG IT WE CAN SEE LOADS OF 
INFO ABOUT THE EVENT THAT OCCURED. MAYBE ON HOVER, ON FOCUS OR ON CLICK.

<WHAT TO DO WITH THIS INFORMATION?>

EXAMPLE. I HAD A COMPONENT WITH A BUTTON AND H1 OR SOMETHING AND IT SITS WITHIN A PARENT, MAYBE I WANT TO ACCESS ITS STATES FROM THE PARENT, BUT

I DONT WANT TO MOVE MY STATE UP OR USE CONTEXTS OR CHILDREN OR ANYTHING COMPLICATED.

BUT I'M THE CREATOR OF MY APP , BASICALLY I KNOW WHATS HAPPENING UNDER THE HOOD AND CAN ANTICIPATE STUFF. LIKE THE `addEventListener` devs did.

so since I can pass anything as props and functions rank high in hierarchy. I can PASS FUNCTIONS AS A PROP

<MyComponent myFun={function(bool){
    console.log(bool)
}}>  // or arrow anything works.

I PASSED A BOOL IN MY FUNCTION

NOW IN ANOTHER COMPONENT

const myComponent = ({myFun}) => {
    const [anyState, setAnyState] = useState(false)
    myFun(anyState)    <====== NOW FUNCTION RUNS ON EACH RENDER, AS THINGS ARE SUPPOSED TO BE 
}

SUDDENLY IN THIS WAY, I HAVE ACCESS TO MY STATE FROM MY CHILD TO MY PARENT AND I CAN MANIPULATE IT USING THE FUNCTION I MADE AS A PROP
OTHERWISE WE HAVE TO EITHER USE CONTEXTS OR MOVE THE STATE TO THE PARENT.

`HERE WHENEVER STATE CHANGES, I LOG IT.`

# Example.

 /**
     * Challenge:
     * Pass a function down via props to Decision that receives
     * the boolean in state and logs it
     */
    return (
        <div>
            <Decision sayName={(goingOut) => {
                console.log(goingOut ? "I AM going out" : "I'm staying in")
            }} />
        </div>
    )

// REMEMBER THE PROP DOESNT KNOW WHERE ITS GETTING ITS DATA FROM, (THAT ALLOWS US TO USE CHILD STATES IN PARENT) IT JUST KNOWS TO RUN THE FUNCTION IN ITS PROP
ITS ABSTRACT. 

# A REACT FUNCTION VS A NORMAL FUNCTION : REACT ONE NEEDS TO RETURN JSX , OR ITS A HEADLESS COMPONENT.
WE CAN MAKE OUR RENDER PROP RETURN JSX AS WELL, WELL NO ONE STOPS US FROM DOING JUST THAT

THAT'S HOW WE CONVERGE INTO RENDER PROPS `THE render FUNCTION/PROP`

SO WE CAN DELEGATE / ENTRUST PARENT COMPONENT TO DECIDE WHAT SHOULD THE CHILD `render`

we can then 

 <Decision sayName={(goingOut) => {
                return (
                    <h1>Am I going out? {goingOut ? "Yes" : "No"}</h1>
                )
            }} />

RETURN JSX FROM OUR RENDER PROP

THEN SINCE ITS RETURNING SOMETHING WE CAN SAVE ITS RETURN INTO A VARIABLE AND DISPLAY THAT

NOW A USER CAN DIRECTLY CONTROL WHAT SHOULD A CHILD RENDER WITHOUT TOUCHING THE CHILD COMPONENT

# since its returning JSX , its a dom object (JS object)

sayName is actually the `render` prop, conventionally


now using render in child component

 return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {render(goingOut)}    <---------    CALL THE FUNCTION WITH THE STATE ARGUMENT.
        </div>
    )

# ITS ALSO POSSIBLE TO USE RENDER PROPS AS A CHILDREN, ITS MORE COMMONLY USED NOWADAYS

<Decision>
 {(goingOut) => {
                return (
                    <h1>Am I going out? {goingOut ? "Yes" : "No"}</h1>
                )
            }}
</Decision>

`PASSING THE FUNCTION AS A CHILD` THATS ALSO DOABLE.
  
# TOGGLEDISPLAY USING RENDER PROP AS CHILDREN

import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const { on } = React.useContext(ToggleContext)
    return children(on)
}

in main :

 <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>



####                    CUSTOM HOOKS                       ####

`Hooks` allow us to <hook into> the rendering cycles of React , like useState saves and maintains data across renders, useEffect handles side effects while 
React renders, useContext and useRef allow us to be more flexible with States and the amount of prop drilling we have to generally do.

`COMPOSING THESE HOOKS TOGETHER GIVES US CUSTOM HOOKS, A COMBINATION OF DIFFERENT HOOKS REACT GIVES US TO ACCOMPLISH TASKS NOT POSSIBLE BY ONE DEFAULT HOOK`

# CUSTOM HOOKS ARE LIKE GENERALISED FUNCTIONS OR UTILITY FUNCTIONS IN CODE, LIKE A DISPLAY FUNCTION 

HOW TO MAKE HOOKS?

CONVENTION : function use`ThenAnythingHere`()    , hooks always start with use , its the keyword convention

since our hooks are like React hooks we need to provide it parameters similar to the hooks like useState or useEffect, etc.

example :

function useEffectOnUpdate(function(), array){
    its similar to useEffect so it takes a function and dependancy array 
}

with body:

function useEffectOnUpdate(effectFunction, deps){
    const firstrender = useRef(false)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()  <--- SINCE WE DONT HAVE THE TOGGLE FUNCTION ANYMORE.
        }
    }, deps)   <--- deps is already expected to be an array so no need of [deps]
}

export default useEffectOnUpdate


usage: <useEffectOnUpdate(onToggle, [on])>


# CREATING HOOKS THAT ACTUALLY RETURN SOMETHING, (UPGRADE FROM `TOGGLE` HEADLESS COMPONENT)

export default function useToggle(){
    const [on, setOn] = useState(false)

    function toggle(){
        setOn(prevOn => !prevOn)
    }

    return [on, toggle]
}

now since its a returning function we can use it like

const [on, toggle] = useToggle()

these two parameters could be anything since its like a useState.

const [theme, setTheme].... or anything.

refactored `Star` after useToggle upgrade

return (
    <>{on ? 
    <BsStarFill className="star filled" onClick={toggle}/> :
    <BsStar className="star" onClick={toggle}/>
    }</>
)

`OR WRAP IN A DIV WHICH HAS THE ONCLICK`


# PASSING PARAMETERS TO OUR CUSTOM HOOK,

useToggle(initialValue = false) an example, that defaults to false if no value is provided.

using custom hooks together.

/**
 * Challenge:
 * 1. Pass a second parameter called `onToggle` to useToggle.
 *    Give it a "noop" function `() => {}` as a default.
 * 2. Think: how can we call this `onToggle` function any time
 *    `on` changes, but NOT on the first render? 🤔
 */
export default function useToggle(initialValue = false, onToggle = () => {}) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
   useEffectOnUpdate(onToggle, [on]) <--- this effect does not run on first render.

    
    return [on, toggle]
}


# DESTRUCTURING PARAMETERS 
WHAT IF I DIDNT WANT TO PASS A FIRST PARAM, BUT SECOND OR VICE VERSA?

WE ALREADY DEFAULTED OUR PROPS IN USETOGGLE HOOK, SO WE CAN JUST MAKE PARAMETERS AN OBJECT AND DESTRUCTURE OUR PROPS USING {} BRACKETS TO SURROUND THE TWO PARAMS.

THEN IN MENU:

 const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })

WE CAN DO AN OBJECT. initial defaults to false, and onToggle defaults to a `NOOP` FUNCTION. SO WE CAN PASS EITHER OR BOTH OR NOTHING.

# USING REDUCER HOOK VS STATE HOOK

REDUCER HAS MANY ADVANTAGES LIKE , MORE COMPLEX STATE MANAGEMENT, RE USABLE AND AVOIDS MANY RE RENDERS.
SYNTAX : `const [state, dispatch] = useReducer(reducer, initialState)`

a sample reducer function to manage a counter 

(state, action) => {
    switch (action.type) {
        case 'add':
        return { count : state.count + 1 }
         case 'subtract':
        return { count : state.count - 1 }

        default:
            throw new Error()
    }
}

`useReducer` WHILE USEFUL IS PRETTY MORE COMPLEX TO LEARN AND MASTER COMPARED TO USESTATE.

effect that runs after first render

export default function useEffectOnUpdate(effect, dependencies){
    const firstrender = useRef(true)

    useEffect(() => {
        if(firstrender.current) firstrender.current = false
        else effect()
    }, dependencies)
}



# PERFORMANCE IN REACT.

1. SEND LESS CODE TO BROWSER
2. CACHE EXPENSIVE OPERATIONS/CALCULATIONS TO AVOID REDOING ON RE-RENDER.
3. AVOID TOO MUCH UNNECESSARY RE RENDERING
4. RE-STRUCTURE THE APP TREE.

# PERFORMANCE CEVEATS
1. REACT IS ALREADY FAST.
2. WE SHOULDN'T OPTIMISE PREMATURELY (IF IT AIN'T A BUG DON'T FIX IT)
3. BALANCE OUR OPTIMISATIONS USING READABLE AND MAINTAINABLE CODE BASE.

# RECURSIVE RENDERING IN REACT.
REACT RENDERS COMPONENTS RECURSIVELY, OR YOU CAN SAY IT RENDERS THE TREE IN PREORDER 
ROOT, LEFT SUBTREE, RIGHT SUBTREE.

# THREE RENDER PHASES IN REACT,
UPDATE, LIST CHANGES, COMMIT THESE CHANGES

OR IN TECHNICAL TERMS : A STATE CHANGE? -> RENDER -> RECONCILIATION -> COMMIT TO DOM.

1. RENDERING - EVERY COMPONENT GETS CALLED AGAIN. A NEW VIRTUAL DOM IS CREATED WHERE EVERYTHING RUNS AGAIN. EVERY SIDE FUNCTION OR CREATION OR CALCULATION.
2. RECONCILIATION - LIKE GITHUB COMMITS HAVE DIFFS, REACT USES A SPECIAL `'DIFFING'` ALGORITHM TO SEE WHAT IS DIFFERENT FROM THE OLD RENDER/VERSION, AGAINST THE NEW VIRTUAL DOM CREATED IN PHASE ONE.
3. COMMIT TO DOM. - CHANGES THE ACTUAL CURRENT DOM WITH MINIMAL CHANGES POSSIBLE SO IT DOESNT HAVE TO REBUILD THE APP TREE STRUCTURE ALL OVER. BASED ON RECONCILIATION.

EXAMPLE : A COMPONENT RENDERS AGAIN, DUE TO A STATE CHANGE IN IT SO A NEW VIRTUAL DOM IS CREATED. ITS NOT YET PART OF THE APP.
THEN REACT LOOKS JUST AT SECTION IT CREATED A VIRTUAL DOM FOR JUST NOW AND COMPARED AGAINST OLD VERSION.
THEN REACT COMMITS THE VIRTUAL DOM TO THE ACTUAL DOM FINALLY.

WHAT IF? ONLY ONE COMPONENT WAS CHANGED DURING A RE RENDER, THEN DURING RECONCILIATION REACT WILL MAKE SURE NOT TO OVERWRITE THE SAME TREE OVER 
AND JUST UPDATE THAT ONE COMPONENT, PARENT OR CHILD DOESNT MATTER.


# COMMIT IS OBVIOUSLY THE SLOWEST AND EXPENSIVE TASK TO DO.


# QUIZ

1. What are the 3 phases of the rendering process called in React?
1 - Render
2 - Reconciliation
3 - Commit


2. What happens in the Render phase?
React runs the code from the component that had the state change,
and all the descendent components of that component as well.


3. What happens in the Reconciliation phase?
React compares the old render with the new render (in VDOM) using
its diffing algorithm to figure out what changes needs to be made
to the real DOM.


4. What happens in the Commit phase?
The changes determined from the reconciliation phase are actually
committed (painted) to the real DOM, and the user sees the updates
on the page.


# USING DEVTOOLS TO DEBUG PERFORMANCE.

IN PERFORMANCE TAB WE CAN ARTIFICIALLY THROTTLE OR SLOW DOWN OUR APP, ON CPU OR NETWORK SIDE TO SEE IF SOMEONE WHO DOESNT HAVE OUR PC OR DEVICE WILL RUN THE APP.
`WE CAN SPECIFICALLY USE REACT DEV TOOLS PROVIDED BY REACT DEVS TO MEASURE OUR REACT APP`

# STRICTMODE IN REACT
`React.StrictMode` component used at the point we are rendering our app, like in index.jsx

IT DOUBLE RENDERS ALL FUNCTIONS IN THE APP THAT SHOULD BE `PURE` , RUNS ALL USE EFFECTS / SIDE EFFECTS ON RE RENDERS.

SAY IF WE ARE DIRECTLY CHANGING A STATE IN AN UNPURE WAY, OR YOU HAVE A STATE OBJECT OR ARRAY YOU'RE MODIFYING DIRECTLY, IT CAUSES A DOUBLE RENDER.

# StrictMode causes double-run of Effects.
SO WE CAN POINT OUT ANY BUGS HAPPENING IN THE BACKGROUND.
makes it easier to detect when and where do we need to cleanup our effects.


# CODE SPLITTING TO REDUCE DOWNLOADS
instead of always `importing` our packages or code or libraries we can use the react `import()` function to conditionally import on need.
like <LAZY STATE INITIALISATION> WE CAN LAZY LOAD OUR HEAVY COMPONENTS ONLY WHEN NEEDED USING `lazy()`

THEN WE CAN USE <Suspense> component to provide a fallback UI while component is loading


#### TLDR ITS BASICALLY LOADING SCREENS AND SKELETONS LOGIC IN LAYMAN TERMS.
EXAMPLE:

const ProductsList = React.lazy(() => { <--- LAZY IS HANDLING THE IMPORT OF PRODUCTS LIST WHICH IMPORTS A BIG LIBRARY OF FAKER DATA. 
  return import("./ProductsList")
})

FAKER TAKES A LOT OF TIME TO LOAD SO , LAZY SUSPENDED THE IMPORT LIKE A FETCH, AWAIT PROMISE THAT IS WAITING FOR SOMETHING/SOMEONE TO FULFILL IT.

BUT REACT CANNOT WAIT FOR A COMPONENT , IT NEEDS TO DISPLAY SOMETHING THATS WHERE <Suspense> COMPONENT COMES INTO PLAY

 <React.Suspense fallback={<h2>Loading...</h2>}>  <--- THIS FALLBACK UI IS WHAT REACT WILL SHOW UNTIL IT DOWNLOADS THE `LAZY` IMPORT.
        <div className="products-list">
          {showProducts && <ProductsList />} <--- CONDITIONALLY RENDERING ON A TOGGLED STATE `showProducts`
        </div>
      </React.Suspense>


# useMemo() HOOK : TO REMEMBER HEAVY CALCULATED VALUES BETWEEN RENDERS.

its like state for calculated values only.
like score. time, correct answers.

# NEVER USE MEMO HOOK FOR SOMETHING TRIVIAL LIKE GETTING LENGTH OF ARRAY , ARITHMETIC OPERATIONS OR SOME SMALL ENOUGH CALCULATION 
# IT WILL ONLY SLOW YOU DOWN MORE THAN FIXING THE ISSUE. LIKE SAID, `IF IT AIN'T BROKE DONT FIX IT.`

SYNTAX : useMemo needs to be stored like state, ref and context but works like useEffect

const productsCount = useMemo(() => {
    return `anySlowExpensiveCalculation`
}, [dependancies])

EXAMPLE :

const startTime2 = Date.now()

  const sortedProducts = React.useMemo(() => {
    return [...productsData].sort(
      (a, b) => a.name.localeCompare(b.name)
    )
  }, [productsData])

  const endTime2 = Date.now()
  console.log(`Took ${endTime2 - startTime2}ms`)

  IT WILL LOG SOME `ms` TIME WHEN APP LOADS THEN IT TAKES `0ms` on any operation we do in the app.

# REACT.MEMO() METHOD : AVOID UNNECESSARY RERENDERING.
ITS A HIGHER ORDER COMPONENT MADE BY  `REACT`   , A HIGHER ORDER FUNCTION TAKES ANOTHER FUNCTION AS ITS ARGUMENT, EG. `map(), filter(), reduce()`, etc.
SIMILARLY A    `HIGHER ORDER COMPONENT` TAKES ANOTHER COMPONENT AS ITS ARGUMENT AND APPENDS OR GIVES IT SPECIAL PROPERTIES LIKE HOW `map()` performs given function on every list/array element to return a new different ARRAY.

NOW WHAT DOES   `React.memo()`  DO? IT MEMOIZES (CACHES/REMEMBERS) A COMPONENT (`NOT CALCULATION`) IF THE PROPS IN THE COMPONENT DONT CHANGE.

# ITS MORE IMPORTANT TO TAKE CARE OF SLOW RENDERING THAN FIXING RERENDERS FIRST.

SYNTAX? : INSTEAD OF EXPORTING A FUNCTION OR CONST DIRECTLY, WE DO : export default React.memo(`Component`) 
# THERE'S AN OPTIONAL SECOND ARGUMENT TO MEMO , A FUNCTION TO CHECK IF PROPS ARE EQUAL , THEN DEV CAN WRITE LOGIC TO COMPARE OLD AND NEW PROPS.
BUT WE HARDLY EVER NEED IT. 


# REFERENTIAL EQUALITY IN JAVASCRIPT AND HOW ITS USED FOR REACT.
JS STORES ALL FUNCTIONS AND VALUES IN THE MEMORY CATEGORIZED INTO :

1. `VALUE` TYPE : THAT IS PRIMITIVE DATA TYPES LIKE BOOLEAN, INT, STRING, FLOAT WITH EDGECASES OF `UNDEFINED`
2. `REFERENTIAL` TYPE : THAT IS COMPLEX TYPES LIKE DATA STRUCTURES, SUCH AS OBJECTS, ARRAYS. AND FUNCTIONS.

JS MANAGES MEMORY DIFFERENTLY FOR BOTH OF THESE.

A   `VALUE` TYPE IS CONSIDERED EQUAL IF THEY HAVE THE SAME VALUE.

EG. a = 1
    b = 1
    log(a === b)        WHICH WILL LOG TRUE SINCE BOTH A AND B HAVE 1 AS THEIR VALUE.


A TRIPLE = SIGN CHECKS VALUE AND DATATYPE. ITS MOST WIDELY USED IN JS. SINCE ITS JS SPECIAL
A DOUBLE = SIGN ONLY CHECKS FOR VALUE

EG. a = 1
    b = "1"
    log(a === b)  WILL GIVE FALSE BUT   log(a == b)     WILL GIVE TRUE.


A   `REFERENTIAL` TYPE IS ONLY EQUAL WHEN TWO THINGS REFER TO THE SAME THING IN MEMORY

EG. a = {name : 'hardik'}
    b = {name : 'hardik'}

    log(a === b)    WILL GIVE FALSE , THOUGH BOTH HAVE SAME VALUE BUT THEY ARE REFERING ELSEWHERE IN MEMORY.

    IF WE DO b = a,     THEN THE `log` WILL RETURN TRUE SINCE THEY BOTH POINT IN THE SAME MEMORY LOCATION.

# USING REFERENTIAL EQUALITY WITH MEMO() AND USEMEMO TOGETHER.

WHAT IF THE MEMO() FUNCTION GETS AN OBJECT PROP? IT'LL RENDER EVERYTHING EVEN THOUGH THE OBJECT NEVER CHANGES, THATS DUE TO `REFERENTIAL EQUALITY.`

EG. I HAVE A STYLES PROP THAT CONTROLS THEME, EVEN THOUGH I NEVER EVER CHANGE THE OBJECT, MY MEMOIZED COMPONENT WILL RE RENDER BECAUSE THE OBJECT CHANGE
DOES NOT POINT TO THE SAME MEMORY LOCATION. SO EVERY TIME, REACT MEMO() CONSIDERS STYLE OBJECT TO BE A NEW ONE.

SOLUTION : USE `useMemo()` HOOK WITH `memo()` SO THAT THE REFERENTIAL EQUALITY STAYS SAME. THE OBJECT REFERENCE DOESNT CHANGE AND IT DOESNT CAUSE RE RENDER.

const style = React.useMemo(() => {
       return {
        backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
        color: darkMode ? "#e9e3ff" : "#2b283a",
    }
    }, [darkMode])

# `useCallback()` HOOK : TO REMEMBER / CACHE FUNCTION DEFINITIONS, `useMemo()` saved calculations , `memo()` saved constant component.
# THIS IS A CONTINUATION TO REFERENTIAL EQUALITY WHERE FUNCTIONS ARE ALSO SEEN AS `REFERENTIAL` TYPE , JUST LIKE STYLE , IT CHANGES REFERENCE EVEN WHEN VALUE OR IN THIS CASE DEFINITION DOES NOT CHANGE.

ITS OFTEN USED WITH USEMEMO HOOK TO ALSO HANDLE PERFORMANCE ISSUES CAUSES BY FUNCTION PROPS IN MEMOIZED COMPONENTS

AND IT AVOIDS MANY `useEffect()` CALLS, IN CASES OF API CALLS.

SYNTAX IS SAME AS useEffect and useMemo HOOKS.

const increment = React.useCallback(() => {
    setCount(prevCount => prevCount + 1)
}, [setCount])


`WHAT IF?` I PASS A STATE SETTER TO MY MEMOIZED COMPONENT, WILL IT CAUSE ANY SLOW PERFORMANCE?
# ANSWER : NO, BECAUSE STATE SETTER FUNCTIONS ARE PROVIDED TO US BY REACT AND THUS REACT IS IN CHARGE OF KEEPING ITS REFERENCE INTACT SO WE DONT NEED TO MEMOIZE OR CACHE THE FUNCTION. UNDER THE HOOD, REACT IS USING THE CALLBACK HOOK ON THE STATE SETTER FUNCTION ALREADY.

BUT WHAT NOW IF I PASS A FUNCTION THAT ALSO HAS THAT SAME SAID FUNCTION?
since that NEW FUNCTION IS NOW A REFERENTIAL TYPE THATS NOT BEING TAKEN CARE BY REACT , WE NEED TO CACHE IT, OTHERWISE WE GET PERFORMANCE ISSUES.

example. 
 const chooseProduct = React.useCallback((id) => {
    console.log("New product selected")
    setSelectedProduct(id)
  }, [setSelectedProduct])


//      OPTIONAL CHAINING : `data?.map or object?.id and so on...`  ? OPERATOR HERE CHECKS IF THE OBJECT EXISTS OR NOT. HELPS WITH UNDEFINED ISSUES.   

# NULLISH COALESCING (??)
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0