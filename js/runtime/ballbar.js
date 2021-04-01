

/**
 * 棋子栏
 */
export default class BallBar {
  constructor() {
    this.bar = wx.createImage()
    this.bar.src = './images/ant-white.png'
    this.bar_on = false
    let startX = 15
    let startY = 15
    this.fillsize = 4
    this.area = {
      startX: startX,
      startY: startY,
      endX: startX+GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
      endY: startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate
    }
  }

  render(ctx){
    ctx.drawImage(this.bar, this.area.startX, this.area.startY,
                  GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
                  GameGlobal.hexagonHight*GameGlobal.hexagonRate)
    // console.log('render bar')
    if (this.bar_on){
      ctx.fillStyle = 'rgba(0,0,0,0.2)' 
      ctx.fillRect(this.area.startX, this.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate,
        GameGlobal.hexagonWidth*GameGlobal.hexagonRate, GameGlobal.hexagonHight*GameGlobal.hexagonRate*8+8*this.fillsize) 
      
        for (var i=0;i<8;i++){
          if (GameGlobal.show_white){
            ctx.drawImage(GameGlobal.ballManager.images_white[i], this.area.startX, 
              this.area.startY+(i+1)*GameGlobal.hexagonHight*GameGlobal.hexagonRate+(i+1)*this.fillsize, 
              GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
              GameGlobal.hexagonHight*GameGlobal.hexagonRate)
          }else{
            ctx.drawImage(GameGlobal.ballManager.images_black[i], this.area.startX, 
              this.area.startY+(i+1)*GameGlobal.hexagonHight*GameGlobal.hexagonRate+(i+1)*this.fillsize, 
              GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
              GameGlobal.hexagonHight*GameGlobal.hexagonRate)
          }
        }
      
    }

  }

  
}