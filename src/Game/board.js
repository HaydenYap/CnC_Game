import React from 'react';
import './board.scss';
import Snake from './snake'

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
          direction: 'right',
          body: [{x:0,y:0},{x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}],
          length: 5
        }
      }
    }

    moveSnake(){
      const {canvas, ctx, snake} = this.state
      ctx.fillStyle = 'black';
      ctx.fillRect(snake.tail.x *  cellSize, snake.tail.y * cellSize, cellSize, cellSize);
      ctx.fillStyle = 'green';
      ctx.fillRect(snake.head.x *  cellSize, snake.head.y * cellSize, cellSize, cellSize);
    }

    drawSnake(){
      const {canvas, ctx, snake} = this.state
      ctx.fillStyle = 'green';
      snake.body.map(cord => {
        ctx.fillRect(cord.x *  cellSize, cord.y * cellSize, cellSize, cellSize);
      })
    }

    drawPoint(x, y) {
      const {canvas, ctx} = this.state
      ctx.fillStyle = 'green';
      ctx.fillRect(cellSize * x, cellSize * y, 26, 26);
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

    changeDirection (direction) {
      const {snake} = this.state
      this.state.snake.direction = direction
      console.log("board", direction)
    }

    render(){
        return(
            <div>
              <canvas ref="gameBoard" width={780} height={780} className='p-5'/>
              <Snake snake={this.state.snake} changeDirection={this.changeDirection.bind(this)} moveSnake={this.moveSnake.bind(this)} />
            </div>
        )
    }
}

export default Board;
