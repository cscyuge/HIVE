module.exports = function (e) {
  e.preventDefault()

  const x = e.touches[0].clientX
  const y = e.touches[0].clientY

  if (x >= GameGlobal.ballbar.area.startX
    && x <= GameGlobal.ballbar.area.startX + GameGlobal.hexagonWidth * GameGlobal.hexagonRate
    && y >= GameGlobal.ballbar.area.startY
    && y <= GameGlobal.ballbar.area.startY + GameGlobal.hexagonHight * GameGlobal.hexagonRate) {  // touch the bar button
    if (GameGlobal.ballbar.bar_on) {  // close the br
      GameGlobal.ballbar.bar_on = false
      GameGlobal.ballbar.area.endY = GameGlobal.ballbar.area.startY + GameGlobal.hexagonHight * GameGlobal.hexagonRate
      GameGlobal.statusbar.bar_on = false
      GameGlobal.statusbar.ballShowed = 0
      console.log('bar off')
    } else {  //open the bar
      GameGlobal.ballbar.bar_on = true
      GameGlobal.ballbar.area.endY = GameGlobal.ballbar.area.startY + 9 * GameGlobal.hexagonHight * GameGlobal.hexagonRate +
        9 * GameGlobal.ballbar.fillsize
      console.log('bar on')
    }
    GameGlobal.bg_stay = true
  }

  if (GameGlobal.ballbar.bar_on && x >= GameGlobal.ballbar.area.startX
    && x <= GameGlobal.ballbar.area.startX + GameGlobal.hexagonWidth * GameGlobal.hexagonRate
    && y >= GameGlobal.ballbar.area.startY + GameGlobal.hexagonHight * GameGlobal.hexagonRate
    && y <= GameGlobal.ballbar.area.endY) { //touch the ball in the bar
    // show ball status
    const _x = x - GameGlobal.ballbar.area.startX
    const _y = y - GameGlobal.ballbar.area.startY - GameGlobal.hexagonHight * GameGlobal.hexagonRate
    let l = (GameGlobal.statusbar.fillsize + GameGlobal.hexagonHight * GameGlobal.hexagonRate)
    let k = parseInt(_y / l)
    if (_y - k * (l) >= GameGlobal.statusbar.fillsize) {  // choose a ball
      k += 1
      if (GameGlobal.ballManager.ball_count[k] > 0) { // there is at least a ball we can choose
        GameGlobal.statusbar.bar_on = true
        GameGlobal.from_bar = true
        GameGlobal.from_board = false
        GameGlobal.statusbar.ballShowed = k
        if (!GameGlobal.show_white) GameGlobal.statusbar.ballShowed = -k
        GameGlobal.freeball.reset(k)
        GameGlobal.freeball.image_x = x - GameGlobal.hexagonWidth / 2.0 * GameGlobal.hexagonRate
        GameGlobal.freeball.image_y = y - GameGlobal.hexagonHight / 2.0 * GameGlobal.hexagonRate
        GameGlobal.freeball.ball_show = true
        GameGlobal.ballManager.ball_count[GameGlobal.freeball.ball_id] -= 1
      }
      GameGlobal.bg_stay = true
    }


  } else {  // find out where we touch
    const _x = x - GameGlobal.dx
    const _y = y - GameGlobal.dy
    var toIndices = require('../util/toIndices')
    var arr = toIndices(_x, _y)
    var i = arr[0]
    var j = arr[1]
    if (GameGlobal.board.board[[i, j]].length != 0) { // touch a ball in the board
      console.log('status bar on')
      GameGlobal.preX = i
      GameGlobal.preY = j
      GameGlobal.from_board = true
      GameGlobal.from_bar = false
      GameGlobal.bg_stay = true
      GameGlobal.statusbar.bar_on = true
      GameGlobal.statusbar.ballShowed = GameGlobal.board.board[[i, j]].pop()
      GameGlobal.freeball.reset(GameGlobal.statusbar.ballShowed)
      GameGlobal.freeball.image_x = x - GameGlobal.hexagonWidth / 2.0 * GameGlobal.hexagonRate
      GameGlobal.freeball.image_y = y - GameGlobal.hexagonHight / 2.0 * GameGlobal.hexagonRate
      GameGlobal.freeball.ball_show = true

    } else { // touch nothing, which means cancel statusbar
      GameGlobal.statusbar.bar_on = false
      GameGlobal.statusbar.ballShowed = 0
    }
  }

}