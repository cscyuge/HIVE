module.exports = function(e){
  e.preventDefault()

  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  if (x >= GameGlobal.ballbar.area.startX
      && x <= GameGlobal.ballbar.area.startX+GameGlobal.hexagonWidth*GameGlobal.hexagonRate
      && y >= GameGlobal.ballbar.area.startY
      && y <= GameGlobal.ballbar.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate) {
        if (GameGlobal.ballbar.bar_on){
          GameGlobal.ballbar.bar_on = false
          GameGlobal.ballbar.area.endY = GameGlobal.ballbar.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate
          GameGlobal.statusbar.bar_on = false
          GameGlobal.statusbar.ballShowed = -1
          console.log('bar off')
        }else{
          GameGlobal.ballbar.bar_on = true
          GameGlobal.ballbar.area.endY = GameGlobal.ballbar.area.startY+ 9*GameGlobal.hexagonHight*GameGlobal.hexagonRate+
                                         9*GameGlobal.ballbar.fillsize
          console.log('bar on')
        }
  }

  if (GameGlobal.ballbar.bar_on && x >= GameGlobal.ballbar.area.startX
    && x <= GameGlobal.ballbar.area.startX+GameGlobal.hexagonWidth*GameGlobal.hexagonRate
    && y >= GameGlobal.ballbar.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate
    && y <= GameGlobal.ballbar.area.endY){
    // show ball status
    const _x = x - GameGlobal.ballbar.area.startX
    const _y = y -  GameGlobal.ballbar.area.startY-GameGlobal.hexagonHight*GameGlobal.hexagonRate
    let l = (GameGlobal.statusbar.fillsize+GameGlobal.hexagonHight*GameGlobal.hexagonRate)
    let k = parseInt(_y/l)
    if (_y-k*(l) >= GameGlobal.statusbar.fillsize){
      GameGlobal.statusbar.bar_on = true
      GameGlobal.statusbar.ballShowed = k   
      GameGlobal.freeball.reset(k)
      GameGlobal.freeball.image_x = x - GameGlobal.hexagonWidth/2.0*GameGlobal.hexagonRate
      GameGlobal.freeball.image_y = y - GameGlobal.hexagonHight/2.0*GameGlobal.hexagonRate
      GameGlobal.freeball.ball_show = true
    }
    

  }else{
    GameGlobal.statusbar.bar_on = false
    GameGlobal.statusbar.ballShowed = -1
  }
    
}