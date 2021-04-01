
module.exports = function(e){
  e.preventDefault()
  GameGlobal.bg.px = -1
  GameGlobal.bg.py = -1
  GameGlobal.bg_stay = false
  GameGlobal.freeball.ball_show = false
}