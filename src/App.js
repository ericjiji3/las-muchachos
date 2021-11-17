import logo from './logo.svg';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Heading from './components/Heading';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* border: 2px solid #e2dbd3; */}
       <Helmet>
                <style>{'body { background-color: #1F1B18; color: #cbcac8; }'}</style>
          </Helmet>
      <Home/>
    
    </div>
  );
}

export default App;
