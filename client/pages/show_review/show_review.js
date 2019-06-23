const config = require('../../config');

Page({

  data: {
    review: null,
  },

  onLoad: function (options) {
    const id = options.id;
    this.getReview(id);
  },

  getReview(id) {
    wx.request({
      url: `${config.serverBaseUrl}/reviews/${id}`,
      success: res => {
        const review = res.data;
        this.setData({ review });
      },
      fail: error => {
        console.error(error);
      }
    })
  },

  playAudio(e) {
    const url = e.currentTarget.dataset.url;
    wx.downloadFile({
      url: url,
      success(res) {
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath,
          })
        }
      }
    })
  }
})
