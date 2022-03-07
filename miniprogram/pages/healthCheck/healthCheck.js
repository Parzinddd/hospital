Page({
  data: {
    multiArray: [],
    multiIndex: [0, 0],
    // multiIndex_copy:[0, 0],
    departure_time: '',
    arrival_time: '',
    name: '体检预约',
    id : 'bf4a0bf262109dc60ff96c2a6255c03f',
    username:'',
    phonenumber:'',
    idClass:'',
    idnumber:'',
    birthday:'',
    sex:'',
    height:'',
    weight:'',
    language:0,
    status:'进行中'//0 进行中；1 已完成；2 不符合要求被驳回；
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

  // bindMultiPickerChange: function (e) {
  //   console.log('func1')
  //   this.setData({
  //     multiIndex: e.detail.value
  //   })
    
  // },

  bindMultiPickerColumnChange: function (e) {
    const column = e.detail.column
    const value = e.detail.value
    const db = wx.cloud.database();
    const collections = db.collection('bookableItems');

    collections.where({
      name: this.data.name
    }).get({
      success: res => {
        const multiArray = []
        if(!column){
          multiArray[0] = res.data[0].multiArray[0];
          multiArray[1] = res.data[0].multiArray[value + 1];
          this.setData({
            multiArray: multiArray,
            ['multiIndex[0]']: value,
            ['multiIndex[1]']: 0
          })
        

        }
        else{
          this.setData({
            ['multiIndex[1]']: value
          })

        }
      },
    })
    // var data = {
    //   multiArray: this.data.multiArray,
    //   multiIndex: this.data.multiIndex
    // };
    // data.multiIndex[e.detail.column] = e.detail.value;
    // switch (e.detail.column) {
    //   case 0:
    //     switch (data.multiIndex[0]) {
    //       case 0:
    //         data.multiArray[1] = ['8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'];
    //         break;
    //       case 1:
    //         data.multiArray[1] = ['13:00 - 14:00', '14:00 - 15:00'];
    //         break;
    //     }
    //     data.multiIndex[1] = 0;
    //     break;
    // }
    // console.log(data.multiIndex);
    // this.setData(data);
  },

  formSubmit: function(e) {
    const app = getApp()
    if(app.globalData.ifLogin){
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const db = wx.cloud.database();
    const collections = db.collection('physicalRecords');

    if(e.detail.value.arrival_time.length != 4 || e.detail.value.departure_time.length != 4 ){
      wx.showToast({
        title: '时间不符合格式要求',
        icon: 'error',
        duration: 2000,
      })
    }else{
      if(this.data.username!=''){
        collections.add({
          data:{
            arrival_time: e.detail.value.arrival_time,
            departure_time:  e.detail.value.departure_time,
            reserveArray: e.detail.value.reserveTime,
            reserveDate: this.data.multiArray[0][e.detail.value.reserveTime[0]],
            reserveTime: this.data.multiArray[1][e.detail.value.reserveTime[1]],
            collect_id: this.data.id,
            collect_name: this.data.name,
            username: this.data.username,
            phonenumber: this.data.phonenumber,
            idClass: this.data.idClass,
            idnumber: this.data.idnumber,
            birthday: this.data.birthday,
            sex: this.data.sex,
            height: this.data.height,
            weight: this.data.weight,
            status: this.data.status,
            path: ''
          }
    
        })
        wx.showToast({
          title: '预约成功',
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
      }
      else{
        wx.showToast({
          title: '请完善个人信息',
          icon: 'error',
          duration: 1000,
          success:()=>{
            setTimeout(()=> {
                wx.switchTab({
                    url:'/pages/myInfo/myInfo'
                })
            },1000)
        }
        })
      }
    }
    
    }
    else{
      wx.showToast({
        title: '请先授权登陆',
        icon: 'error',
        duration: 1000,
        success:()=>{
          setTimeout(()=> {
              wx.switchTab({
                  url:'/pages/myInfo/myInfo'
              })
          },1000)
      }
      })
    }

  },

  onLoad: function () {
    const app = getApp()
    const openid = app.globalData.openid
    const language = app.globalData.language
    this.setData({
        language: language,
    })
    // console.log(openid)
    const db = wx.cloud.database();
    const collections = db.collection('bookableItems');
    // collections.add({
    //   data:{
    //     name: '体检预约',
    //     multiArray: [["2/11","2/12"],["8:00-9:00", "9:00-10:00"],["8:00-9:00","10:00-11:00"]]
    //   }
    // })
    collections.where({
      name: this.data.name
    }).get({
      success: res => {
        const multiArray = []
        multiArray[0] = res.data[0].multiArray[0];
        multiArray[1] = res.data[0].multiArray[1];
        this.setData({
          multiArray: multiArray
        })
        
      },
    })

    const userCollections = db.collection('user_test');
    userCollections.where({
      _openid: openid
    }).get({
      success: res => {
        this.setData({
          username: res.data[0].data.username,
          phonenumber: res.data[0].data.phonenumber,
          idClass: res.data[0].data.idClass,
          idnumber: res.data[0].data.idnumber,
          birthday: res.data[0].data.birthday,
          sex: res.data[0].data.sex,
          height: res.data[0].data.height,
          weight: res.data[0].data.weight,
        })
        
      },
    })
   },
})