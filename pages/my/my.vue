<template>
	<view>
		  <view class="UCenter-bg" @click="goLogin">
		    <image :src="login ? avatarUrl2 :avatarUrl1" class="png"></image>
		    <view class="text-xl"> 
		    <!-- <text>Amibition</text>   -->
		    </view>
		    <view class="margin-top-sm">
		      <text>{{login ? userInfo.email : '请先登录'}}</text>
		    </view>
		  </view>
		<view v-if="login">
		<view class="padding flex text-center text-grey bg-white shadow-warp">
				
		  <view class="flex flex-sub flex-direction solid-right" @click="toMyProduct(1)">
		    <view class="text-xxl text-orange">{{num1}}</view>
		    <view class="margin-top-sm">交易中</view>
		  </view>
		  <view class="flex flex-sub flex-direction solid-right" @click="toMyProduct(2)">
		    <view class="text-xxl text-blue">{{num2}}</view>
		    <view class="margin-top-sm"></text>买到的</view>
		  </view>
		  <view class="flex flex-sub flex-direction" @click="toMyProduct(3)">
		    <view class="text-xxl text-green">{{num3}}</view>
		    <view class="margin-top-sm"></text>卖出的</view>
		  </view>
		  
		</view>
		
		<!-- 设置详细 -->
		 <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
		    <view class="cu-item arrow">
		      <view class="content" @click="toMyProduct(0)">
		        <text class="cuIcon-moneybagfill text-red"></text>
		        <text class="text-grey">我的发布</text>
		      </view>
		    </view>
		    <view class="cu-item arrow content">
		    <button class='cu-btn content' @click="clearAllStore">
		        <text class="cuIcon-creativefill text-orange"></text>
		        <text class="text-grey">退出登录</text>
		   </button>
		    </view>
		  </view>
		  </view>
		  <view class="cu-tabbar-height"></view>
		<!-- 设置详细end -->
	</view>
</template>

<script>
	import {
		ProductModel
	} from '@/models/product.js';
	let productModel = new ProductModel();
	export default {
		data() {
			return {
				login: false,
				avatarUrl1: "https://wx1.sinaimg.cn/small/0081OvH6ly1grmgwd9xb6j30b40b4dfq.jpg",
				avatarUrl2: "https://wx3.sinaimg.cn/mw690/0081OvH6ly8grt72ppl04j30ro0ro760.jpg",
				userInfo: {},
				num1:0,
				num2:0,
				num3:0
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
				this.getProNum(this.$data.userInfo.id);
			},
			getProNum(uid){
				productModel.getUserProduct12Num(uid,(res)=>{
					this.num1 = res;
				});
				productModel.getBuyerProduct3Num(uid,(res)=>{
					this.num2 = res;
				});
				productModel.getSellerProduct3Num(uid,(res)=>{
					this.num3 = res;
				});
			},
			goLogin: function() {
				if (!this.login) {
					uni.navigateTo({
						url: 'login/login'
					})
				}
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
			  toMyProduct(idx){
				  let uid = this.userInfo.id;
				  uni.navigateTo({
				  	url:"/pages/my/my_product/my_product?idx="+idx + '&uid='+uid
				  })
			  }

		}
	}
</script>

<style>



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
