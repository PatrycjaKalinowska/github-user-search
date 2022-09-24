import './App.css';
import UserInput from './components/UserInput/UserInput';

const App = () => {

  return <div className='app__container'>
    <h1 className='app__header'>GitHub User Search</h1>
    <UserInput />
  </div>
}

export default App;
