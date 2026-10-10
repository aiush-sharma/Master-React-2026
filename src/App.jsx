import { useState } from "react";

import "./App.css";

function App() {
  let count = 0;

  function increment() {
    count = count + 1;
    document.querySelector(".count").textContent = count;
  }

  function decrement() {
    if (count > 0) {
      count = count - 1;
      document.querySelector(".count").textContent = count;
    }
  }
  // running our first program
  return (
    <>
      <nav className="p-2 flex align-middle justify-around bg-amber-400">
        <h1>Mr.Ayush</h1>
        <ul className=" flex gap-2">
          <li className="li1">Home</li>
          <li className="li2">About</li>
          <li className="li3">Skills</li>
          <li className="li4">Contact</li>
        </ul>
      </nav>
      <main>
        <div className="p-4   bg-amber-600 landingpg ">
          Day01 of react course
          <h1 className="text-3xl "> Counter App</h1>
          <div className="counter ">
            Score: <p className="count"> 0 </p>
            <button
              className="p-2 bg-green-400 rounded full"
              onClick={increment}
            >
              Increment
            </button>
            <button className="p-2 bg-red-400 rounded full" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
