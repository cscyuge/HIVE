

/**
 * 棋子栏
 */
export default class BallBar {
  constructor() {
    this.bar = wx.createImage()
    if (GameGlobal.show_white)
      this.bar.src = GameGlobal.image_url+ 'bar-7-white.png'
    else
      this.bar.src = GameGlobal.image_url+ 'bar-3-black.png'
    // this.bar.onload = function(){
    //     console.log('load bar')
    // }

    this.bar_on = false
    let startX = 15
    let startY = 45
    this.fillsize = 4
    this.area = {
      startX: startX,
      startY: startY,
      endX: startX + GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
      endY: startY + GameGlobal.hexagonHight * GameGlobal.hexagonRate
    }
  }

  render(ctx) {
    ctx.drawImage(this.bar, this.area.startX, this.area.startY,
      GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
      GameGlobal.hexagonHight * GameGlobal.hexagonRate)
    // console.log('render bar')
    if (this.bar_on) {
      ctx.fillStyle = 'rgba(0,0,0,0.2)'
      ctx.fillRect(this.area.startX, this.area.startY + GameGlobal.hexagonHight * GameGlobal.hexagonRate,
        GameGlobal.hexagonWidth * GameGlobal.hexagonRate, GameGlobal.hexagonHight * GameGlobal.hexagonRate * 8 + 8 * this.fillsize)

      for (var i = 1; i <= 8; i++) {
        if (GameGlobal.ballManager.ball_count[i] == 0) {
          continue
        }
        if (GameGlobal.show_white) {
          ctx.drawImage(GameGlobal.ballManager.images[i], this.area.startX,
            this.area.startY + (i) * GameGlobal.hexagonHight * GameGlobal.hexagonRate + (i) * this.fillsize,
            GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
            GameGlobal.hexagonHight * GameGlobal.hexagonRate)
        } else {
          ctx.drawImage(GameGlobal.ballManager.images[-i], this.area.startX,
            this.area.startY + (i) * GameGlobal.hexagonHight * GameGlobal.hexagonRate + (i) * this.fillsize,
            GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
            GameGlobal.hexagonHight * GameGlobal.hexagonRate)
        }
      }

    }

  }


}