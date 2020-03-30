import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Store from "./utils/store";
import Main from "./components/Main";

function App() {
  return (
    <Store.Container>
      <div className="app">
        <div className="top">
          <h1>HydraView</h1>
          <p>
            A web-based viewer for Hydra Linked Data APIs. Based on{" "}
            <a href="https://www.markus-lanthaler.com/hydra/console/?url=http://www.markus-lanthaler.com/hydra/event-api/">
              Hydra Console
            </a>
            . Written in TypeScript and React, using{" "}
            <a href="https://github.com/HydraCG/Heracles.ts">Heracles.ts</a>.
          </p>
        </div>
        <Main></Main>
        <div className="bottom">
          <p> &copy; 2020 Alex Kreidler.</p>
        </div>
      </div>
    </Store.Container>
  );
}

export default App;
