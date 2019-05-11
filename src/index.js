import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
window.requestAnimationFrame(draw2);

window.onresize = draw2;

function draw2() {

    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth - (window.innerWidth % 20);
        canvas.height = window.innerHeight - (window.innerHeight % 20);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.translate(0.5,0.5)
    window.requestAnimationFrame(draw)
    window.requestAnimationFrame(drawGrid)
}

function draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 20, 20);
}

function drawGrid(){
    ctx.strokeStyle = 'grey';
    var width = canvas.width;
    var horizontalDistance = width / 30;
    var height = canvas.height;
    var verticalDistance = height / 30;
    console.log(width)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // for (var vertical = horizontalDistance; vertical < width; vertical += horizontalDistance){
    //     ctx.beginPath();
    //     ctx.moveTo(vertical, 0);
    //     ctx.lineTo(vertical, height);
    //     ctx.stroke();
    // }
    //
    // for (var horizontal = verticalDistance; horizontal < height; horizontal += verticalDistance){
    //     ctx.beginPath();
    //     ctx.moveTo(0, horizontal);
    //     ctx.lineTo(width ,horizontal);
    //     ctx.stroke();
    // }
}

serviceWorker.unregister();
