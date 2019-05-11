import React from 'react';
import Game from './Game/game';
import Nav from './Nav/nav';
//import Code from './Code/code';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Game />
      </div>
    );
  }

}

export default App;
