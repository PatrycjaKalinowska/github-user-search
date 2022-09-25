import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import ProfileCard from './components/ProfileCard/ProfieCard';
import RepoCard from './components/RepoCard/RepoCard';

const App = () => {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [profileURL, setProfileURL] = useState(null);
  const [repos, setRepos] = useState(null);
  const [reposList, setReposList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const handleInputChange = (e) => {
    setInput(e.target.value);

  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setUserData([]);
          throw Error('could not fetch the data');
        }
      } )
      .then(data => setUserData(data))
      .catch( err => {
        console.log(err);
    });

    fetch(`https://api.github.com/users/${input}/repos?per_page=100`)
      .then(res => {
        if (res.ok) {
        return res.json();
      } else {
        setReposList([]);
        throw Error('could not fetch the data');
      }})
      .then(data => {
        setReposList(data);
      })
      .catch( err => {
        console.log(err);
    });

    console.log(input);
    console.log(reposList);
  }

  const setUserData = (data) => {
    setUserName(data.name);
    setUserLogin(data.login);
    setUserAvatar(data.avatar_url);
    setRepos(data.public_repos);
    setProfileURL(data.html_url);
  }


  return <div className='app__container'>
    <h1 className='app__header'>GitHub User Search</h1>
    <UserInput input={input} inputChangeHandler={handleInputChange} searchHandler={handleSearchClick} />
    {userName ? <ProfileCard userName={userName} userLogin={userLogin} userAvatar={userAvatar} repos={repos} profileURL={profileURL}/> : <p>Profile not found</p>}
    {reposList.length === 0 ? <p></p> : <ul className='app__repos-list'>
      {reposList ? reposList.map((item, index) => <RepoCard key={index} item={item}></RepoCard>) : <li>Repos not found</li>}
    </ul>


    }
  </div>
}

export default App;
