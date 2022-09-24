import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import ProfileCard from './components/ProfileCard/ProfieCard';

const App = () => {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
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
    {userName ? <ProfileCard userName={userName} userLogin={userLogin} userAvatar={userAvatar} repos={repos} /> : <p>Profile not found</p>}
  </div>
}

export default App;
