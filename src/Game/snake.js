import React from 'react';

class Snake extends React.Component{

    constructor (props) {
      super(props)
      console.log(this.props)
      setInterval(() => {
        const snake = this.props.snake;

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
          HI
          </div>
        )
    }
}

export default Snake;
