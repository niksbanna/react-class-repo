import React, { Profiler, Suspense, lazy, useEffect } from 'react';
import "./App.scss"
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Weather from './components/Weather/Weather';
// const Weather = lazy(() => import("./components/Weather/Weather"))







export default function App() {

  const callback = (id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(`phase: ${phase} actualDuration: ${actualDuration} ${baseDuration} ${startTime} ${commitTime} ${interactions} ${id}`)
  }

  console.log("hello");
  return (
    <>

      <div className="nav">
        <div className="nav-title">Navbar</div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/weather">Weather</Link>
          </li>

        </ul>
      </div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={
          // <Suspense fallback={<div>Loading... Please Wait</div>}>
          <Profiler id='weather' onRender={callback} >
            <Weather />
          </Profiler>
          // </Suspense>
        } />
      </Routes>

    </>

  )
}

