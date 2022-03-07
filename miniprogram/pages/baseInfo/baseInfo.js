// pages/baseInfo/baseInfo.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        array: ['身份证', '港澳居民往来大陆通行证', '台湾居民来往大陆通行证','境外护照(Passport)'],
        objectArray: [
          {
            id: 0,
            name: '身份证'
          },
          {
            id: 1,
            name: '港澳居民往来大陆通行证'
          },
          {
            id: 2,
            name: '台湾居民来往大陆通行证'
          },
          {
            id: 3,
            name: '境外护照(Passport)'
          },
        ],
        index: 0,
        date:'2021-01-01',
        sexArray: ['男','女'],
        objectSex:[
          {
            id:0,
            name:'男'
          },
          {
            id:1,
            name:'女'
          }
        ],
        idClass:'',
        sex:'',
        sexIndex:0,
        idnumber:'',
        username:'',
        phonenumber:'',
        height:'',
        weight:'',
        zfb:'',
        images: [],
        path:''
    },
    
    bindDateChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        date: e.detail.value
      })
    },
    
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      bindPickerChange1: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          sexIndex: e.detail.value
        })
      },

      formSubmit: function(e) {
        
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        
        let idnumber = e.detail.value.idnumber;
        let username = e.detail.value.username;
        let phonenumber = e.detail.value.phonenumber;
        let height = e.detail.value.height;
        let weight = e.detail.value.weight;
        let zfb = e.detail.value.zfb;

        if (idnumber=='') {
          wx.showToast({
            title: '请输入证件号',
            icon:'error', 
          })
          return false
        }else if (username=='') {
          wx.showToast({
            title: '请输入姓名',
            icon:'error',
          })
          return false
        }else if (phonenumber=='') {
          wx.showToast({
            title: '请输入手机号',
            icon:'error',
          })
          return false
        }else if (height=='') {
          wx.showToast({
            title: '请输入身高',
            icon:'error',
          })
          return false
        }else if (weight=='') {
          wx.showToast({
            title: '请输入体重',
            icon:'error',
          })
        }else if (zfb=='') {
          wx.showToast({
            title: '请输入支付宝账号',
            icon:'error',
          })
          return false
        }else{
          const db = wx.cloud.database();
        const collections = db.collection('user_test');
        const app = getApp()
        const openid = app.globalData.openid
        collections.where({
          _openid: openid
        }).get({
          success: res => {
            
            if(res.data.length){
              console.log('该用户存在记录')
              
              collections.doc(res.data[0]._id).update({
                data:{
                  data:{
                    birthday: e.detail.value.birthday,
                    height: e.detail.value.height,
                    idClass: e.detail.value.idClass,
                    idnumber: e.detail.value.idnumber,
                    index: e.detail.value.index,
                    phonenumber: e.detail.value.phonenumber,
                    sex: e.detail.value.sex,
                    sexIndex: e.detail.value.sexIndex,
                    username: e.detail.value.username,
                    weight: e.detail.value.weight,
                    zfb: e.detail.value.zfb,
                  },
                  path: this.data.path
                }
              })
            }
            else{
              
              collections.add({
                data:{
                  data:e.detail.value,
                  path: this.data.path
                }
              })
            }
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '查询记录失败'
            })
            console.error('[数据库] [查询记录] 失败：', err)
          }
        })
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000,
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

      uploadPath(){
        if(this.data.images.length!=0){
          wx.showLoading({
          title: '图片上传中',
          mask: true,
          })
          //path != ''
          if(this.data.path!=''){
            wx.cloud.deleteFile({
              fileList:[this.data.path],
              success: res => {
                console.log('删除照片成功')
              },
              fail: err => {
                console.log('删除失败 ', err)
              }
            })
          }
          wx.cloud.uploadFile({
              cloudPath:"passport/" + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000),
              filePath:this.data.images[0],
              success: res=>{
                  console.log('护照图片上传成功  ',res.fileID)
                  wx.cloud.getTempFileURL({
                    fileList:[res.fileID],
                    success: res => {
                      this.setData({
                        path: res.fileList[0].tempFileURL
                    })
                    console.log('data.path  ',this.data.path)
                    }
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
      }else{
          wx.showToast({ 
              title: '请选择图片',
              icon:'error'
          })
      }

      },

      uploadPassport:function(e){
        wx.chooseImage({
          sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
          sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
          success: res => {
              const image = this.data.images.concat(res.tempFilePaths)
              this.setData({
              images: image
              })
              this.uploadPath()
          }
      })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      const app = getApp()
      const openid = app.globalData.openid
      // console.log(openid)
      const db = wx.cloud.database();
      const collections = db.collection('user_test');
      collections.where({
        _openid: openid
      }).get({
        success: res => {
          console.log(res)
          if(res.data.length){
            this.setData({
              date:res.data[0].data.birthday,
              height:res.data[0].data.height,
              idClass:res.data[0].data.idClass,
              idnumber:res.data[0].data.idnumber,
              phonenumber:res.data[0].data.phonenumber,
              sex:res.data[0].data.sex,
              username:res.data[0].data.username,
              weight:res.data[0].data.weight,
              index: res.data[0].data.index,
              sexIndex: res.data[0].data.sexIndex,
              zfb: res.data[0].data.zfb,
              path: res.data[0].path,
            })
          }

          else{
            console.log('该用户不存在记录');
          }
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
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