// function Arrow(options) {
//   this.pos = options.pos;
//   this.dir = options.dir;
//   this.radius = options.radius;
//   this.vel = options.vel;
//   // this.fromX = options.fromX;
//   // this.fromY = options.fromY
//   // this.toX = options.toX;
//   // this.toY = options.toY;
//   // this.color = options.color;
//   this.game = options.game;
// }

// Arrow.prototype.draw = function draw(ctx) {
//   // ctx.fillStyle = this.color;
//   let dir = this.dir;
//   switch (dir) {
//     case "up":
//       ctx.fillStyle = "#e87b96";
//     case "down":
//       ctx.fillStyle = "#79a5ed"
//     case "left":
//       ctx.fillStyle = "#80ed9b"
//     case "right":
//       ctx.fillStyle = "#ad80ed"
//   }

  
  
  


//   ctx.beginPath();
//   ctx.arc(
//     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
//   );
//   ctx.fill();
// };

// // test options: 
// const arr = new Arrow({
//   pos: [100, 30],
//   vel: [10, 10],
//   radius: 50,
//   color: "#ff6b89",
//   dir: "up"
// });

// module.exports = arr;