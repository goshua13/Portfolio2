import React, { Component, Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";

import history from "../history";
import Navbar from "./Navbar";
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Work from './pages/work';

class App extends Component {
  render() {
    const text = document.querySelectorAll(".bounce");
    const bounceInit = e => {
      const target = e.target;
      target.classList.add("grow");
    };
    const bounceEnd = e => {
      const target = e.target;
      target.classList.remove("grow");
    };
    text.forEach(sentence => {
      const sentences = sentence.innerHTML
        .split(" ")
        .map(word => {
          return word.replace(`${word}`, `<span>${word}</span>`);
        })
        .join(" ");
      sentence.innerHTML = sentences;
    });

    const bouncyText = document.querySelectorAll(".bounce span");
    bouncyText.forEach(word => {
      word.addEventListener("mouseover", bounceInit);
      word.addEventListener("animationend", bounceEnd);
    });
    return (
      <div>
        <HashRouter history={history}>
          <div>
            <Navbar />
            <div className="ui container">
                <Route path={["/", "/Portfolio2"]} exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
