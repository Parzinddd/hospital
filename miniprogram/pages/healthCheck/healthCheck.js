// pages/healthCheck/healthCheck.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        multiArray: [['2/11', '2/12'], ['8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00']],
        objectMultiArray: [
          [
            {
              id: 0,
              name: '2/11'
            },
            {
              id: 1,
              name: '2/12'
            }
          ], [
            {
              id: 0,
              name: '8:00 - 9:00'
            },
            {
              id: 1,
              name: '9:00 - 10:00'
            },
            {
              id: 2,
              name: '10:00 - 11:00'
            },
            {
              id: 3,
              name: '11:00 - 12:00'
            },
          ]
        ],
        multiIndex: [0, 0, 0],
        departTimeInput: '',
        arrivalTimeInput: ''
    },

    bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        multiIndex: e.detail.value
    })
    },
    bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
        case 0:
        switch (data.multiIndex[0]) {
            case 0:
            data.multiArray[1] = ['8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'];
            break;
            case 1:
            data.multiArray[1] = ['13:00 - 14:00', '14:00 - 15:00'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
    },
    
    formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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

    }
})