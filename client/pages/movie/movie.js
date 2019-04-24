// client/pages/movie/movie.js
Page({

  /**
   * Page initial data
   */
  data: {
    movie: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = options.id;
    this.getMovie(id);
  },

  getMovie(id) {
    wx.request({
      url: `http://localhost:3000/movies/${id}`,
      success: res => {
        const movie = res.data;
        this.setData({ movie });
      },
      fail: error => {
        console.error(error);
      }
    })
  }
})