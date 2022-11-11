import logo from "./logo.svg";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/Category.css";
import "./styles/Services.css";
import "./styles/BottomTab.css";
import "./styles/MediaQueries.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BottomTab from "./components/BottomTab";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <BottomTab></BottomTab>
    </div>
  );
}

export default App;
