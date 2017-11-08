//calling the canvas
let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d")

let player = {
 isAlive: true,
 x: 5,
 y: 5,
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8CE8FF"
  ctx.fillRect(player.x, player.y, 20, 20);
  requestAnimationFrame(draw);
};




document.addEventListener('keydown', function(event) {
//left move    
  if(event.keyCode == 37) {
        player.x -= 8;
    }
  
  //right move
    else if(event.keyCode == 39) {       
      player.x += 8;

    }
  
  //up move
    else if(event.keyCode == 38) {
      player.y -= 8;
    }
  
  //down move
  else if(event.keyCode == 40) {
    player.y += 8;
  }});

draw();
