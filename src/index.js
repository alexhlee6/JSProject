import Game from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  new Game(canvas);
})


// document.addEventListener("DOMContentLoaded", function () {
//   const canvasEl = document.getElementById("game-canvas");
//   canvasEl.width = "375";
//   canvasEl.height = "600";

//   const ctx = canvasEl.getContext("2d");
//   ctx.fillStyle = "#d1d1d1";
//   ctx.fillRect(0, 0, "375", "600");

  
//   // let arr = require("./arrow.js");
//   // arr.draw(ctx);
//   const game = new Game();
//   new GameView(game, ctx).start();
// });