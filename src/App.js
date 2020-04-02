import React from 'react';
import './App.css';

const App = () => {

    return (
        <div className="App">
        <br/>
        <div id="dateStuff" align="bottom">
            <h1 id="date" align="center" className="mainPage">DATE</h1>
            <h2 id="time" align="center" className="mainPage">TIME</h2>
            <h3 id="state" align="center" className="mainPage">GOOD</h3>
        </div>
        <br/><br/><br/><br/>
        <div className="searchDiv">
            <input type="search" id="searchBar" align="center" placeholder="Search..." onkeypress="performSearch(event)" />
        </div>
        <br/><br/><br/><br/><br/>
        <div id="quoteStuff" align="center">
            <h3 id="quote" align="center" className="mainPage">Hello World</h3>
            <h4 id="author" align="center" className="mainPage">Pretty Epic</h4>
        </div>
        <br/><br/><br/><br/><br/>
        <center>
            <a href="https://meh430.github.io/" className="myButton" align="center">about</a>
        </center>             
        </div>
    );
}

export default App;
