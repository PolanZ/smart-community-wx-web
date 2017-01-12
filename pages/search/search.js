// mock data
var sResultList = require('../../mock/search-result').sResultList

Page({
    data: {
        focus: false,
        sResultList: []
    },
    onLoad: function() {
        console.log("search onLoad!")
        this.setData({
        	focus: true
        })
    },
    searchSubmit: function(e) {
    	var val = e.detail.value
    	if (val != '') {
    		console.log(val)
    		this.setData({
    			sResultList: sResultList
    		})
    	}
    }
})