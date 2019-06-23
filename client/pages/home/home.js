const config = require('../../config');

Page({
  /**
   * Page initial data
   */
  data: {
    randomReview: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getRandomReview();
  },

  onPullDownRefresh: function () {
    this.getRandomReview();
  },

  getRandomReview() {
    wx.request({
      url: `${config.serverBaseUrl}/reviews/random`,
      success: res => {
        this.setData({ randomReview: res.data });
      },
      fail: err => {
        console.error(err);
      }
    })
  }
})
