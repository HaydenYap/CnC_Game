import React from 'react';
import './board.scss';
import Snake from './snake'
import Panel from './panel/panel'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import _ from 'lodash'

var boardSize = 720
const cellSize = boardSize / 30;

const container = {
  height: boardSize + 'px'
}

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
          newDirection: '',
          headLast: {
            x: 15,
            y: 15
          },
          body: [{x:15,y:15}],
          running: false,
          alive: true
        },
        score: {
          current: 0,
          high: 0
        },
        food: {}
      }
    }

    moveSnake(){
      const {ctx, snake, food} = this.state
      ctx.fillStyle = 'black';
      ctx.fillRect(snake.tail.x *  cellSize, snake.tail.y * cellSize, cellSize, cellSize);
      ctx.fillStyle = 'green';
      ctx.fillRect(snake.head.x *  cellSize, snake.head.y * cellSize, cellSize, cellSize);

      // We ate food
      if (snake.head.x === food.x && snake.head.y === food.y) {
        this.addBody();
        this.drawFood();
      }

      if (snake.alive === false && snake.running === false){
        this.endGame();
      }
    }

    addBody() {
      const {snake, score} = this.state
      score.current += 1
      if (score.current > score.high) {
        score.high = score.current;
      }
      switch(snake.direction){
        case 'up':
          var newTail = {x: snake.tail.x, y: snake.tail.y - 1}
          snake.body.push(newTail)
          snake.tail = newTail
          break;
        case 'down':
          var newTail = {x: snake.tail.x, y: snake.tail.y + 1}
          snake.body.push(newTail)
          snake.tail = newTail
          break;
        case 'left':
          var newTail = {x: snake.tail.x - 1, y: snake.tail.y}
          snake.body.push(newTail)
          snake.tail = newTail
          break;
        case 'right':
          var newTail = {x: snake.tail.x + 1, y: snake.tail.y}
          snake.body.push(newTail)
          snake.tail = newTail
          break;
        default:
          break;
      }
    }

    drawSnake(){
      const {ctx, snake} = this.state
      ctx.fillStyle = 'green';
      snake.body.map(cord => {
        ctx.fillRect(cord.x *  cellSize, cord.y * cellSize, cellSize, cellSize);
      })
    }

    drawRect(x, y, l, h) {
      const {ctx} = this.state
      ctx.fillStyle = 'white';
      ctx.fillRect(x * cellSize, y * cellSize, l * cellSize, h * cellSize);
    }

    drawGrid() {
      const {ctx} = this.state

      ctx.strokeStyle = 'grey';
      ctx.fillRect(0, 0, boardSize, boardSize)
      for (var vertical = cellSize; vertical < boardSize; vertical += cellSize){
        ctx.beginPath();
        ctx.moveTo(vertical, 0);
        ctx.lineTo(vertical, boardSize);
        ctx.stroke();
      }

      for (var horizontal = cellSize; horizontal < boardSize; horizontal += cellSize){
        ctx.beginPath();
        ctx.moveTo(0, horizontal);
        ctx.lineTo(boardSize ,horizontal);
        ctx.stroke();
      }
    }

    drawBackground() {
      const {ctx} = this.state
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, boardSize, boardSize)
    }

    endGame() {
      let newState = Object.assign({}, this.state);
      newState.snake.running = false;
      newState.snake.alive = false;
      this.setState(newState);

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
      const newScore = {current: 0, high: this.state.score.high}
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
          newDirection: '',
          headLast: {
            x: 15,
            y: 15
          },
          body: [{x:15,y:15}],
          running: false,
          alive: true
        },
      score: newScore,
      food: {} 
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
        //this.drawGrid();
        this.drawSnake();
        this.drawFood();
      })
    }

    changeDirection (direction) {
      let newState = Object.assign({}, this.state);
      newState.snake.newDirection = direction;
      this.setState(newState);
      console.log("board", direction)
    }

    drawFood () {
      const {ctx, snake, food} = this.state;
      ctx.fillStyle = 'red';
      var position = {
        x: 15,
        y: 15
      }
      while (snake.body.some(cord => _.isEqual(cord, position))) {
        position.x = Math.floor(Math.random() * 29);
        position.y = Math.floor(Math.random() * 29);
      }
      this.setState({
        food: position
      })
      ctx.fillRect(position.x *  cellSize, position.y * cellSize, cellSize, cellSize);
    }

    componentDidMount () {
      this.drawBoard();
    }

    render(){
        return(
            <div id='gameContainer' className='container-fluid '>
              <div className='viewContainer p-0 row' style={container}>
                <canvas id='gameBoard' ref="gameBoard" width={boardSize} height={boardSize} />
                <Snake snake={this.state.snake}
                  changeDirection={this.changeDirection.bind(this)}
                  moveSnake={this.moveSnake.bind(this)}
                  endGame={this.endGame.bind(this)}
                  drawBoard={this.drawBoard.bind(this)}
                />
                <Panel score={this.state.score}
                  resetBoard={this.resetBoard.bind(this)}
                  endGame={this.endGame.bind(this)}
                />
              </div>
              <KeyboardEventHandler
              handleKeys={['r', 'esc']}
              onKeyEvent={(key, e) => {
                if(key === 'r'){
                  this.resetBoard();
                } else if (key ==='esc'){
                  this.endGame();
                }
              }}/>
            </div>
        )
    }
}

export default Board;
