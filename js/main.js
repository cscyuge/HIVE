import BackGround from './runtime/background'
import DataBus from './databus'
import BallBar from './runtime/ballbar'
import StatusBar from './runtime/statusbar'
import BallManager from './manager/ballManager'
import FreeBall from './runtime/freeball'
import Board from './runtime/board'


const ctx = canvas.getContext('2d')

const databus = new DataBus()
// GameGlobal.image_url = 'cloud://cloud1-8gemgr89529481f1.636c-cloud1-8gemgr89529481f1-1305443614/images/'
GameGlobal.image_url = 'images/'

// Set actual size in memory (scaled to account for extra pixel density).
var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
console.log(scale)
canvas.width = Math.floor( window.innerWidth * scale);
canvas.height = Math.floor( window.innerHeight * scale);
ctx.scale(scale, scale);

GameGlobal.hexagonWidth = 400
GameGlobal.hexagonHight = 346.4101615
GameGlobal.hexagonRate = 0.14
GameGlobal.dx = 0
GameGlobal.dy = 0
GameGlobal.bg_stay = false
GameGlobal.screenWidth = window.innerWidth
GameGlobal.screenHeight = window.innerHeight
GameGlobal.show_white = true
GameGlobal.from_board = false
GameGlobal.from_bar = false
GameGlobal.preX = 0
GameGlobal.preY = 0

GameGlobal.bg = new BackGround()
GameGlobal.ballManager = new BallManager()
GameGlobal.ballbar = new BallBar()
GameGlobal.statusbar = new StatusBar()
GameGlobal.freeball = new FreeBall()
GameGlobal.board = new Board()


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
    GameGlobal.board.render(ctx)
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
