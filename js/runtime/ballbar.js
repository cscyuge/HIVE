

/**
 * 棋子栏
 */
export default class BallBar {
  constructor(ctx) {
    this.bar = wx.createImage()
    this.bar.src = './images/ant-white.png'
    let startX = 15
    let startY = 15
    this.area = {
      startX: startX,
      startY: startY,
      endX: startX+GameGlobal.hexagonWidth*GameGlobal.hexagonRate,
      endY: startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate
    }
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
    
    this.render(ctx)
  }

  render(ctx){
    ctx.drawImage(this.bar, this.area.startX, this.area.startY, this.area.endX-this.area.startX, this.area.endY-this.area.startY)
    // console.log('render bar')
  }

  
  touchEventHandler(e) {
    e.preventDefault()

    const x = e.touches[0].clientX
    const y = e.touches[0].clientY

    if (x >= this.area.startX
        && x <= this.area.endX
        && y >= this.area.startY
        && y <= this.area.endY) {
          console.log('touch ball bar')
        }
  }

}