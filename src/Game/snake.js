import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import _ from 'lodash'

class Snake extends React.Component{

    constructor (props) {
      super(props)
    }

    selfCollide() {
      const snake = this.props.snake;
      return snake.body.some(cord => _.isEqual(cord, snake.head)) || _.isEqual(snake.head, snake.tail)
    }

    run() {
      this.props.snake.running = true;
      var running = setInterval(() => {
        const snake = this.props.snake;
        var newY = snake.head.y;
        var newX = snake.head.x;

        switch(snake.newDirection){
          case 'up':
            newY-= 1;
            break;
          case 'down':
            newY += 1;
            break;
          case 'left':
            newX -= 1;
            break;
          case 'right':
            newX += 1;
            break;
          default:
            break;
        }

        if (newX === snake.headLast.x && newY === snake.headLast.y){
          switch(snake.direction){
            case 'up':
            newY = snake.head.y - 1;
            break;
            case 'down':
            newY = snake.head.y + 1;
              break;
            case 'left':
            newX = snake.head.x - 1;
              break;
            case 'right':
              newX = snake.head.x + 1;
              break;
            default:
            break;
          }
        } else {
          snake.direction = snake.newDirection;
        }

        if(this.props.snake.running === false){
          clearInterval(running)
        }
        
        snake.head.x = newX;
        snake.head.y = newY;

        var newCell = {
          x: snake.head.x,
          y: snake.head.y
        }

        if (snake.head.x > 29 || snake.head.y > 29 || snake.head.x < 0 || snake.head.y < 0 || this.selfCollide()) {
          this.props.endGame();
          snake.running = false
          snake.alive = false
          clearInterval(running);
        }


        snake.body.push(newCell)
        snake.tail.x = snake.body[0].x;
        snake.tail.y = snake.body[0].y;
        snake.body.splice(0,1);
        this.props.moveSnake();
      }, 200);
    }

    render(){
        return(
          <KeyboardEventHandler
            handleKeys={['left', 'up', 'right', 'down']}
            onKeyEvent={(key, e) => {
              var direction = this.props.snake.direction
              if (key === 'up' && (direction === 'down' || direction === 'up')) {
                return
              }
              else if (key === 'down' && (direction === 'up'|| direction === 'down')) {
                return
              }
              else if (key === 'left' && (direction === 'right'|| direction === 'left')) {
                return
              }
              else if (key === 'right' && (direction === 'left'|| direction === 'right')) {
                return
              }
              else {
                if (!this.props.snake.running && this.props.snake.alive){
                  this.run(this.props)
                }
                this.props.changeDirection(key)
              }
            }}/>
        )
    }
}

export default Snake;
