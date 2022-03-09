// pages/coUpload/coUpload.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: ['http://tmp/D5Sq7pvFFhQyf89ac4157e65ab0fc6802abbd45c8a3a.JPG','http://tmp/D5Sq7pvFFhQyf89ac4157e65ab0fc6802abbd45c8a3a.JPG'],
        reserveId: ''
    },


    chooseImage(){
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
            success: res => {
                const images = this.data.images.concat(res.tempFilePaths)
                const images1 = images.length <= 9 ? images : images.slice(0, 9)
                this.setData({
                images: images1
                })
            }
        })
    },
 
    uploadImage(){
        if(this.data.images.length!=0){
            wx.showLoading({
            title: '图片上传中',
            mask: true,
            })
            wx.cloud.uploadFile({
                cloudPath:"hsImg/" + new Date().getTime() +"-"+ Math.floor(Math.random() * 1000),
                filePath:this.data.images,
                success: res=>{
                    console.log('上传成功',res)
                },
                fail: res=>{
                    wx.showToast({ title: '系统错误' })
                    console.log('上传失败',res)
                },
                complete: res=>{
                    wx.hideLoading({
                    success: (res) => {},
                    })
                    const db = wx.cloud.database();
                    const collections = db.collection('collectionRecords');
                    collections.doc(this.data.reserveId).update({
                        data:{
                            healthCheck: 1
                        }
                    })
                    wx.showToast({ 
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000,
                        success:()=>{
                        setTimeout(()=> {
                            wx.switchTab({
                              url: '/pages/myInfo/myInfo',
                            })
                        },2000)
                    } })
                }
            })
        }else{
            wx.showToast({ 
                title: '请选择图片',
                icon:'error'
            })
        }
    },
    
    removeImage(e){
        var that = this;
        var images = that.data.images;
         // 获取要删除的第几张图片的下标
        const idx = e.currentTarget.dataset.idx
          // splice  第一个参数是下表值  第二个参数是删除的数量
        images.splice(idx,1)
        this.setData({
            images: images
       })
    },

    onLoad (option){
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.once('acceptData', (data)=>{
            console.log(data)
            this.setData({
                reserveId: data.reserveId
            })
        })
        
    }
})

