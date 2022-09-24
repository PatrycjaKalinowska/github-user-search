import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import ProfileCard from './components/ProfileCard/ProfieCard';

const App = () => {
  const [input, setInput] = useState("");
  // const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  console.log(input);
  
  const handleSearchClick = (e) => {
    e.preventDefault();
    fetch('https://api.github.com/users/PatrycjaKalinowska')
      .then(res => res.json())
      .then(data => setUserData(data));
  }

  const setUserData = (data) => {
    setUserName(data.name);
    setUserLogin(data.login);
    setUserAvatar(data.avatar_url);
    setRepos(data.public_repos);


  }




  return <div className='app__container'>
    <h1 className='app__header'>GitHub User Search</h1>
    <UserInput input={input} inputChangeHandler={handleInputChange} searchHandler={handleSearchClick} />
    <ProfileCard userName={userName} userLogin={userLogin} userAvatar={userAvatar} repos={repos} />
  </div>
}

export default App;
