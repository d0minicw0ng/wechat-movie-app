// client/pages/movie/movie.js
Page({

  /**
   * Page initial data
   */
  data: {
    movie: null,
    content: null,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = options.movie_id;
    this.getMovie(id);
    this.getPendingReview();
  },

  getPendingReview() {
    try {
      const content = wx.getStorageSync('current_pending_review_content');
      this.setData({ content });
    } catch (e) {
      // do nothing
    }
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
  },

  bindInput(e) {
    const content = e.detail.value;

    wx.setStorage({
      key: 'current_pending_review_content',
      data: content,
    });

    this.setData({ content });
  },

  goToCheckReviewPage() {
    wx.navigateTo({
      url: `/pages/check_review/check_review?movie_id=${this.data.movie.id}`,
    });
  }
})