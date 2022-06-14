import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import All from "../Pages/All/All";
import Jewellery from "../Pages/Jewellery/jewellery";
import Home from "../Pages/home/Home.js";

function Routing() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/all">
            <All/>
          </Route>
          <Route path="/jewellery">
            <Jewellery />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routing;
