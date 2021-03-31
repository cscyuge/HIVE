
module.exports = function (e) {
  e.preventDefault()
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  
  if (GameGlobal.bg.px == -1){
    GameGlobal.bg.px = x
  }
  if (GameGlobal.bg.py == -1){
    GameGlobal.bg.py = y
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