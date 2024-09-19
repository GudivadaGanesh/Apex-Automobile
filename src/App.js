// App.js
import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import WhatWeDo from './WhatWeDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Slideshow />
        </section>
        <section id="what-we-do">
          <WhatWeDo />
        </section>
      </main>
    </div>
  );
}

export default App;
