import Gamepad from "./gamepad";

export default class Level {

  constructor(dimensions) {
    this.dimensions = dimensions;
    this.gamepad = new Gamepad(dimensions);
    
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.drawGamepad(ctx);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "#232324";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  drawGamepad(ctx) {
    this.gamepad.animate(ctx);
  }
}