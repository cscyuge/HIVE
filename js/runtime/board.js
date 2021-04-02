/**
 * 棋盘
 * 棋子id：
 * 0-空白
 * 1-蜂后*1
 * 2-蚂蚁*3
 * 3-蜘蛛*2
 * 4-蚱蜢*3
 * 5-甲虫*2
 * 6-蚊子*1
 * 7-瓢虫*1
 * 8-潮虫*1
 */
export default class Board {
  constructor() {
    this.board = {}
    for (var i = -20; i <= 50; i++) {
      for (var j = -20; j <= 50; j++) {
        this.board[[i, j]] = []
      }
    }
    // this.board[[2,4]] = -1
  }

  render(ctx) {
    for (var i = -20; i <= 50; i++) {
      for (var j = -20; j <= 50; j++) {
        if ((i + j) % 2 == 0) {
          if (this.board[[i,j]].length>0) {
            var id = this.board[[i, j]][this.board[[i,j]].length-1]
            var corner_x = i * 3 * GameGlobal.hexagonWidth / 4.0 * GameGlobal.hexagonRate;
            var corner_y = j * GameGlobal.hexagonHight / 2.0 * GameGlobal.hexagonRate
            corner_x += GameGlobal.dx
            corner_y += GameGlobal.dy
            if (id != 0) {
              ctx.drawImage(GameGlobal.ballManager.images[id], corner_x, corner_y, hexagonWidth * hexagonRate, hexagonHight * hexagonRate)
            }
          }
        }
      }
    }

  }

}