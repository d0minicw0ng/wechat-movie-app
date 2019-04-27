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
    const movieId = options.movie_id;
    this.getReviews(movieId);
  },  
  
  getReviews(movieId) {
    wx.request({
      url: `${config.serverBaseUrl}/reviews?movie_id=${movieId}`,
      method: 'GET',
      success: res => {
        const reviews = res.data;
        this.setData({ reviews });
      }
    })
  }
})
