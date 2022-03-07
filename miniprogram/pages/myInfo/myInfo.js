// pages/myInfo/myInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
        myData:'../../resource/img/my.jpg',
        healthCheckHistory:'../../resource/img/hsHistory.jpg',
        joinHistory:'../../resource/img/joinHistory.jpg',
        userInfo:{},
        language:0
    },

    getUserProfile(e) {
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            const app = getApp()
            app.globalData.ifLogin = 1
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const app = getApp()
      const language = app.globalData.language
      this.setData({
          language: language,
      })
  },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        if (wx.getUserProfile) {
            this.setData({
              canIUseGetUserProfile: true
            })
          }
    },

    goToInfo:function(){
        wx.navigateTo({
          url: '../baseInfo/baseInfo',
        })
    },

    goTohealthCheckPaper:function(){
        wx.navigateTo({
          url: '../healthCheckPaper/healthCheckPaper',
        })
    },
    
    goToJoinHistory:function(){
        wx.navigateTo({
          url: '../joinHistory/joinHistory',
        })
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

    }
})