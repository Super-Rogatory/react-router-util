# The Idea of React Routing. Why we use it, and how to use it.

## **Motivation:** Normally when access different parts of the page, the user sends an HTTP request that is then handled by some backend framework. Take Express for example, our route handlers are listening for a request made to a specific URL and responding with some HTML markup. This causes an entire breakdown of the DOM and a new DOM construction based on the markup that was sent as a response.
## **React Router:** With React Router, we can simply load up a specific component when a URL is hit.
## **Installs:** npm install react-router-dom
<hr />

## A Starting Point of Sorts
```
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop'
+ import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;

```

<hr />

# Definitions of Primary Components

## NOTE: Difference between HashRouter and BrowserRouter w/ Router && Route exact path='...'.
- ## **MOTIVATION: Router's add the ability to handle routes in React. You can wrap the components by enclosing them in the Router component tags. These components can now be used as a dynamic response to a request.**
- ### A BrowserRouter uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router.
- ### A HashRouter stores the current location in the hash portion of the URL, so the URL looks something like http://example.com/#/your/page. Since the hash is never sent to the server, this means that no special server configuration is needed.
- ### A Route has a basic responsibility of rendering some component when its path matches the current URL.


## NOTE: Important detail about Switch.
- ### **When a Switch is rendered, it searches through its children Route elements to find one whose path matches the current URL. When it finds one, it renders that Route and ignores all others. This means that you should put Routes with more specific (typically longer) paths before less-specific ones.If no Route matches, the Switch renders nothing (null).**


## NOTE: Important detail about Link.
- ### **React Router provides a Link component to create links in your application. Wherever you render a Link, an anchor (a) will be rendered in your HTML document.**
<hr />

# Definitions of Important Hooks
## useParams() - useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
<hr />


```
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={Home}>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;
```


# Why is this a problem?
## **ANSWER:** Our route as we have it setup now, will simply check 'localhost:3000[/]' to see if it has a slash.         
## Is there a path with a slash? Yes. Cool let's render Home. Then we check the next Route. 
## Is there a path with /about? Yes. Cool let's render About.
<hr />

## Solution:
## USE SWITCH.
```
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Home</h1>
);
```

## Linking Different Components (Nav.js)
```
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
```
<hr />

## Remembering to use async/await with useState in functional components. Example.
```
import React, {useState, useEffect} from "react";
import axios from 'axios';
function Map() {
  const fetchMap = async () => {
    try {
      const info = await axios.get('https://fortnite-api.com/v1/map');
      console.log(info);
    } catch (error) {
      console.log('Failed to get map information');
    }
  }
  useEffect(() => {
    fetchMap();
  }, []);
  
  return (
    <div>
      <h1>Map Page</h1>
    </div>
  );
}

export default Map;

```