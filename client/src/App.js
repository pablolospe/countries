import './App.css';
import React from "react";
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
// import Card from './components/Card/Card.jsx';
import CardDetail from './components/CardDetail/CardDetail.jsx';
import Navbar from './components/Navbar/Navbar';
import Activities from './components/Activities/Activities.jsx'
import Form from './components/Form/Form';
import About from './components/About/About';
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">
      <h3>Henry Countries</h3>
      
      <Route exact path={"/"} component={LandingPage} />
      <Route path={"/home"} component={Navbar} />
      <Route path={"/detail"} component={Navbar} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/home/activities"} component={Activities} />
      <Route exact path={"/home/form"} component={Form} />
      <Route exact path={"/detail/:id"} component={CardDetail} />
      <Route exact path={"/countries?name="} component={CardDetail} />
      <Route exact path={"/home/about"} component={About} />
    </div>
  );
}

export default App;
