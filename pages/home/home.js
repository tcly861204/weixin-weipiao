var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: true,
        autoplay: true,
        interval: 3000,
        duration: 1200
    },
    bindViewTap: function(e) {
        // console.log(e.currentTarget.dataset.id);
        console.log(e);
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: "http://json.bmbstack.com/playingList",
            method: "GET",
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                if (res.statusCode === 200) {
                    that.setData({
                        items: res.data
                    });
                }
            }
        });
        wx.request({
            url: "http://json.bmbstack.com/bannerList",
            method: "GET",
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                if (res.statusCode === 200) {
                    that.setData({
                        images: res.data
                    });
                    //that.data.images = res.data;
                }
            }
        });
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})