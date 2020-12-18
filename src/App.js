import "./App.css";
//import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Navba from "./components/Navbar/Navbar";
import "../src/utilities/typography/typography.scss";
function App() {
  return (
    <div className="app">
      <Navba />

      <SideBar />
    </div>
  );
}

export default App;
