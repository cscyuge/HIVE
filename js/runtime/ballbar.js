

/**
 * 棋子栏
 */
export default class BallBar {
  constructor() {
    this.bar = wx.createImage()
    this.bar.src = './images/ant-white.png'
    this.ball_white_srcs = ['./images/bee-white.png',
                            './images/ant-white.png',
                            './images/zhi-white.png',
                            './images/zha-white.png',
                            './images/jia-white.png',
                            './images/wen-white.png',
                            './images/piao-white.png',
                            './images/chao-white.png'
                            ]
    this.ball_black_srcs = ['./images/bee-black.png',
                            './images/ant-black.png',
                            './images/zhi-black.png',
                            './images/zha-black.png',
                            './images/jia-black.png',
                            './images/wen-black.png',
                            './images/piao-black.png',
                            './images/chao-black.png'
                            ]
    this.images_white = new Array()
    this.images_black = new Array()
    for (var i = 0; i < 8; i++){
      let tmp_image_white = wx.createImage()
      tmp_image_white.src = this.ball_white_srcs[i]
      this.images_white.push(tmp_image_white)
      let tmp_image_black = wx.createImage()
      tmp_image_black.src = this.ball_black_srcs[i]
      this.images_black.push(tmp_image_black)
    }
    this.ball_count = [1,3,2,3,2,1,1,1]
    this.show_white = true
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
      ctx.fillStyle = 'rgba(255,255,255,0.5)' 
      ctx.fillRect(this.area.startX, this.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate,
        GameGlobal.hexagonWidth*GameGlobal.hexagonRate*1.2, GameGlobal.hexagonHight*GameGlobal.hexagonRate*8*1.2) 
      
        for (var i=0;i<8;i++){
          if (this.show_white){
            ctx.drawImage(this.images_white[i], this.area.startX, 
              this.area.startY+(i+1)*GameGlobal.hexagonHight*GameGlobal.hexagonRate+(i+1)*this.fillsize, 
              GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
              GameGlobal.hexagonHight*GameGlobal.hexagonRate)
          }else{
            ctx.drawImage(this.images_black[i], this.area.startX, 
              this.area.startY+(i+1)*GameGlobal.hexagonHight*GameGlobal.hexagonRate+(i+1)*this.fillsize, 
              GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
              GameGlobal.hexagonHight*GameGlobal.hexagonRate)
          }
        }
      
    }

  }

  
}