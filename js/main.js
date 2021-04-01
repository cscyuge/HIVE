import BackGround from './runtime/background'
import DataBus from './databus'
import BallBar from './runtime/ballbar'
import StatusBar from './runtime/statusbar'
import BallManager from './manager/ballManager'
import FreeBall from './runtime/freeball'
const ctx = canvas.getContext('2d')
const databus = new DataBus()

GameGlobal.hexagonWidth = 400
GameGlobal.hexagonHight = 346.410
GameGlobal.hexagonRate = 0.14
GameGlobal.dx = -1
GameGlobal.dy = -1
GameGlobal.bg_stay = false
GameGlobal.screenWidth = window.innerWidth
GameGlobal.screenHeight = window.innerHeight
GameGlobal.show_white = true


GameGlobal.bg = new BackGround()
GameGlobal.ballManager = new BallManager()
GameGlobal.ballbar = new BallBar()
GameGlobal.statusbar = new StatusBar()
GameGlobal.freeball = new FreeBall()


/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.aniId = 0
    var touchmoveHandler = require('./handler/touchMoveHandler')
    this.touchmoveHandler = touchmoveHandler.bind(this)
    canvas.addEventListener('touchmove', this.touchmoveHandler)
    
    var touchendHandler = require('./handler/touchEndHandler')
    this.touchendHandler = touchendHandler.bind(this)
    canvas.addEventListener('touchend', this.touchendHandler)

    var touchstartHandler = require('./handler/touchStartHandler')
    this.touchstartHandler = touchstartHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchstartHandler)
    this.start()
  }

  start() {
    databus.reset()
      
    this.bindLoop = this.loop.bind(this)
    
    window.cancelAnimationFrame(this.aniId)

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    GameGlobal.bg.render(ctx)
    GameGlobal.ballbar.render(ctx)
    GameGlobal.statusbar.render(ctx)
    GameGlobal.freeball.render(ctx)
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
