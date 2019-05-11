import React from 'react';
import './game.scss';

class Game extends React.Component{
    render(){

        return(
            <div id='canvasContainer' className="container-fluid px-5 py-2">
                <canvas id="gameCanvas">
                    
                </canvas>
            </div>
        )
    }
}

export default Game;