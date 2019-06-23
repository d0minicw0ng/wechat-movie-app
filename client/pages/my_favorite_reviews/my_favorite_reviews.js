const config = require('../../config');

Page({

  /**
   * Page initial data
   */
  data: {
    reviews: [],
    showFavorites: true,
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

  getMyPublishedReviews() {
    wx.request({
      url: `${config.serverBaseUrl}/reviews/my_published`,
      success: res => {
        const reviews = res.data;
        this.setData({ reviews });
      },
      fail: error => {
        console.error(error);
      }
    })
  },

  toggleShowFavorites() {
    const shouldShowFavorites = !this.data.showFavorites;
    this.setData({ showFavorites: shouldShowFavorites });
    if (shouldShowFavorites) {
      this.getMyFavoriteReviews();
    } else {
      this.getMyPublishedReviews();
    }
  },

  playAudio(e) {
    const url = e.currentTarget.dataset.url;
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
