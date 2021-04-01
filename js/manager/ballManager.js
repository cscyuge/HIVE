/**
 * 棋子
 */
export default class BallManager{
  constructor() {
    this.ball_white_srcs = ['./images/bee-white.png',
                            './images/ant-white.png',
                            './images/zhi-white.png',
                            './images/zha-white.png',
                            './images/jia-white.png',
                            './images/wen-white.png',
                            './images/piao-white.png',
                            './images/chao-white.png'
                            ]
    this.ball_black_srcs = ['./images/bee-black.png',
                            './images/ant-black.png',
                            './images/zhi-black.png',
                            './images/zha-black.png',
                            './images/jia-black.png',
                            './images/wen-black.png',
                            './images/piao-black.png',
                            './images/chao-black.png'
                            ]
    this.images_white = new Array()
    this.images_black = new Array()
    for (var i = 0; i < 8; i++){
      let tmp_image_white = wx.createImage()
      tmp_image_white.src = this.ball_white_srcs[i]
      this.images_white.push(tmp_image_white)
      let tmp_image_black = wx.createImage()
      tmp_image_black.src = this.ball_black_srcs[i]
      this.images_black.push(tmp_image_black)
    }
    
    this.ball_count = [1,3,2,3,2,1,1,1]
  }

}