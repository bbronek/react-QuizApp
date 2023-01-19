import React from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Main from "./components/UI/Main";
import Footer from "./components/Layout/Footer";
import About from "./components/Layout/About";


function App() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <Header/>
            <Main/>
            <About/>
        <Footer/>
    </div>
  );
}

export default App;
