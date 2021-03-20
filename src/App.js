import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/homepage";
import Header from "./componets/header";
import Test from "./pages/test";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Router>
    </div>
  );
}

export default App;
