import React from 'react';
import './App.css';
import { DateComp } from './entry/dateTime'

const App = () => {

    return (
        <div className="App">
        <br/>
        <DateComp/>
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
