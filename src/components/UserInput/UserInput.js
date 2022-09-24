import { useState } from 'react';
import './UserInput.css';

const UserInput = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return <form className="form">
        <input className= "form__input" type="text" name="user" placeholder="Enter GitHub user name" onChange={handleChange} />
        <button className='btn form__btn' onClick={handleClick}>Search</button>
    </form>
}

export default UserInput;