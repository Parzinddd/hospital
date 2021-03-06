// pages/languageSelect/languageSelect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        language:0
    },

    letsGo:function(){
        wx.switchTab({
            url: '/pages/myInfo/myInfo',
        })
    },

    radiochange:function(e){
        console.log('radio发生change事件，携带的value值为：',e.detail.value)
        const app = getApp()
        app.globalData.language= e.detail.value
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