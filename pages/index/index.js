Page({
  data: {
centerItem: 0,  
coverList:[
  {
    id: 0,
    url: "../../resource/img/1.png"
  },
  {
    id: 1,
    url: "../../resource/img/1.png"
  },
  {
    id: 2,
    url: "../../resource/img/1.png"
  },
  {
    id: 3,
    url: "../../resource/img/1.png"
  },
  {
    id: 4,
    url: "../../resource/img/1.png"
  }
],

  },
  handleSwiperChange(e) {
    this.setData({
      centerItem: e.detail.current,
    })
  },
  go2able:function(param){
    wx.navigateTo({
      url:'/pages/able/able',
    })
  },
  go2CoUpload:function(param){
    wx.navigateTo({
      url:'/pages/coUpload/coUpload',
    })
  },
  go2healthCheck:function(param){
    wx.navigateTo({
      url:'/pages/healthCheck/healthCheck',
    })
  },
  go2cooperation:function(param){
    wx.navigateTo({
      url:'/pages/cooperation/cooperation',
    })
  },
  go2blackboard:function(param){
    wx.navigateTo({
      url:'/pages/blackboard/blackboard',
    })
  }
})


