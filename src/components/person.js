import { Pet } from "../d1_app";
const Person = (props) => {
    return (
    <div>
        <p>I'm {props.name}</p>
        <Pet petsName={props.petsName} petType={props.petType}/>
    </div>
    );
}

export default Person
