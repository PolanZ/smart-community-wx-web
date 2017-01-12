//index.js
//获取应用实例
var app = getApp()

// 引入mock数据
var markers = require('../../mock/markers').list

const indexStyle = "width: 750rpx; height: 1260rpx"
const rideStyle = "width: 750rpx; height: 960rpx"

var mapWid, mapHgt
// 获取map的宽高
wx.getSystemInfo({
  success: function(res) {
    mapWid = res.windowWidth
    mapHgt = res.windowHeight
    console.log('map的宽高：', mapWid, mapHgt )
  }
})

Page({
  data: {
    userInfo: {},
    style: indexStyle,
    longitude: 113.272697,
    latitude: 23.137963,
    controls: [{
      id: 2,
      iconPath: '/static/location.png',
      position: {
        left: 10,
        top: mapHgt - 54,
        width: 44,
        height: 44
      },
      clickable: true
    },{
      id: 3,
      iconPath: '/static/search.png',
      position: {
        left: mapWid - 54,
        top: mapHgt - 54,
        width: 44,
        height: 44
      },
      clickable: true
    }],
    markers: markers
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getLocation(function(points){
      // console.log(points)
      //更新数据
      that.setData({
        longitude: points[0],
        latitude: points[1]
      })
      that.mapCtx = wx.createMapContext('map')
    })
  },
  markertap (e) {
    console.log(e.markerId)
    wx.navigateTo({
      url: '../portrait/portrait',
      success: function (res) {
        
      }
    })
  },
  controltap (e) {
    var controlId = e.controlId
    switch (controlId) {
      case 2:
        this.mapCtx.moveToLocation()
        break;
      case 3:
        wx.navigateTo({
          url: '../search/search',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        break;
    }
  }
})
