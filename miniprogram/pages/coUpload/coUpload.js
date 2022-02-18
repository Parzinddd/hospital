// pages/coUpload/coUpload.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: '../../resource/img/1.png',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    UploadImage(){
        wx,wx.chooseImage({
          success: (result) => {
              let suffix = /\.\w+$/.exec(result.tempFilePaths[0]).input
              wx.showLoading({
                title: '图片上传中',
                mask: true,
              })
              wx.cloud.uploadFile({
                  cloudPath:"hsImg/" + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000),
                  filePath:suffix,
                  success: res=>{
                      console.log('上传成功',res)
                      this.setData({
                          url: suffix,
                      })
                  },
                  fail: res=>{
                      wx.showToast({ title: '系统错误' })
                      console.log('上传失败',res)
                  },
                  complete: res=>{
                      wx.hideLoading({
                        success: (res) => {},
                      })
                  }
              })
          }
        })
    }
})

