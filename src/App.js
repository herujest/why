import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import Home from "./components/pages/Home/home";
import Intro from "./components/pages/Intro/intro";

function App() {
  return (
    <Layout>
      <Router basename={process.env.PUBLIC_URL}>
        <div id="router-wrapper">
          <Route exact path="/" component={Intro} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    </Layout>
  );
}

export default App;
