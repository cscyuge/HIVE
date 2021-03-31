
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const MAX_X = 25
const MAX_Y = 40
const MIN_X = -10
const MIN_Y = -10


/**
 * 游戏背景类
 */
export default class BackGround {
  constructor(ctx) {
    this.touchoverHandler = this.touchOverHandler.bind(this)
    canvas.addEventListener('touchmove', this.touchoverHandler)
    this.touchendHandler = this.touchEndHandler.bind(this)
    canvas.addEventListener('touchend', this.touchendHandler)
    
    this.px = -1
    this.py = -1
    this.render(ctx)
  }

  draw(ctx,px,py){
    ctx.beginPath();
    //ctx.moveTo(0,0);
    ctx.moveTo(px+hexagonWidth/4.0*hexagonRate, py+1*hexagonRate);
    ctx.lineTo(px+hexagonWidth*3/4.0*hexagonRate, py+1*hexagonRate);
    ctx.lineTo(px+hexagonWidth*hexagonRate-1, py+hexagonHight/2.0*hexagonRate);
    ctx.lineTo(px+hexagonWidth*3/4.0*hexagonRate, py+hexagonHight*hexagonRate);
    ctx.lineTo(px+hexagonWidth/4.0*hexagonRate, py+hexagonHight*hexagonRate);
    ctx.lineTo(px+0/hexagonRate, py+hexagonHight/2.0*hexagonRate);
    ctx.lineTo(px+hexagonWidth/4.0*hexagonRate, py+1*hexagonRate);
    // ctx.fillStyle="#FFFFFF";
    // ctx.fill();
    ctx.strokeStyle="#89cff1";
    ctx.stroke();
  }
  

  render(ctx) {
    ctx.fillStyle = '#fdfcf8' 
    ctx.fillRect(0, 0, screenWidth, screenHeight) 
    
    for (var x=MIN_X;x<MAX_X;x++){
      for (var y=MIN_Y;y<MAX_Y;y++){
        if (((x%2)+(y%2))%2==0){
          var center_x = 3*x*GameGlobal.hexagonWidth/4.0*GameGlobal.hexagonRate;
          var center_y = y*GameGlobal.hexagonHight/2.0*GameGlobal.hexagonRate;
          var corner_x = center_x-GameGlobal.hexagonWidth/2.0*GameGlobal.hexagonRate;
          var corner_y = center_y-GameGlobal.hexagonHight/2.0*GameGlobal.hexagonRate;

          this.draw(ctx, GameGlobal.dx+corner_x, GameGlobal.dy+corner_y)
        }
      }
    }

  }

  touchOverHandler(e) {
    e.preventDefault()

    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    if (this.px == -1){
      this.px = x
    }
    if (this.py == -1){
      this.py = y
    }
    GameGlobal.dx += x-this.px
    GameGlobal.dy += y-this.py
    if (GameGlobal.dx<-50) GameGlobal.dx=-50
    if (GameGlobal.dy<-50) GameGlobal.dy=-50 
    if (GameGlobal.dx>50) GameGlobal.dx=50
    if (GameGlobal.dy>50) GameGlobal.dy=50 
    

    this.px = x
    this.py = y
    console.log(GameGlobal.dx, GameGlobal.dy)
  }

  touchEndHandler(e){
    e.preventDefault()
    this.px = -1
    this.py = -1
  }
    
}