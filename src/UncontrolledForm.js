import React from "react";

/*
    This component is a form that is uncontrolled. 
    It does not care about the state of the form. 
    It just cares about the data when it is submitted.
*/

export const UncontrolledForm = () => {
    const nameInput = React.useRef();
    const ageInput = React.useRef();
    const hairColorInput = React.useRef();

    const handleSubmit = (event) => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        event.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" ref={nameInput}/>
        <input type="text" name="age" placeholder="Age" ref ={ageInput} />
        <input type="text" name="haircolor" placeholder="Hair Color" ref={hairColorInput}/>
        <input type="submit" value="Submit" />
        </form>

    )
}