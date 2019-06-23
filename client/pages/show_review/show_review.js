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
  },

  collectReview() {
    wx.request({
      url: `${config.serverBaseUrl}/favorites`,
      method: 'POST',
      data: {
        review_id: this.data.review.id,
      },
      success: res => {
        const reviewId = res.data.id;
        wx.navigateTo({
          url: '/pages/my_favorite_reviews/my_favorite_reviews',
        });
      }
    })
  }
})
