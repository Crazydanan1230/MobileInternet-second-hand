<template>
	<view>
		  <view class="UCenter-bg" @click="goLogin">
		    <image :src="login ? avatarUrl2 :avatarUrl1" class="png"></image>
		    <view class="text-xl"> 
		    <!-- <text>Amibition</text>   -->
		    </view>
		    <view class="margin-top-sm">
		      <text>{{login ? userInfo.username : '请先登录'}}</text>
		    </view>
		    <!-- <image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif" mode="scaleToFill" class="gif-wave"></image> -->
		  </view>

		
		
		<!-- 设置详细 -->
		 <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
		    <view class="cu-item arrow">
		      <view class="content" @tap="toIssue_page">
		        <text class="cuIcon-moneybagfill text-red"></text>
		        <text class="text-grey">我的发布</text>
		          <text class='num'>0</text>
		      </view>
		    </view>
		
		    <view class="cu-item arrow">
		      <navigator class="content" hover-class="none" url='/pages/my/my_sale/my_sale'>
		         <text class="cuIcon-titles text-green"></text>
		        <text class="text-grey">我的卖出</text>
		            <text class='num'>0</text>
		      </navigator>
		    </view>
		    <view class="cu-item arrow">
		      <navigator class="content"  hover-class="none" url="/pages/my/my_buy/my_buy">
		        <text class="cuIcon-formfill text-green"></text> 
		        <text class="text-grey">我买到的</text>
		        <text class='num'>0</text>
		      </navigator>
		    </view>
		    <view class="cu-item arrow">
		      <view class="content" bindtap="toCollect">
		        <text class="cuIcon-appreciatefill text-red"></text>
		        <text class="text-grey">我的收藏</text>
		          <text class='num'>0</text>
		      </view>
		    </view>
		    <view class="cu-item arrow">
		      <button class="cu-btn content" open-type="feedback">
		        <text class="cuIcon-writefill text-cyan"></text>
		        <text class="text-grey">意见反馈</text>
		      </button>
		    </view>
		    <view class="cu-item arrow content">
		    <button class='cu-btn content' @click="clearAllStore">
		        <text class="cuIcon-creativefill text-orange"></text>
		        <text class="text-grey">退出登录</text>
		   </button>
		    </view>
		  </view>
		  <view class="cu-tabbar-height"></view>
		<!-- 设置详细end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl1: "https://wx1.sinaimg.cn/small/0081OvH6ly1grmgwd9xb6j30b40b4dfq.jpg",
				avatarUrl2: "https://wx4.sinaimg.cn/small/0081OvH6ly1grmgpqfjuzj60qn0qndic02.jpg",
				userInfo: {}
			}
		},
		onShow() {
			this.getUserInfo();
		},
		methods: {
			getUserInfo: function() {
				const userInfo = uni.getStorageSync('userInfo');
				console.log(userInfo)
				if (!userInfo) {
					this.$data.login = false;
					return;
				}
				this.$data.userInfo = userInfo;
				this.$data.login = true;
			},
			goLogin: function() {
				if (!this.login) {
					uni.navigateTo({
						url: 'login/login'
					})
				}
			},
			outLogin: function() {
				uni.showModal({
					title: 'tip',
					content: '确定退出吗',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorageSync('token');
							uni.removeStorageSync('userInfo');
							location.href = location.href+'?time='+((new Date()).getTime());
						}
					}
				});
			},
			  // 清除全部缓存
			  clearAllStore:function(res){
			      uni.showModal({
			        title: '退出登录',
			        content: '是否退出登录？',
			        success:function(res){
			          if (res.confirm){
			                uni.clearStorage({
			                      success: function (res) {
									location.href = location.href+'?time='+((new Date()).getTime());
			                        uni.showToast({
			                          title: '退出成功',
			                          duration: 1000
			                        })
			                      },
			                      fail: function (res) {
			                        uni.showToast({
			                          title: '退出失败',
			                          icon: 'none',
			                          duration: 1000
			                        })
			                      }
			                    });
			          }
			       
			        }
			       
			      })
			
			  },
			  
			  // 我的发布跳转
			  toIssue_page:function(){
				  uni.navigateTo({
				  	url:"/pages/my/my_issue/my_issue"
				  })
			  }

		}
	}
</script>

<style>

/* pages/my/my.wxss */
/* 用户信息 */


.UCenter-bg {
  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
  background-size: cover;
  height: 450rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.UCenter-bg text {
  opacity: 0.8;
}

.UCenter-bg image {
  width: 200rpx;
  height: 200rpx;
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  width: 750rpx;
  height: 300rpx;
}
.text-xl image{
  height: 100rpx;
  width: 100rpx;
}
.png{

  border-radius: 100%;
}


.num{
  direction: rtl;
  margin-left: 58%;
  font-size: 25rpx;
  }
</style>
