//calling the canvas
let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d")

rectx = rect(15, 15, 15, 15);
recty = rect(15, 15, 15, 15);

let player = {
 isAlive: true,
 x: rectx,
 y: recty
};
