// client/pages/reviews_list/reviews_list.js
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
      url: `http://localhost:3000/reviews?movie_id=${movieId}`,
      method: 'GET',
      success: res => {
        const reviews = res.data;
        this.setData({ reviews });
      }
    })
  }
})