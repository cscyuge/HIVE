
module.exports = function (clientX, clientY) {
  var w = 3 * GameGlobal.hexagonWidth / 4.0 * GameGlobal.hexagonRate
  var h = GameGlobal.hexagonHight / 2.0 * GameGlobal.hexagonRate
  var kx = parseInt(clientX / w)
  var ky = parseInt(clientY / h)
  var x = clientX - kx * w
  var y = clientY - ky * h

  if ((kx % 2 + ky % 2) % 2 == 0) {
    var tmpY = -1.7320508 * (x - GameGlobal.hexagonWidth / 4.0 * GameGlobal.hexagonRate)
    if (tmpY > y) {
      kx -= 1
      ky -= 1
    }
  } else {
    var tmpY = 1.7320508 * x
    if (tmpY < y) {
      kx -= 1
    } else {
      ky -= 1
    }
  }

  return [kx, ky]
}