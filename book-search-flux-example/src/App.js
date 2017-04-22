import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './components/InputComponent';
import ResultList from './components/ResultList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Первое приложение для поиска книг на сайте <code>googleapis.com</code>
        </p>
        <InputComponent />
        <ResultList />
        <div>
          <p>
            by Alex Kulta
          </p>
        </div>
      </div>
    );
  }
}

export default App;
