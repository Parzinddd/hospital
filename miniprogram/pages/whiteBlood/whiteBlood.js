Page({
  data: {
    multiArray: [],
    maxAppointment:[],
    multiIndex: [0, 0],
    // multiIndex_copy:[0, 0],
    departure_time: '',
    arrival_time: '',
    name: 'test',
    id : '54ad1eea620fc8be114e19f86e29c17f',
    username:'',
    phonenumber:'',
    idClass:'',
    idnumber:'',
    birthday:'',
    sex:'',
    height:'',
    weight:'',
    status:'进行中',//0 进行中；1 已完成；2 不符合要求被驳回；
    healthCheck:0,
    zfb:'',
    zfbStatus:'未支付',
    language:0
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
        const maxAppointment = []
        if(!column){
          
          multiArray[0] = res.data[0].multiArray[0];
          multiArray[1] = res.data[0].multiArray[value + 1];
          maxAppointment[0] = res.data[0].maxAppointment[0];
          maxAppointment[1] = res.data[0].maxAppointment[value + 1];
          this.setData({
            multiArray: multiArray,
            maxAppointment: maxAppointment,
            ['multiIndex[0]']: value,
            ['multiIndex[1]']: 0
          })
          console.log('multiIndex[0]  --1',multiIndex[0])
          this.getCanReserveArray()
          console.log('multiIndex[0]  --2',multiIndex[0])

        }
        else if(column==1){
          this.setData({
            ['multiIndex[1]']: value
          })
          

        }
        fail: err =>{
          console.log('change data err: ' , err)
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
    console.log(e.detail.value)
      if(e.detail.value.arrival_time.length != 4 || e.detail.value.departure_time.length != 4 ){
        wx.showToast({
          title: '时间不符合格式要求',
          icon: 'error',
          duration: 2000,
        })
      }
      else{
        const db = wx.cloud.database();
      const collections = db.collection('collectionRecords');
      if(this.data.username!=''){
        collections.add({
          data:{
            arrival_time: e.detail.value.arrival_time,
            departure_time:  e.detail.value.departure_time,
            // reserveArray: e.detail.value.reserveTime,
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
            healthCheck: this.data.healthCheck,
            zfb: this.data.zfb,
            zfbStatus: this.data.zfbStatus,
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
            },2000)
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
          },2000)
      }
      })
    }
    

  },

  onLoad: function () {
    const app = getApp()
    const openid = app.globalData.openid
    console.log(openid)
    const db = wx.cloud.database();
    const collections = db.collection('bookableItems');
    const language = app.globalData.language
    this.setData({
      language: language,
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
          zfb: res.data[0].data.zfb,
        })
        this.setName()
      },
    })

    
    
   },

   setName(){
    const db = wx.cloud.database();
    const collections = db.collection('bookableItems');
    if(this.data.idClass == '境外护照(Passport)'){
      this.setData({
        name: '外国人白细胞采集'
      })
      
    }
    else{
      
      this.setData({
        name: '白细胞采集'
      })
    }
    collections.where({
      name: this.data.name
    }).get({
      success: res => {
        const multiArray = []
        multiArray[0] = res.data[0].multiArray[0];
        multiArray[1] = res.data[0].multiArray[1];
        const maxAppointment = []
        maxAppointment[0] = res.data[0].maxAppointment[0];
        maxAppointment[1] = res.data[0].maxAppointment[1];
        this.setData({
          multiArray: multiArray,
          maxAppointment: maxAppointment
        })
        this.getCanReserveArray()
      },
    })
   },
   getCanReserveArray(){
     const length = this.data.multiArray[1].length
     const multiArray = []
     for(var i = 0 ; i < length ; i++){
       if(this.data.maxAppointment[1][i] != 0){
         multiArray.push(this.data.multiArray[1][i])
       }
     }
     
     this.setData({
       ['multiArray[1]']: multiArray
     })
     console.log('after getReserveArray: multiArray  ', this.data.multiArray)
   }
})