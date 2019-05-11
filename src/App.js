import React from 'react';
import Board from './Game/board';
import Nav from './Nav/nav';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Board />
      </div>
    );
  }

}

export default App;
