/**
 * 移动的棋子
 */
export default class FreeBall {
  constructor() {
      this.ball_show = false
      this.image_src = ''
      this.image_x = 0
      this.image_y = 0
      this.ball_id = -1
  }

  reset(ball_id){
    this.ball_id = ball_id
  }

  render(ctx){
    if (this.ball_show){
      // console.log(this.ball_id)
      if (GameGlobal.show_white){
        ctx.drawImage(GameGlobal.ballManager.images_white[this.ball_id], this.image_x, this.image_y, 
                      GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
                      GameGlobal.hexagonHight*GameGlobal.hexagonRate)
      }else{
        ctx.drawImage(GameGlobal.ballManager.images_black[this.ball_id], this.image_x, this.image_y, 
          GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
          GameGlobal.hexagonHight*GameGlobal.hexagonRate)
      }
        
    }

  }
}