import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const activeLinkStyle = {
    fontSize: "18px"
  }
  return (
    <div className="App">
      <div className="divNav">
        <img src = {logo} alt = ""/>
        <ul className="ulNav">
          <li><NavLink exact activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/">Home</NavLink></li>
          <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/About">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
//reduccer function prinimaet 2 parsametr 1 sostoyanie 
//1 action 
//action polya type kak sostoyanie budet izmenyatsya