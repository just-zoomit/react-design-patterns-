import {useState, useEffect} from "react";

/*
    This is a controlled form. It cares about the state of the form.
*/

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name,setName] = useState('');
    const [age, setAge]= useState('');
    const [hairColorInput, sethairColorInput] = useState('');
    
    // Benefit of controlled form is that we can use the state to do things like validation
    useEffect(() => {
        if (name.length < 2) {
            setNameInputError("Name must be at least 2 characters");
        }else {
            setNameInputError("");
        }
      
    }, [name])
    

    const handleSubmit = (event) => {
        console.log(name.current.value);
        console.log(age.current.value);
        console.log(hairColorInput.current.value);
        event.preventDefault();

    }

    return (
        
        <form onSubmit={handleSubmit}>
        {nameInputError && <p>{nameInputError}</p> }
        <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="text" 
        name="age" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))}
        />
        <input 
        type="text" 
        name="Hair Color" 
        placeholder="Hair Color" 
        value={hairColorInput}
        onChange={(e) => sethairColorInput(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>

    )
}