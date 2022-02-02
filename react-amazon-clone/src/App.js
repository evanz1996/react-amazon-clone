import './App.css';
import Header from './Header';
import Home from './Home';
import 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
