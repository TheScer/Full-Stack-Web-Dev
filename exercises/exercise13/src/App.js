import ItalyPage from "./pages/Italy";
import BrazilPage from "./pages/Brazil";
import FinlandPage from "./pages/Finland";
import MainNavigation from "./components/MainNavigation";
import { Switch, Route } from "react-router-dom";
import IndiaPage from "./pages/India";
import FrancePage from "./pages/France";

//Joined late for class at 11:25 25 mins late
//missed something between 43-46 mins into class

const App = () => {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <FinlandPage />
        </Route>

        <Route path="/italy">
          <ItalyPage />
        </Route>

        <Route path="/brazil">
          <BrazilPage />
        </Route>

        <Route path="/india">
          <IndiaPage />
        </Route>

        <Route path="/france">
          <FrancePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
