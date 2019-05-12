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
            x: 15,
            y: 15
          },
          tail: {
            x: 15,
            y: 15
          },
          direction: '',
          body: [{x:15,y:15}],
          running: false,
          alive: true
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
        console.log(cord.x,cord.y)
      })
      
    }

    drawRect(x, y, l, h) {
      const {canvas, ctx} = this.state
      ctx.fillStyle = 'white';
      ctx.fillRect(x * cellSize, y * cellSize, l * cellSize, h * cellSize);
    }

    drawGrid() {
      const {canvas, ctx} = this.state

      ctx.strokeStyle = 'grey';
      var width = canvas.width;
      var height = canvas.height;
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

    drawBackground() {
      const {canvas, ctx} = this.state
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    endGame() {
      //Horizonal Lines
      this.drawRect(5,9,4,1);
      this.drawRect(5,13,4,1);
      this.drawRect(11,9,2,1);
      this.drawRect(11,12,2,1);
      this.drawRect(22,9,3,1);
      this.drawRect(22,11,3,1);
      this.drawRect(22,13,3,1);

      this.drawRect(6,16,2,1);
      this.drawRect(6,20,2,1);
      this.drawRect(17,16,3,1);
      this.drawRect(17,18,3,1);
      this.drawRect(17,20,3,1);
      this.drawRect(22,16,2,1);
      this.drawRect(22,18,3,1);

      //Vertical Lines
      this.drawRect(5,10,1,3);
      this.drawRect(10,10,1,4);
      this.drawRect(13,10,1,4);
      this.drawRect(15,9,1,5);
      this.drawRect(19,9,1,5);
      this.drawRect(21,9,1,5);
      this.drawRect(5,17,1,3);
      this.drawRect(8,17,1,3);

      this.drawRect(10,16,1,3);
      this.drawRect(14,16,1,3);
      this.drawRect(16,16,1,5);
      this.drawRect(21,16,1,5);

      //Dots
      this.drawRect(7,11,1,1);
      this.drawRect(8,12,1,1);
      this.drawRect(16,10,1,1);
      this.drawRect(17,11,1,1);
      this.drawRect(18,10,1,1);

      this.drawRect(11,19,1,1);
      this.drawRect(12,20,1,1);
      this.drawRect(13,19,1,1);
      this.drawRect(24,17,1,1);
      this.drawRect(23,19,1,1);
      this.drawRect(24,20,1,1);
    }

    resetBoard(){
      this.setState({
        snake: {
          head: {
            x: 15,
            y: 15
          },
          tail: {
            x: 15,
            y: 15
          },
          direction: '',
          body: [{x:15,y:15}],
          running: false,
          alive: true
        }
      })
      this.drawBoard();
    }

    drawBoard(){
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

    componentDidMount () {
      this.drawBoard();
    }

    changeDirection (direction) {
      const {snake} = this.state
      this.state.snake.direction = direction
      console.log("board", direction)
    }

    render(){
        return(
            <div>
              <canvas id='board' ref="gameBoard" width={780} height={780} className='p-5'/>
              <Snake snake={this.state.snake} changeDirection={this.changeDirection.bind(this)} moveSnake={this.moveSnake.bind(this)} endGame={this.endGame.bind(this)} resetBoard={this.resetBoard.bind(this)} 
              drawBoard={this.drawBoard.bind(this)}/>
            </div>
        )
    }
}

export default Board;
