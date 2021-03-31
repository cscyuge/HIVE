import BackGround from './runtime/background'
import DataBus from './databus'
import BallBar from './runtime/ballbar'
const ctx = canvas.getContext('2d')
const databus = new DataBus()


/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.aniId = 0
    this.start()
  }

  start() {
    databus.reset()
    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )
    this.bg = new BackGround(ctx)
    this.ballbar = new BallBar(ctx)
      
    this.bindLoop = this.loop.bind(this)
    
    window.cancelAnimationFrame(this.aniId)

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)
    this.ballbar.render(ctx)
  }

  loop() {
    databus.frame++

    this.render()

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}




 // wx.onTouchStart(function(e){
    //   var touch = e.changedTouches[0]
    //   var clientX = touch.clientX
    //   var clientY = touch.clientY
    //   var w = 3*hexagonWidth/4.0 * hexagonRate
    //   var h = hexagonHight/2.0 * hexagonRate
    //   var kx = parseInt(clientX/w)
    //   var ky = parseInt(clientY/h)
    //   var x = clientX - kx*w
    //   var y = clientY - ky*h
    //   var cornerX = w*kx
    //   var cornerY = h*ky
    //   if ((kx%2+ky%2)%2 == 0){
    //     var tmpY = -1.7320508*(x-1)
    //     if (tmpY>y){
    //       cornerX -= w
    //       cornerY -= h
    //     }
    //   }else{
    //     var tmpY = 1.7320508*x
    //     if (tmpY<y){
    //       cornerX -= w
    //     }else{
    //       cornerY -= h
    //     }
    //   }      
    //   cornerX += w/4.0+1.6
    //   // console.log(cornerX,cornerY)
    //   ctx.drawImage(images_white[0],cornerX,cornerY,hexagonWidth*hexagonRate,hexagonHight*hexagonRate)
    // })
