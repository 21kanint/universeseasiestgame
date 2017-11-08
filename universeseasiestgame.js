//calling the canvas
let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d")
let kbd = {
  u: false,
};

let enemies = {
  doesReset: true
};

let player = {
 isAlive: true,
 x: 5,
 y: 5,
 draw : function() {
  ctx.fillStyle = "#8CE8FF";
  ctx.fillRect(this.x, this.y, 20, 20);
 }
};


function init() {
  document.addEventListener('keydown', function(e) {
//left move    
  if(e.keyCode === 37) {
        player.x -= 8;
        e.preventDefault();
    }
  
  //right move
    else if(e.keyCode === 39) {       
      player.x += 8;
      e.preventDefault();
    }
  
  //up move
    else if(e.keyCode === 38) {
      player.y -= 8;
      e.preventDefault();
    }
  
  //down move
  else if(e.keyCode === 40) {
    player.y += 8;
    e.preventDefault();
  }
});

  
  update();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  player.draw();
  
  
  requestAnimationFrame(update);
}

  





init();
