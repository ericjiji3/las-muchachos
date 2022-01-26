import logo from './logo.svg';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Heading from './components/Heading';
import Contact from './pages/Contact';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* border: 2px solid #e2dbd3; */}
       <Helmet>
                <style>{'body { background-color: #1F1B18; color: black; }'}</style>
          </Helmet>
      <Router>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
