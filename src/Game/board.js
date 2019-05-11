import React from 'react';
import './game.scss';

function drawGrid(canvasContext, canvas){
  canvasContext.strokeStyle = 'grey';
  var width = canvas.width;
  var horizontalDistance = width / 30;
  var height = canvas.height;
  var verticalDistance = height / 30;
  console.log(width)
  canvasContext.fillRect(0, 0, canvas.width, canvas.height)
  for (var vertical = horizontalDistance; vertical < width; vertical += horizontalDistance){
    canvasContext.beginPath();
    canvasContext.moveTo(vertical, 0);
    canvasContext.lineTo(vertical, height);
    canvasContext.stroke();
  }
  
  for (var horizontal = verticalDistance; horizontal < height; horizontal += verticalDistance){
    canvasContext.beginPath();
    canvasContext.moveTo(0, horizontal);
      canvasContext.lineTo(width ,horizontal);
      canvasContext.stroke();
  }
}

class Board extends React.Component{
    componentDidMount () {
      const canvas = this.refs.gameBoard
      const ctx = canvas.getContext('2d');
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      drawGrid(ctx, canvas);

    }

    render(){
        return(
            <div>
              <canvas ref="gameBoard" width={780} height={780} />
            </div>
        )
    }
}

export default Board;
