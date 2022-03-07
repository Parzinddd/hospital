// pages/joinHistory/joinHistory.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        projectList: [],
        length: 0
    },

    goToCoUpload:function(e){
        const arrayIndex = this.data.length - e.currentTarget.dataset.id -1 
        const reserveId = this.data.projectList[arrayIndex].reserveId
        
        wx.navigateTo({
          url: '/pages/coUpload/coUpload',
          success: function(res){
                  res.eventChannel.emit('acceptData',{
                  reserveId: reserveId
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
        const collections = db.collection('collectionRecords');

        collections.where({
            _openid: openid
        }).get({
            success: res => {
            //    console.log(res)
               const length = res.data.length
            //    console.log(length)
               const projectList_copy = []
               for(var i = length-1 ; i >= 0 ; i--){
                   projectList_copy.push({
                       id: i,
                       name: res.data[i].collect_name,
                       date : '2022/' + res.data[i].reserveDate + '/'+res.data[i].reserveTime,
                       status: res.data[i].status,
                       healthCheck: res.data[i].healthCheck,
                       reserveId: res.data[i]._id,
                       zfbStatus: res.data[i].zfbStatus,
                   })
               }
               this.setData({
                   projectList: projectList_copy,
                   length: length
               })
            //    console.log(this.data.projectList)
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