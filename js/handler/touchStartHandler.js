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
          console.log('bar off')
        }else{
          GameGlobal.ballbar.bar_on = true
          GameGlobal.ballbar.area.endY = GameGlobal.ballbar.area.startY+GameGlobal.hexagonHight*GameGlobal.hexagonRate+
                            7*GameGlobal.hexagonHight*GameGlobal.hexagonRate+8*GameGlobal.ballbar.fillsize
          console.log('bar on')
        }
      }
}