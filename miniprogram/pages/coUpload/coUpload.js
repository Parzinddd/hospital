// pages/coUpload/coUpload.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: '../../resource/img/1.png',
        path:"",
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
              wx.cloud.uploadFile({
                  cloudPath:"686f-hospital-2ghumiuca447b728-1309306443/hsImg/"+result.tempFilePaths[0],
                  filePath:result.tempFilePaths[0],
                  success: res=>{
                      console.log('上传成功',res)
                  }
              })
          }
        })
    }
})

