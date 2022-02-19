import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/productList";
import Product from "./pages/product/product";
import NewProduct from "./pages/newProduct/newProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user/new">
              <NewUser></NewUser>
            </Route>
            <Route path="/user/:id">
              <User></User>
            </Route>
            <Route path="/user">
              <UserList></UserList>
            </Route>
            <Route path="/product/new">
              <NewProduct></NewProduct>
            </Route>
            <Route path="/product/:id">
              <Product></Product>
            </Route>
            <Route path="/product">
              <ProductList></ProductList>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
