import React from 'react';
import './game.scss';

class Board extends React.Component{
    componentDidMount () {
      const canvas = this.refs.gameBoard
      const ctx = canvas.getContext('2d');
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    render(){
        return(
            <div>
              <canvas ref="gameBoard" width={640} height={640} />
            </div>
        )
    }
}

export default Board;
