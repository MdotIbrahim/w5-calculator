// import { Component } from 'react'; //class component
import {useState} from "react";
import Person from "./components/person"
// import logo from './logo.svg';
import air1 from "./images/airbnb_1.png"
import air2 from "./images/airbnb_2.png"
import air3 from "./images/airbnb_3.png"
import air4 from "./images/airbnb_4.png"
// import bbc1 from "./images/bbc1.png"
// import bbc2 from "./images/bbc2.png"
// import bbc3 from "./images/bbc3.png"
// import bbc4 from "./images/bbc4.png"
import './main.css';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () =>{
    setToggle(!toggle);
    console.log(toggle)
  }

  // activity - counter - method 1
  const [number, setNumber] = useState(false) //same as 0
  const startNumber = () => {
    setNumber(number = 0)
  }
  
  // activity - counter - method 2

  const [counter, setCounter] = useState(0)
  
  const handleClickPlus = () => {
    setCounter(counter + 1)
  }
  const handleClickMinus = () => {
    setCounter(counter > 0 ? counter - 1 : counter) // shorthand if statement - condition followed by ?,then outcome and finally colon, then else outcome
  }

  return (
    <div className="App">
        <h1 onClick={() => handleClick()}>Hello - Click Me</h1>
        {toggle ? ( //this is ternary operator
          <div>
              <h2>Render if true</h2>
          </div>
        ) : (
          <h2>Render if false</h2>
        )}

      {/* method 1 */}
      {/* {startNumber()} */}
      <div className="button-count">
          <button onClick={() => setNumber(number + 1)}>+</button>
          <h1>{number}</h1>
          <button onClick={() => setNumber(number - 1)}>-</button>
          
      {/* method 2  */}
          <button onClick={handleClickPlus}>+</button>
          <h1>{counter}</h1> 
          <button onClick={handleClickMinus}>-</button>
      </div>
      
      <Person name="Del" age="23" petsName="Jane" petType="fish"/>
      <Person name="Dan" age="22" petsName="Jeremy" petType="dog"/>
      <Person name="Dave" age="21" petsName="John" petType="cat" /> {/* these are like arguments that are converted to an object */}

      <div className="airbnb-container">
          <AirBnb imgName={air1} imgDesc="Entire Homes" />
          <AirBnb imgName={air2} imgDesc="Unique stays" />
          <AirBnb imgName={air3} imgDesc="Cabin and cottages" />
          <AirBnb imgName={air4} imgDesc="Pets Allowed" />
      </div>
      {/* <div className="bbc-container">
          <BBC imgName={bbc1} imgDesc="img1" />
          <BBC imgName={bbc2} imgDesc="img2" />
          <BBC imgName={bbc3} imgDesc="img3" />
          <BBC imgName={bbc4} imgDesc="img4" />
      </div> */}
    </div>
  );
}

export default App;

// class AppSubClass extends Component { // or can use hooks - showed above
//   render() {
//     return (
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }
// }

// const Person2 = props => {
//   return <p>I'm {props.name} and I'm {props.age} years old.</p>
// }

// const Person3 = (props) => { // props is an object that can be accessed using attributes
//   return <p>I'm {props.name} and I'm {props.age} years old.</p>
// }

// the above ways are manual but can be done better by using components within other components that arent the root Component -- see person.js and pet component function below

export const Pet = (props) => {
    return <p>My pets name is {props.petsName} and it is a {props.petType}.</p>
}

// activity 
const AirBnb = (props) => {
  return (
    <div>
      <a href="#">
      <img src={props.imgName} alt={props.imgDesc}/>
      <p>{props.imgDesc}</p>
      </a>
    </div>
  )
}

// const BBC = (props) => {
//   return (
//     <div>
//       <a href="#">
//       <img src={props.imgName} alt={props.imgDesc}/>
//       {/* <p>{props.imgDesc}</p> */}
//       </a>
//     </div>
//   )
// }