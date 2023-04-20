import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutSuccess from './pages/CheckoutSuccess';

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/carts">
          <Cart />
        </Route>
        <Route path="/checkout-success" >
          <CheckoutSuccess />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route  path="/register">
        <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;