import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

export default function Header() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      {/*
        it's good practice to place the root page link at the end
        this will ensure that the switch will go first through the other links
        exact={true} is needed bc "/" at the end of the address will be treated as a separate link
      */}
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}
