

const MAX_X = 25
const MAX_Y = 65
const MIN_X = -10
const MIN_Y = -10


/**
 * 游戏背景类
 */
export default class BackGround {
  constructor() {
    this.px = -1
    this.py = -1
  }

  draw(ctx, px, py, x, y) {
    ctx.beginPath();
    //ctx.moveTo(0,0);
    ctx.moveTo(px + hexagonWidth / 4.0 * hexagonRate, py + 1 * hexagonRate);
    ctx.lineTo(px + hexagonWidth * 3 / 4.0 * hexagonRate, py + 1 * hexagonRate);
    ctx.lineTo(px + hexagonWidth * hexagonRate - 1, py + hexagonHight / 2.0 * hexagonRate);
    ctx.lineTo(px + hexagonWidth * 3 / 4.0 * hexagonRate, py + hexagonHight * hexagonRate);
    ctx.lineTo(px + hexagonWidth / 4.0 * hexagonRate, py + hexagonHight * hexagonRate);
    ctx.lineTo(px + 0 / hexagonRate, py + hexagonHight / 2.0 * hexagonRate);
    ctx.lineTo(px + hexagonWidth / 4.0 * hexagonRate, py + 1 * hexagonRate);
    // ctx.fillStyle="#FFFFFF";
    // ctx.fill();
    ctx.strokeStyle = "#89cff1";
    ctx.stroke();
    // ctx.font = "10px 微软雅黑"
    // ctx.strokeText(x.toString()+','+y.toString(), px+GameGlobal.hexagonWidth/2.0*GameGlobal.hexagonRate, py+GameGlobal.hexagonHight/2.0*GameGlobal.hexagonRate)

  }


  render(ctx) {
    ctx.fillStyle = '#fdfcf8'
    ctx.fillRect(0, 0, GameGlobal.screenWidth, GameGlobal.screenHeight)

    for (var x = MIN_X; x < MAX_X; x++) {
      for (var y = MIN_Y; y < MAX_Y; y++) {
        if (((x % 2) + (y % 2)) % 2 == 0) {
          var corner_x = x * 3 * GameGlobal.hexagonWidth / 4.0 * GameGlobal.hexagonRate;
          var corner_y = y * GameGlobal.hexagonHight / 2.0 * GameGlobal.hexagonRate

          this.draw(ctx, GameGlobal.dx + corner_x, GameGlobal.dy + corner_y, x, y)
        }
      }
    }

  }

}