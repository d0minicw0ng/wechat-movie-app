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
  },

  showActionSheet() {
    const movieId = this.data.movie.id;

    wx.showActionSheet({
      itemList: ['文字', '音频'],
      itemColor: '',
      success: function(res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: `/pages/new_text_review/new_text_review?movie_id=${movieId}`
          });
        } else if (res.tapIndex === 1) {
          // TODO: audio
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    });
  }
})