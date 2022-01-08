import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import GettingStarted from "./components/pages/GettingStarted/gettingStarted";
import Home from "./components/pages/Home/home";
import Intro from "./components/pages/Intro/intro";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Intro /> },
    { path: "/home", element: <Home /> },
    { path: "/getting-started", element: <GettingStarted /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Layout>
      <Router basename={process.env.PUBLIC_URL}>
        <div id="router-wrapper">
          <App />
        </div>
      </Router>
    </Layout>
  );
};

export default AppWrapper;
