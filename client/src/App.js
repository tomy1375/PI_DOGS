import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './views/landing/landing.component';
import About from './views/about/about.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
      <Router>
       {/* <Navbar/> */}
    <div>
      <Route exact path = "/" component = {Landing}/>
      <Route exact path = "/home" component = {Home}/>
      <Route path = "/home/:id" component = {Detail}/>
      <Route path = "/create" component = {Create}/>
      <Route path= "/about" component={About} />
    </div>
      </Router>
  );
}

export default App;
