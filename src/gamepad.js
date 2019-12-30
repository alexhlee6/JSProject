import CONSTANTS from "./constants";
const BUTTON_POSITIONS = CONSTANTS.BUTTON_POSITIONS;
const KEY_COLORS = CONSTANTS.KEY_COLORS;

export default class Gamepad {

  constructor(options) {
    this.dimensions = options.dimensions;
    this.key = options.key;
  }

  animate(ctx) {
    this.drawGamepad(ctx);
  }

  drawGamepad(ctx) {
    let dirs = ["up", "down", "left", "right"];
    let radius = 40;
    let vel = [10, 10];

    dirs.forEach((dir, i) => {
      this.createButton(ctx, dir, radius, vel);
    });
  }

  createButton (ctx, dir, radius, vel) {
    ctx.beginPath();
    let color;
    let pos;
    switch (dir) {
      case "left":
        [color, pos] = [KEY_COLORS.left, BUTTON_POSITIONS.left];
        break;
      case "up":
        [color, pos] = [KEY_COLORS.up, BUTTON_POSITIONS.up];
        break;
      case "down":
        [color, pos] = [KEY_COLORS.down, BUTTON_POSITIONS.down];
        break;
      case "right":
        [color, pos] = [KEY_COLORS.right, BUTTON_POSITIONS.right];
        break;
    }
    ctx.fillStyle = color;
    ctx.arc(
      pos[0], pos[1], radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}