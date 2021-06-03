
import { Route, Switch } from 'react-router';
import { NavLink } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
 import NotFound from "./components/NotFound/NotFound";
import "./App.css"
function App() {
  const activeLinkStyle = {
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <ul className="ul">
        <li>
          <NavLink
          exact
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/" >home </NavLink>
        </li>      
        <li>
          <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/about">about </NavLink>
        </li>
     
      </ul>
      <Switch>
      {/* path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL
   component - тот компонент, который отвечает за обработку запроса по этому маршруту */}
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />      
      </Switch>
      {/* для выбора маршрута определен объект Switch. Он позволяет выбрать первый попавшийся маршрут и его использовать для обработки. */}
    </div>
  );
}
export default App;























































//brouzer router use 
//exact delaet atribut obizatelnym
//Switch pereclushaet 
//redirect to for home page pereadresasiya
//Link style stily aktivnoi ssylki
//navlink dlya navigasii
//match  coderzit params    url path isexact params
//path put
//put v komponente route
//exact dopuskeat tochnoe sovpadenie
//reduccer function prinimaet 2 parsametr 1 sostoyanie 
//1 action 
//action polya type kak sostoyanie budet izmenyatsya
//actions type for this messages and i don't now how to say it 
