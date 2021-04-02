
module.exports = function (x, y, area) {
  return x >= area.startX
    && x <= area.endX
    && y >= area.startY
    && y <= area.endY
}