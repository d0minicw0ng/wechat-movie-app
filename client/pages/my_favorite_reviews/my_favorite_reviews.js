const config = require('../../config');

Page({

  /**
   * Page initial data
   */
  data: {
    reviews: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getMyFavoriteReviews();
  },

  getMyFavoriteReviews() {
    wx.request({
      url: `${config.serverBaseUrl}/reviews/my_favorites`,
      success: res => {
        const reviews = res.data;
        this.setData({ reviews });
      },
      fail: error => {
        console.error(error);
      }
    })
  },

  playAudio(e) {
    const url = e.target.dataset.url;
    wx.downloadFile({
      url: url,
      success(res) {
        wx.playVoice({
          filePath: res.tempFilePath,
        });
      }
    });
  }
})
