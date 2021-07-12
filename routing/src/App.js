import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import MapList from "./components/MapList";
import MapDetail from "./components/MapDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/map" exact component={MapList} />
          <Route path="/map/:id" component={MapDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Home</h1>
);
export default App;
