// client/pages/movies/movies.js
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
      url: 'http://localhost:3000/movies/popular',
      success: res => {
        this.setData({ movies: res.data });
      },
      fail: err => {
        console.error(err);
      }
    })
  },

  goToMoviePage(event) {
    const movieId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/movie/movie?id=${movieId}`,
    })
  }
})