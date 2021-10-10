import './App.css';
import {Header} from "./components/Header"
import { ProductList } from './components/ProductList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ProductDetail } from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"><ProductList /></Route>
          <Route path="/product/:id"><ProductDetail /></Route>
          <Route>  404 not found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
