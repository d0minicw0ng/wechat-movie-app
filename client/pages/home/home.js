// client/pages/home/home.js
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

  getRandomReview() {
    wx.request({
      url: 'http://localhost:3000/reviews/random',
      success: res => {
        this.setData({ randomReview: res.data });
      },
      fail: err => {
        console.error(err);
      }
    })
  },
  goToPopularMoviesPage() {
    wx.navigateTo({
      url: '/pages/movies/movies',
    });
  },

  goToMyFavoriteReviewsPage() {
    wx.navigateTo({
      url: '/pages/my_favorite_reviews/my_favorite_reviews',
    });
  }
})