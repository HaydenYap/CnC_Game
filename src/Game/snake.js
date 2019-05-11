import React from 'react';

class Snake extends React.Component{
    render(){
        return(
            <div id='canvasContainer' className="container-fluid p-5">
                <canvas id="gameCanvas">
                  <KeyboardEventHandler
                    handleKeys={['a']}
                    onKeyEvent={(key, e) => console.log("clicked", key)} />
                </canvas>
            </div>
        )
    }
}

export default Snake;
