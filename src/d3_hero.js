import React, {useState} from "react";
// import './main.css';
let calcArr = []
const App = () => {
    const [allHeroes, setAllHeroes] = useState([
        {
            hero : "superman",
            villain: "lex luthor",
        },
        {
            hero : "Saitama",
            villain: "lex luthor2",
        },
    ])

    const [favourite, setFavourite] = useState("")

    return (
        <>
            <h1>Hero Information</h1>
            <h3>{favourite}</h3>
            {allHeroes.map((heroInfo, index) => {
                return <HeroCard key ={index} heroInfoObject={heroInfo} fav={favourite} addToFav = {setFavourite}/> // heroCard is the functional component
            })}
        </>
    )

}

const HeroCard = (props) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }

    const handleAddToFavourites = () => {
        props.addToFav(props.fav + ` ${props.heroInfoObject.hero}`)
    }
    return (
        <div>
            <p>Hero: {props.heroInfoObject.hero}</p>
            {show && <p>Villain: {props.heroInfoObject.villain}</p>} {/* if show is false then it wont even read the p tag therefore not rendering it */}
            <button onClick={handleToggle}>{show ? "Hide Villain": "Show Villain"}</button>
            <button onClick={handleAddToFavourites}>Add to Favourites</button>
        </div>
    )
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