Page({
  data: {
    multiArray: [['2/11', '2/12'], ['8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '2/11',
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
    departure_time: '',
    arrival_time: ''
  },

  // bindDatePickerChange: function (e) {
  //   console.log('用戶预约日期改为', e.detail.value)
  //   this.setData({
  //     dateIndex: e.detail.value
  //   })
  // },

  // bindTimePickerChange: function (e) {
  //   console.log('用戶预约时间改为', e.detail.value)
  //   this.setData({
  //     timeIndex: e.detail.value
  //   })
  // },

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
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000,
      success:()=>{
        setTimeout(()=> {
            wx.switchTab({
                url:'/pages/index/index'
            })
        },2000)
    }
    })
  },
})