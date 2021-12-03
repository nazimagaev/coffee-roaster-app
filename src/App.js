import { Switch, Route } from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/subscribe">
          <Subscribe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
