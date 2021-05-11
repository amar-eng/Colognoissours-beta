import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path ='/'>

        </Route>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
