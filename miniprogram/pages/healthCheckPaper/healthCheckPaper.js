// pages/joinHistory/joinHistory.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        healthCheckList:[],
        length: 0
    },
    checkPaper(e){
        const arrayIndex = this.data.length - e.currentTarget.dataset.id -1 
        const path = this.data.healthCheckList[arrayIndex].path
        
        wx.navigateTo({
          url: '/pages/paper/paper',
          success: function(res){
                  res.eventChannel.emit('acceptData',{
                    path: path
              })
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const app = getApp()
        const openid = app.globalData.openid
        const db = wx.cloud.database();
        const collections = db.collection('physicalRecords');

        collections.where({
            _openid: openid
        }).get({
            success: res => {
                console.log(res)
               const length = res.data.length
               console.log(length)
               const healthCheckList_copy = []
               for(var i = length-1 ; i >= 0 ; i--){
                healthCheckList_copy.push({
                       id: i,
                       path: res.data[i].path,
                       date : '2022/' + res.data[i].reserveDate+ '/'+res.data[i].reserveTime,
                       status: res.data[i].status,
                   })
               }
               this.setData({
                   healthCheckList: healthCheckList_copy,
                   length: length
               })
               console.log(this.data.healthCheckList)
              },
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