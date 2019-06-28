import React, { Component } from 'react';
import Courses from './components/Courses'
import Header from './components/Header'
import Instructors from './components/Instructors'
import './App.css';
import { Carousel } from './components/Carousel';

class App extends Component {


  render() {
    return (
      <div className="App">

        <h1>
          app
        </h1>
        <Header />
        <Carousel />
        <Courses />
        <Instructors />

      </div>
    );
  }

}

export default App;
