const config = require('../../config');

Page({

  /**
   * Page initial data
   */
  data: {
    movie: null,
    currentUser: null,
    pendingReview: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = options.movie_id;
    this.getMovie(id);
    this.getCurrentUser();
    this.getPendingReview();
  },

  getMovie(id) {
    wx.request({
      url: `${config.serverBaseUrl}/movies/${id}`,
      success: res => {
        const movie = res.data;
        this.setData({ movie });
      },
      fail: error => {
        console.error(error);
      }
    })
  },

  getCurrentUser() {
    // NOTE: Hardcoing id as 1 because we don't have a login system
    wx.request({
      url: `${config.serverBaseUrl}/users/1`,
      success: res => {
        const currentUser = res.data;
        this.setData({ currentUser });
      },
      fail: error => {
        console.error(error);
      }
    })
  },  

  getPendingReview() {
    const pendingReview = wx.getStorageSync('current_pending_review_content');
    this.setData({ pendingReview });
  },

  submitReview() {
    const movieId = this.data.movie.id;

    wx.request({
      url: `${config.serverBaseUrl}/reviews`,
      method: 'POST',
      data: { 
        content: this.data.pendingReview,
        user_id: this.data.currentUser.id,
        movie_id: movieId,
      },
      success: res => {
        const reviewId = res.data.id;
        wx.navigateTo({
          url: `/pages/reviews_list/reviews_list?movie_id=${movieId}`,
        });

        wx.removeStorageSync('current_pending_review_content')
      }
    })
  }
})
