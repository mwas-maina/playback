import "./App.css";
import Navba from "./components/Navbar/Navbar";
import "../src/utilities/typography/typography.scss";
import Appcontent from "./pages/content/Appcontent";
import { Switch } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navba />
      <Switch>
        <Appcontent />
      </Switch>
    </div>
  );
}

export default App;
