import React from 'react';
import './board.scss';

const cellSize = 26

class Board extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        snake: {
          head: {
            x: 4, 
            y: 0
          },
          tail: {
            x: 0,
            y: 0
          },
          direction: '',
          body: [{x:1,y:0}, {x:2,y:0}, {x:3,y:0}] 
        }  
      }
    }

    drawSnake(){
      const {canvas, ctx, snake} = this.state
      ctx.fillStyle = 'green';

      ctx.fillRect(snake.head.x *  cellSize, snake.head.y * cellSize, cellSize, cellSize);
      snake.body.map(cord => {
        ctx.fillRect(cord.x *  cellSize, cord.y * cellSize, cellSize, cellSize);
      })
      ctx.fillRect(snake.tail.x *  cellSize, snake.tail.y * cellSize, cellSize, cellSize);
    }

    drawGrid() {
      const {canvas, ctx} = this.state

      ctx.strokeStyle = 'grey';
      var width = canvas.width;
      var height = canvas.height;
      console.log(width)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for (var vertical = cellSize; vertical < width; vertical += cellSize){
        ctx.beginPath();
        ctx.moveTo(vertical, 0);
        ctx.lineTo(vertical, height);
        ctx.stroke();
      }

      for (var horizontal = cellSize; horizontal < height; horizontal += cellSize){
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
      this.setState({
        canvas: canvas,
        ctx: canvas.getContext('2d')
      }, function () {
        this.drawBackground();
        this.drawGrid();

        this.drawSnake();

      })
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
