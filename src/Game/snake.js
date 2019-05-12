import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


class Snake extends React.Component{

    constructor (props) {
      super(props)
      console.log(this.props)  
    }

    run() {
      var running = setInterval(() => {
        const snake = this.props.snake;

        switch(snake.direction){
          case 'up':
            snake.head.y--;
            break;
          case 'down':
            snake.head.y++;
            break;
          case 'left':
            snake.head.x--;
            break;
          case 'right':
            snake.head.x++;
            break;
          default:
            break;
        }

        if(this.props.snake.running === false){
          clearInterval(running)
        }
        
        if (snake.head.x > 29 || snake.head.y > 29 || snake.head.x < 0 || snake.head.y < 0){
          this.props.endGame();
          snake.running = false
          snake.alive = false
          clearInterval(running);
        }

        var newCell = {
          x: snake.head.x,
          y: snake.head.y
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
          <div>
          <KeyboardEventHandler
            handleKeys={['left', 'up', 'right', 'down','r']}
            onKeyEvent={(key, e) => {
              var direction = this.props.snake.direction
              if(key === 'r'){
                this.props.resetBoard()
              }
              else if (key === 'up' && (direction === 'down' || direction === 'up')) {
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
                  this.props.snake.running = true;
                }
                this.props.changeDirection(key)
              }

            }}/>
          </div>
        )
    }
}

export default Snake;
