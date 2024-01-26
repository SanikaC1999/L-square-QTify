import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom';
import Nav from './components/Navbar/Navbar';
import Hero from './components/Herosection/Herosection';

function App() {
  return (
    <>
    <Nav />
    <Hero />
    </>
  );
}

export default App;
// {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
