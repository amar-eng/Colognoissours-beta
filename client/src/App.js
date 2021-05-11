import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>

    </div>
  );
}

export default App;
