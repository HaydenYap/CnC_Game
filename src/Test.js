const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

window.requestAnimationFrame(draw2);
window.onresize = draw2;

class Draw extends React.Component {
  draw2() {

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

  draw(){
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawGrid(){
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

  render(){
      return(
          <div id='canvasContainer' className="container-fluid p-5">
              <canvas id="gameCanvas"></canvas>
          </div>
          this.draw();
      )
  }
}
export default Draw;
