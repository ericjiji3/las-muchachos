import logo from './logo.svg';
import Home from './components/Home';
import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
       <Helmet>
                <style>{'body { background-color: #51514f; color: #cbcac8;}'}</style>
          </Helmet>
      <Home/>
    </div>
  );
}

export default App;
