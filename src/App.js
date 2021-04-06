import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MinSide from "./Components/UserPage/MinSide";
import Hjem from "./Components/Hjem/Hjem";
import FinnFadder from "./Components/FinnFadder/FinnFadder";
import Register from "./Components/UserAuthentication/Register";
import LogIn from "./Components/UserAuthentication/LogIn";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/Hjem" component={Hjem} />
          <Route path="/Registrer" component={Register} />
          <Route path="/LogInn" component={LogIn} />
          <Route path="/MinSide" component={MinSide} />
          <Route path="/FinnFadder" component={FinnFadder} />
          <Route path="/">
            <Redirect to="/Hjem" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
