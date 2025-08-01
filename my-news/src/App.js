import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar /> 
          
          <Routes>  
            <Route exact path="/" element={<News  key="general" pageSize={6} country="us" category="General" />} />
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/business" element={<News  key="business" pageSize={6} country="us" category="business" />} />
            <Route exact path="/health" element={<News  key="health" pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News  key="science" pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports"  pageSize={6} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology"  pageSize={6} country="us" category="technology" />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}



