import './UserInput.css';

const UserInput = ( { input, inputChangeHandler, searchHandler } ) => {
    
    return <form className="form">
        <input className= "form__input" type="text" name="user" placeholder="Enter GitHub user" onChange={inputChangeHandler} />
        <button className='btn form__btn' type="submit" onClick={searchHandler}>Search</button>
    </form>
}

export default UserInput;