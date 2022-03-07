// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    mapImg:'../../resource/img/hospitalMap.jpeg',
    test:'test',
    centerItem: 0,  
    coverList:[],
    newsArray:[],
    newsIndex:0,
    language:0
  },

  news1:function(){
    wx.navigateTo({
      url: '/pages/news1/news1',
    })
  },
  news2:function(){
    wx.navigateTo({
      url: '/pages/news2/news2',
    })
  },
  news3:function(){
    wx.navigateTo({
      url: '/pages/news3/news3',
    })
  },
  news4:function(){
    wx.navigateTo({
      url: '/pages/news4/news4',
    })
  },

  goToAble:function(){
    wx.navigateTo({
      url:'/pages/able/able',
    })
  },

  goToHealthCheck:function(){
    wx.navigateTo({
      url: '/pages/healthCheck/healthCheck',
    })
  },

  goToCooperation:function(){
    wx.navigateTo({
      url: '/pages/cooperation/cooperation',
    })
  },

  handleSwiperChange(e) {
    this.setData({
      centerItem: e.detail.current,
    })
  },
  ifLogin(e){
    const app = getApp()
    if(!app.globalData.ifLogin){
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
    else{
      wx.navigateTo({
        url:'/pages/joinHistory/joinHistory'
      })
    }

  },

  onLoad: function (options) {
    const app = getApp()
    const openid = app.globalData.openid
    const db = wx.cloud.database();
    const collections = db.collection('adPath');
    const language = app.globalData.language

    this.setData({
      language: language,
  })
    collections.get({
        success: res => {
           const length = res.data.length
           const coverList_copy = []
           for(var i = length-1 ; i >= 0 ; i--){
            coverList_copy.push({
                   id: i,
                   url: res.data[i].path
               })
           }
           this.setData({
            coverList: coverList_copy
           })
          },
    })

    const boardCollections = db.collection('blackBoard');
    boardCollections.get({
      success: res => {
        console.log('res  ',res)
         const length = res.data.length
         const newsArray_copy = []
         for(var i = length-1 ; i >= 0 ; i--){
          newsArray_copy.push({
                 id: i,
                 date: res.data[i].date,
                 title: res.data[i].title,
                 content: res.data[i].content
             })
         }
         this.setData({
          newsArray: newsArray_copy
         })
          console.log(this.data.newsArray)
        },
  })


},
})



