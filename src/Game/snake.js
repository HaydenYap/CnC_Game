import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


class Snake extends React.Component{

    constructor (props) {
      super(props)
      console.log(this.props)
      setInterval(() => {
        const snake = this.props.snake;
        console.log("DIRECTION", snake.direction)
        snake.head.x ++;
        var newCell = {
          x: snake.head.x,
          y: snake.head.y
        }

        snake.body.push(newCell)
        snake.tail.x = snake.body[0].x;
        snake.tail.y = snake.body[0].y;
        snake.body.splice(0,1);
        this.props.moveSnake();
      }, 1000);
    }

    render(){
        return(
          <div>
          <KeyboardEventHandler
            handleKeys={['left', 'up', 'right', 'down']}
            onKeyEvent={(key, e) => {
              var direction = this.props.snake.direction
              if (key === 'up' && direction === 'down') {
                return
              }
              if (key === 'down' && direction === 'up') {
                return
              }
              if (key === 'left' && direction === 'right') {
                return
              }
              if (key === 'right' && direction === 'left') {
                return
              }
              else {
                this.props.changeDirection(key)
              }

            }}/>
          </div>
        )
    }
}

export default Snake;
