import React from 'react';
import './game.scss';

class Game extends React.Component{
    render(){
        return(
            <div id='canvasContainer' className="container-fluid p-5">
                <canvas id="gameCanvas">

                </canvas>
            </div>
        )
    }
}

export default Game;