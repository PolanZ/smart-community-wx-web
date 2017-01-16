var getSqzt = require('../../mock/getSQZT')
// var echarts = require('../../echarts/echarts.js')

Page({
    data: {
    	loading: false,
    	ztTemplate: 'info',
    	ztData: [],
    	currentTab: 0,	// 默认显示概况info的数据
    	tabList: [{
			id: 0,
			name: '概况',
			icon: 'icon-info'
		},{
			id: 1,
			name: '社群',
			icon: 'icon-people'
		},{
			id: 2,
			name: '交通',
			icon: 'icon-traffic'
		},{
			id: 3,
			name: '消费',
			icon: 'icon-consume'
		},{
			id: 4,
			name: '娱乐',
			icon: 'icon-music'
		},{
			id: 5,
			name: '饮食',
			icon: 'icon-food'
		},{
			id: 6,
			name: '教育',
			icon: 'icon-education'
		},{
			id: 7,
			name: '健康',
			icon: 'icon-hospital'
		},{
			id: 8,
			name: '金融',
			icon: 'icon-touzi'
		},{
			id: 9,
			name: '迁徒',
			icon: 'icon-qianxi'
		},{
			id: 10,
			name: '营销',
			icon: 'icon-shequ-more'
		}]
    },
    onLoad: function () {
    	var that = this
    	// console.log(getSqzt)
    	if (getSqzt && getSqzt.length != 0) {
    		wx.setNavigationBarTitle({
    			title: getSqzt[0].value[0].value
    		})
    		that.setData({
    			loading: true,
    			ztData: getSqzt[0].value	// 默认显示概况info的数据
    		})

    	}else {
    		that.setData({
    			loading: true
    		})
    		wx.showModal({
			  title: '加载失败',
			  content: '确定返回上一级页面',
			  success: function(res) {
			    if (res.confirm) {
			      wx.navigateBack()
			    }
			  }
			})
    	}
    },
    tabEventHandle: function(e) {
    	var ztId = parseInt(e.currentTarget.id)
    	// console.log('tabCLick:', ztId)
    	switch (ztId) {
    		case 0:
    			this.setData({
    				ztTemplate: 'info',
    				currentTab: ztId,
    				ztData: getSqzt[ztId].value,
    			})
    			break;
    		case 1:
    			this.setData({
    				ztTemplate: 'people',
    				currentTab: ztId,
    				ztData: getSqzt[ztId].value,
    			})
    			break;
    	}
    }
})