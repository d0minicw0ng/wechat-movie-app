const config = require('../../config');

Page({

  /**
   * Page initial data
   */
  data: {
    movies: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getPopularMovies();
  },

  getPopularMovies() {
    wx.request({
      url: `${config.serverBaseUrl}/movies/popular`,
      success: res => {
        this.setData({ movies: res.data });
      },
      fail: err => {
        console.error(err);
      }
    })
  }
})
