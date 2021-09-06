import "./App.scss";
import "bootstrap";

import React, { Suspense } from "react";

import { About, Experience, FloatingIcons, Footer, Header, Skills } from "./components";

const Projects = React.lazy(async () => import("./components/Projects"));

function App() {
  return (
    <div className="App">
      <FloatingIcons />
      <Header />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Skills />
        <Experience />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
