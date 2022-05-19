// import { Component } from 'react'; //class component
import React, {useState} from "react";
import './main.css';
import {evaluate} from "mathjs";
let calcArr = [];
const App = () => {
  const names = [
  {
    fname: "John",
    lname: "Jackson"
  },
  {
    fname: "Jorge",
    lname: "Joestar"
  }
  ]

  const handleClick = (firstName , index) => {
    console.log(`I am at ${index} position and my name is ${firstName}`);
    console.log(names[index]);
    // let oldArr = [...names]
  }

  // activity - calculator
  const calc = [ "7", "8", "9", "C", "4", "5", "6", "*", "1", "2" , "3" , "/", "+", "0", "-", "="];
  const [display, setDisplay] = useState([]);

  // const [isEqual, SetisEqual] = useState(0)

  const calcClickHandler = (calcValue) => {
    // console.log(evaluate("12/3"))
    if (calcValue === "C"){ //TODO - convert to switch statment
      calcArr = [];
      // console.log(calcArr)
      setDisplay(calcArr) ;
    }else if (calcValue === "="){
      try {
        calcArr = evaluate(calcArr);
        // console.log(calcArr);
        setDisplay(calcArr);
        // calcArr = [];
      } catch (error) {
        // console.log("Error");
        setDisplay("Error");
        calcArr = [];
      }
      
    }else {
      calcArr += calcValue;
      // console.log(calcValue);
      // console.log(calcArr);
      setDisplay(calcArr) ;
    }
  }

  // const displayHandler = (calcArr) => {
  //   return calcArr
  // }

  const equalsColour = (index) =>{
    if (index === 15) {
      return "equal";
    }else{
      return "";
    }
  }
  const operatorColour = (index) =>{
    if (index === 7 || index === 11 || index === 12 || index === 14) {
      return "operator";
    }else{
      return "";
    }
  }

  return (
      <div>

          {names.map((personsInfo, index) => { // index lets you target specific elements or divs...
            return  (
              <div key = {index}>
                <h1>"I" am {personsInfo.fname} {personsInfo.lname}</h1>
                <h2>Person {index + 1}</h2>
                <button onClick={() => handleClick(personsInfo.fname, index)}>Who am I</button>
                {/* <button>DELETE ME</button> */}
              </div>)
          })}
      

          {/** activity - calculator **/}
          <h1 className="calc-heading">Calculator</h1>
          <div className="calculator-container">
            <div className="display">{display}
            </div>
            
            <div className="buttons">
            {calc.map((calcButton, index) => { 
              return  (
                <div key = {index}>
                  <div>

                    <button id={equalsColour(index)} className={`button ${operatorColour(index)}`} onClick={() => calcClickHandler(calcButton)}>{calcButton}</button>
                    {/* can also use ternary operator inside the className attribute */}
                  </div>
                </div>)
            })}
            </div>
          </div>
          

      </div>
  );
}

export default App;

// const CalcDisplay = (props) => {
//   return <p>{props.calcValues}</p>;
// }

// day3 notes

/// only change component using useState hook.
///in js we use methods to change arrays - make sure not to change states using anything else... but can use spread operator (...) to access values in a new array and modify that way and THEN can use useState...to change the array to that!

// only need anonymous function when passing data through it when using onClick..

//dont use div if not needed especially if not styled...uses memory by adding DOM node to dom tree...

// can use ghost div to satisfy react by having parent div...<React.Fragment> or shorthand <>...cant add attributes though naturally since its a ghost div