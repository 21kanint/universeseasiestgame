//calling the canvas
let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d")

let playerspd = 1;

let kbd = {
  u: false,
  d: false,
  l: false,
  r: false
};

let enemies = {
  doesReset: true
};

let player = {
 isAlive: true,
 x: 5,
 y: 5,
  move: function(direction) {
    if(direction === "u") {
      player.y -= playerspd;
    }

    else if(direction === "d") {
      player.y += playerspd;
    }

    else if(direction === "l") {
      player.x -= playerspd
    }

    else if(direction === "r") {
      player.x += playerspd
    }
  },
  
  draw: function() {
  ctx.fillStyle = "#8CE8FF";
  ctx.fillRect(this.x, this.y, 20, 20);
 }
};

function init() {
  document.addEventListener('keydown', function(e) {
//left move    
  if(e.keyCode === 37) {
        kbd.l = true;
        e.preventDefault();
    }
  
  //right move
    else if(e.keyCode === 39) {       
      kbd.r = true;
      e.preventDefault();
    }
  
  //up move
    else if(e.keyCode === 38) {
      kbd.u = true;
      e.preventDefault();
    }
  
  //down move
  else if(e.keyCode === 40) {
    kbd.d = true;
    e.preventDefault();
  }
});

  document.addEventListener('keyup', function(e) {
//left move    
  if(e.keyCode === 37) {
        kbd.l = false;
        e.preventDefault();
    }
  
  //right move
    else if(e.keyCode === 39) {       
      kbd.r = false;
      e.preventDefault();
    }
  
  //up move
    else if(e.keyCode === 38) {
      kbd.u = false;
      e.preventDefault();
    }

    //down move
    else if(e.keyCode === 40) {
      kbd.d = false;
      e.preventDefault();
    }
  });

  
  update();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(kbd.u) {
    player.move("u");
  } 
  if(kbd.d)  {
    player.move("d");
  } 
  if(kbd.l) {
    player.move("l");
  }
  if(kbd.r) {
    player.move("r");
  }
  
  player.draw();
  requestAnimationFrame(update);
}

init();

let levelOne = [
    ["   xxxxxxxxxxxxxx    ",
     "   x            x        ",
     "xxxx            xxxx   ", 
     "x###            ~~~x  ", 
     "x###            ~~~x ", 
     "xxxx            xxxx      ",
     "   x            x   ",
     "   xxxxxxxxxxxxxx               "]
  ];
