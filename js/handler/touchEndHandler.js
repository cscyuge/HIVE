
module.exports = function (e) {
  e.preventDefault()
  const clientX = e.changedTouches[0].clientX
  const clientY = e.changedTouches[0].clientY
  let put_ok = false  // board to board and put success
  var isInside = require('../util/isInside')
  if (GameGlobal.freeball.ball_show && !isInside(clientX, clientY, GameGlobal.ballbar.area)) {
    // put ball from bar/board to board
    const x = clientX - GameGlobal.dx
    const y = clientY - GameGlobal.dy
    var toIndices = require('../util/toIndices')
    var arr = toIndices(x, y)
    var i = arr[0]
    var j = arr[1]
    // console.log(i,j)
    if (GameGlobal.from_bar){ // from bar to board
      if (GameGlobal.board.board[[i, j]].length == 0) { // only when the place is blank we can put the ball
        GameGlobal.board.board[[i, j]].push(GameGlobal.freeball.ball_id)
        GameGlobal.ballManager.ball_count[GameGlobal.freeball.ball_id] -= 1
      }
    }else if (GameGlobal.from_board){  // from board to board
      GameGlobal.board.board[[i, j]].push(GameGlobal.freeball.ball_id)
      put_ok = true
    }
  }

  if (GameGlobal.from_bar && GameGlobal.freeball.ball_show){
    GameGlobal.ballManager.ball_count[GameGlobal.freeball.ball_id] += 1
  }else if (GameGlobal.from_board && !put_ok){
    GameGlobal.board.board[[GameGlobal.preX, GameGlobal.preY]].push(GameGlobal.freeball.ball_id)
  }
  GameGlobal.bg.px = 0
  GameGlobal.bg.py = 0
  GameGlobal.bg_stay = false
  GameGlobal.freeball.ball_show = false
  GameGlobal.from_board = false
  GameGlobal.from_bar = false
}