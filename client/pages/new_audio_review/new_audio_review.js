const config = require('../../config');

Page({

  /**
   * Page initial data
   */
  data: {
    movie: null,
    audioFile: null,
    isRecording: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = options.movie_id;
    this.getMovie(id);
    this.initRecorderManager();
  },

  initRecorderManager() {
    this.recorderManager = wx.getRecorderManager();

    this.recorderManager.onError(() => {
      wx.showModal({
        title: '提示',
        content: "录音失败！",
        showCancel: false
      });
    });

    this.recorderManager.onStop((res) => {
      this.setData({ audioFile: res.tempFilePath });

      wx.setStorage({
        key: 'current_pending_audio_review_path',
        data: res.tempFilePath,
      });

      wx.showModal({
        title: '提示',
        content: "录音完成！",
        showCancel: false
      });
    });
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

  startRecordingReview() {
    this.recorderManager.start({ format: 'mp3' });
    this.setData({ isRecording: true });
  },

  stopRecordingReview() {
    this.recorderManager.stop();
    this.setData({ isRecording: false });
  },

  playReview() {
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.onError((res) => {
      wx.showModal({
        title: '提示',
        content: "播放录音失败！",
        showCancel: false
      });
    });
    innerAudioContext.src = this.data.audioFile;
    innerAudioContext.play();
  },

  goToCheckAudioReviewPage() {
    wx.navigateTo({
      url: `/pages/check_review/check_audio_review?movie_id=${this.data.movie.id}`,
    });
  }
})
