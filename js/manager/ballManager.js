/**
 * 棋子
 */
export default class BallManager {
  constructor() {
    let ball_white_srcs = ['blank-white.png',
      'bee-white.png',
      'ant-white.png',
      'zhi-white.png',
      'zha-white.png',
      'jia-white.png',
      'wen-white.png',
      'piao-white.png',
      'chao-white.png'
    ]
    let ball_black_srcs = ['blank-black.png',
      'bee-black.png',
      'ant-black.png',
      'zhi-black.png',
      'zha-black.png',
      'jia-black.png',
      'wen-black.png',
      'piao-black.png',
      'chao-black.png'
    ]
    this.images = {}
    for (var i = 1; i <= 8; i++) {
      let tmp_image_white = wx.createImage()
      tmp_image_white.src = GameGlobal.image_url+ ball_white_srcs[i]
      let tmp_image_black = wx.createImage()
      tmp_image_black.src = GameGlobal.image_url+ ball_black_srcs[i]
      this.images[i] = tmp_image_white
      this.images[-i] = tmp_image_black
    }
    let count = [0, 1, 3, 2, 3, 2, 1, 1, 1]
    this.ball_count = {}
    for (var i=1;i<=8;i++){
      this.ball_count[-i] = count[i] 
    }
    for (var i=1;i<=8;i++){
      this.ball_count[i] = count[i] 
    }
    
  }

}