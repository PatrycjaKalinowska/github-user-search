import './App.css';
import { useEffect, useState } from 'react';
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
  const [repoPage, setRepoPage] = useState(1);
  const [moreReposBtnVisibility, setMoreReposBtnVisibility ] = useState(true);


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
      })
      .then(data => setUserData(data))
      .catch(err => {
        console.log(err);
      });

    setRepoPage(1);

    fetch(`https://api.github.com/users/${input}/repos?page=1&per_page=50`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setReposList([]);
          throw Error('could not fetch the data');
        }
      })
      .then(data => {
        setReposList(data);
      })
      .catch(err => {
        console.log(err);
      });

    setMoreReposBtnVisibility(true);
  }

  const setUserData = (data) => {
    setUserName(data.name);
    setUserLogin(data.login);
    setUserAvatar(data.avatar_url);
    setRepos(data.public_repos);
    setProfileURL(data.html_url);
  }

  const moreReposHandler = () => {
    setRepoPage(prev => ++prev);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${input}/repos?page=${repoPage}&per_page=50`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('Could not fetch the data');
          throw Error('could not fetch the data');
        }
      })
      .then(data => {
        if (data.length !== 0) {
          setReposList(prev => [...prev, ...data]);
        } else {
          setMoreReposBtnVisibility(false);
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, [repoPage]);

  return <div className='app__container'>
    <h1 className='app__header'>GitHub User Search</h1>
    <UserInput input={input} inputChangeHandler={handleInputChange} searchHandler={handleSearchClick} />
    {userName ? <ProfileCard userName={userName} userLogin={userLogin} userAvatar={userAvatar} repos={repos} profileURL={profileURL} /> : <p>Profile not found</p>}
    {reposList.length === 0 ? <p></p> :
      <div className='app__repos-list-container'>
        <p className='app__repos-list-header'>Repositories:</p>
        <ul className='app__repos-list'>
          {reposList ? reposList.map((item, index) => <RepoCard key={index} item={item}></RepoCard>) : <li>Repos not found</li>}
        </ul>
        {moreReposBtnVisibility ? <button className='btn app__repos-list-btn' id="load-more" onClick={moreReposHandler}>Load more</button> : ""} 
      </div>
    }
  </div>
}

export default App;
