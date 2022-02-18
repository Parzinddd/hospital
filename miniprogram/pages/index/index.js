// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

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
      }],
    newsArray:[
      {
        id:0,
        name:'1/28 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:1,
        name:'1/27 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:2,
        name:'1/26 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:3,
        name:'1/25 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:4,
        name:'1/24 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:5,
        name:'1/23 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:6,
        name:'1/22 njy在南区学生超市将付款吗改为私人微信',
        url:''
      },
      {
        id:7,
        name:'1/21 njy在南区学生超市将付款吗改为私人微信',
        url:''
      }
    ],
    newsIndex:0,
    news_1:'1/28 njy在南区学生超市将付款吗改为私人微信',
    news_2:'1/28 njy在南区学生超市将付款吗改为私人微信',
    news_3:'1/28 njy在南区学生超市将付款吗改为私人微信',
    news_4:'1/28 njy在南区学生超市将付款吗改为私人微信',
    news_5:'1/28 njy在南区学生超市将付款吗改为私人微信'
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



