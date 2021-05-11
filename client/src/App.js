import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;
