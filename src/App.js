import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import GettingStarted from "./components/pages/GettingStarted/gettingStarted";
import Intro from "./components/pages/Intro/intro";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="router-wrapper">
        <Route exact path="/" component={Intro} />
        <Route path="/getting-started" component={GettingStarted} />
      </div>
    </Router>
  );
}

export default App;
