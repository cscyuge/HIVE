/**
 * 棋子状态栏
 */
export default class StatusBar {
  constructor() {
    this.bar_on = false
    this.ballShowed = 0
    this.fillsize = 4
    let endX = GameGlobal.screenWidth
    let endY = GameGlobal.screenHeight
    this.area = {
      startX: endX - GameGlobal.hexagonWidth * GameGlobal.hexagonRate * 3 - 2 * this.fillsize,
      startY: endY - GameGlobal.hexagonHight * GameGlobal.hexagonRate - this.fillsize,
      endX: endX,
      endY: endY,
    }
  }

  render(ctx) {
    if (this.bar_on) {
      if (this.ballShowed != 0) {
        if (GameGlobal.from_bar) {
          let count = GameGlobal.ballManager.ball_count[this.ballShowed]
          this.area.startX = this.area.endX - (GameGlobal.hexagonWidth * GameGlobal.hexagonRate + this.fillsize) * count + this.fillsize
          ctx.fillStyle = 'rgba(0,0,0,0.2)'
          ctx.fillRect(this.area.startX, this.area.startY, this.area.endX - this.area.startX, this.area.endY - this.area.startY)
          for (var i = 0; i < count; i++) {
            ctx.drawImage(GameGlobal.ballManager.images[this.ballShowed],
              this.area.startX + (GameGlobal.hexagonWidth * GameGlobal.hexagonRate + this.fillsize) * (i),
              this.area.startY + this.fillsize / 2,
              GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
              GameGlobal.hexagonHight * GameGlobal.hexagonRate)
          }
        } else if (GameGlobal.from_board) {
          let balls = GameGlobal.board.board[[GameGlobal.preX, GameGlobal.preY]] 
          let count = balls.length
          this.area.startX = this.area.endX - (GameGlobal.hexagonWidth * GameGlobal.hexagonRate + this.fillsize) * count + this.fillsize
          ctx.fillStyle = 'rgba(0,0,0,0.2)'
          ctx.fillRect(this.area.startX, this.area.startY, this.area.endX - this.area.startX, this.area.endY - this.area.startY)

          for (var i = 0; i < count; i++) {
            let ball = balls[i]
            ctx.drawImage(GameGlobal.ballManager.images[ball],
              this.area.startX + (GameGlobal.hexagonWidth * GameGlobal.hexagonRate + this.fillsize) * (i),
              this.area.startY + this.fillsize / 2,
              GameGlobal.hexagonWidth * GameGlobal.hexagonRate,
              GameGlobal.hexagonHight * GameGlobal.hexagonRate)
            
          }
        }
      }
    }
  }
}