import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards'

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route exact path={"/"} component={LandingPage}/>
      <Route exact path={"/home"} component={Cards}/>
    </div>
  );
}

export default App;
