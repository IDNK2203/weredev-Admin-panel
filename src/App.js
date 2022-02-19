import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
