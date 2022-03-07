// pages/coUpload/coUpload.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: '',
        images: [],
        reserveId: ''
    },


    chooseImage(){
        wx.chooseImage({
            sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
            sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
            success: res => {
                const image = this.data.images.concat(res.tempFilePaths)
                this.setData({
                images: image
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
                filePath:this.data.images[0],
                success: res=>{
                    console.log('上传成功',res)
                    this.setData({
                        url: this.data.images[0],
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
    
    removeImage(){
        this.setData({
            images: []
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

