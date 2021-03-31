let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if (instance) return instance
    instance = this
    let images_src_white = [
      'images/bee-white.png',
      'images/ant-white.png',
      'images/zha-white.png',
      'images/zhi-white.png',
      'images/jia-white.png',
      'images/piao-white.png',
      'images/wen-white.png',
      'images/chao-white.png',
    ]
    let images_src_black = [
      'images/bee-black.png',
      'images/ant-black.png',
      'images/zha-black.png',
      'images/zhi-black.png',
      'images/jia-black.png',
      'images/piao-black.png',
      'images/wen-black.png',
      'images/chao-black.png',
    ]
    this.images_white = new Array()
    this.images_black = new Array()
    for (var i = 0; i < 8; i++){
      let tmp_image_white = wx.createImage()
      tmp_image_white.src = images_src_white[i]
      this.images_white.push(tmp_image_white)
      let tmp_image_black = wx.createImage()
      tmp_image_black.src = images_src_black[i]
      this.images_black.push(tmp_image_black)
    }

    this.reset()
  }

  reset() {
    this.frame = 0
  }
}
