
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Countries from './components/countries/Countries'
import Home from './components/home/Home'
import Notfound from './components/notfound/Notfound';
import Info from './components/info/Info'
import User from './components/users/User'


function App() {
  return (
    <Router>
      <div className="App">
          <Navigation/>
        <Switch>
          <Route path='/Countries'>
          <Countries/>
          </Route>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/info/:name'>
            <Info/>
          </Route>
          <Route path='/users/:userId'>
           <User/>
          </Route>
          <Route path='*'>
            <Notfound/>
          </Route>
        </Switch>
      </div>

   </Router>
   
   
      
   
  )
}

export default App;
