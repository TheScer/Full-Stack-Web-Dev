import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import MenuUpdater from "./pages/MenuUpdater";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/MenuUpdater">
            <MenuUpdater />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
