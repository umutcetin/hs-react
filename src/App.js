import React, { Component } from 'react';
import Courses from './components/Courses'
import Header from './components/Header'
import Instructors from './components/Instructors'
import Footer from './components/Footer'
import './App.css';
import { Carousel } from './components/Carousel';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Courses />
        <Instructors />
        <Footer />
      </div>
    );
  }

}

export default App;
