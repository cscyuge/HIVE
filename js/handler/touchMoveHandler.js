
module.exports = function (e) {
  e.preventDefault()
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  var isInside = require('../util/isInside')
  if (GameGlobal.bg_stay){
    GameGlobal.freeball.image_x = x - GameGlobal.hexagonWidth/2.0*GameGlobal.hexagonRate
    GameGlobal.freeball.image_y = y - GameGlobal.hexagonHight/2.0*GameGlobal.hexagonRate
    return
  }
  if (GameGlobal.bg.px == -1 && GameGlobal.bg.py == -1){
    GameGlobal.bg.px = x
    GameGlobal.bg.py = y
    if (isInside(x,y,GameGlobal.ballbar.area)){
      GameGlobal.bg_stay = true
    }
  }

  GameGlobal.dx += x-GameGlobal.bg.px
  GameGlobal.dy += y-GameGlobal.bg.py
  let thd = 150
  if (GameGlobal.dx<-thd) GameGlobal.dx=-thd
  if (GameGlobal.dy<-thd) GameGlobal.dy=-thd
  if (GameGlobal.dx>thd) GameGlobal.dx=thd
  if (GameGlobal.dy>thd) GameGlobal.dy=thd 
  

  GameGlobal.bg.px = x
  GameGlobal.bg.py = y
  // console.log(GameGlobal.dx, GameGlobal.dy)
}