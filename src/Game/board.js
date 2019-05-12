import React from 'react';
import './board.scss';


// function draw(){
//     ctx.fillStyle = 'green';
//     ctx.fillRect(0, 0, 20, 20);
// }

class Board extends React.Component{
    constructor (props) {
      super(props)
      this.state = {}
    }

    drawGrid() {
      const {canvas, ctx} = this.state
      
      ctx.strokeStyle = 'grey';
      var width = canvas.width;
      var horizontalDistance = width / 30;
      var height = canvas.height;
      var verticalDistance = height / 30;
      console.log(width)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for (var vertical = horizontalDistance; vertical < width; vertical += horizontalDistance){
        ctx.beginPath();
        ctx.moveTo(vertical, 0);
        ctx.lineTo(vertical, height);
        ctx.stroke();
      }

      for (var horizontal = verticalDistance; horizontal < height; horizontal += verticalDistance){
        ctx.beginPath();
        ctx.moveTo(0, horizontal);
          ctx.lineTo(width ,horizontal);
          ctx.stroke();
      }
    }

    drawBackground () {
      const {canvas, ctx} = this.state
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    componentDidMount () {
      const canvas = this.refs.gameBoard
      this.state.canvas = canvas
      this.state.ctx = canvas.getContext('2d')
      this.drawBackground();
      this.drawGrid();
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
