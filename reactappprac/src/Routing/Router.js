// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//={}+[]
// Define the Home component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page of the application.</p>
    </div>
  );
}

function Test(){
  return(
    <div>
      <h1>Wlecome to test</h1>
    </div>
  );
}

// Main App component with routing
function Routeer() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link> {/* Link to the Home page */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Link to the About page */}
             </li>
             <li>
              <Link to="/test">Test</Link>
             </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home/>} /> {/* Route for the Home page */}
       <Route path="/about" element={<About/>} /> {/* Route for the About page */}
       <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routeer;
