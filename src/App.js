import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
