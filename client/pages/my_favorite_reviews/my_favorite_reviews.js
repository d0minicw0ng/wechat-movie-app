// client/pages/my_favorite_reviews/my_favorite_reviews.js
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
      url: 'http://localhost:3000/reviews/my_favorites',
      success: res => {
        const reviews = res.data;
        this.setData({ reviews });
      },
      fail: error => {
        console.error(error);
      }
    })
  }
})