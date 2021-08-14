<template>
	<view>
		<!-- 商家信息 -->
		
		<view class="bg-white ">
		  <view class=" cf padding-sm">
		    <view class="radius fl padding-sm ">
		      <image src='https://wx1.sinaimg.cn/orj360/c5db584fgy1gtd2rkau0ej20m80m80u9.jpg'></image>
		      <view class="fr padding-name">
		        <view>卖家ID：{{product.seller}}</view>
		      </view>
		    </view>
		    <view class=" fr padding-time ">
				<text>发布时间：</text><br>
		      <text>{{time}}</text>
		    </view>
		  </view>
		</view>
		
		<!-- 商家信息end -->
		
		<!-- 商品内容 -->
		<view class='contanier bg-white padding-sm top-20' >
		  <view class='price'>
		    <text class='price-symbol'>￥</text>
		    <text class='price-size'>{{product.price}}</text>
		  </view>
		
		  <view class='bg-white top-20 font-size'>
		    <text>
		{{product.content}}
		</text>
		  </view>
		
		  <!-- 地址 -->
		  <view class='hint'>
		    <text>交易地点:{{product.address}}</text>
		  </view>
		  <!-- end -->
		
		  <!-- 图片位置 -->
		   <image class='img' :src='product.img'></image>
		  <!--图片位置end  -->
		
		  <view class='browse'>
		    <view>
		      <text></text>
		      <!-- <text>担保交易</text> -->
		    </view>
		    <view class="text-gray text-sm text-right padding-browse">
		      <text class="cuIcon-attentionfill margin-lr-xs"></text> 10
		      <text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
		      <text class="cuIcon-messagefill margin-lr-xs"></text> 30
		    </view>
		
		  </view>
		
		</view>

		
		<!-- end -->
		
		
		<!-- 操作选项卡 -->
		  <view class="cu-bar bg-white tabbar border shop fixation">

		   <button class="action"  @click='toChat'>
		      <view class="cuIcon-service text-green">
		        <view class="cu-tag badge"></view>
		      </view>
		      聊一聊
		    </button>
		  <view class="action">
		      
		    </view>
		
		    <view class="bg-red submit margin-rigth-20" @tap="buy">立即购买</view>
		  </view>
		<!-- end -->
		
	</view>
</template>

<script>
	import {
		ProductModel
	} from '@/models/product.js';
	let productModel = new ProductModel();
	export default {
		onLoad(event) {
			let pid = event.pid;
			this.pid = pid;
			this.userInfo = uni.getStorageSync('userInfo');
			this.getProBypid(pid);
		},
		data() {
			return {
				  url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				  product:{},
				  time:'',
				  pid:0,
				  userInfo:{}
			}
		},
		methods: {
			getProBypid(pid){
				console.log(pid)
				productModel.getProBypid(pid,(res)=>{
					console.log(res)
					this.product = res;
					this.time = res.createdAt.substring(0,10);
				})
			},
			// 点击跳转订单详细页面
			buy(){
				let uid = this.userInfo.id;
				if(!uid){
					uni.showToast({
						title: '请先登录',
						icon:'none',
						duration: 1000
					});
					return;
				}
				if(uid == this.product.seller){
					uni.showToast({
						title: '不能购买自己发布的宝贝-_-',
						icon:'none',
						duration: 1000
					});
					return;
				}
				productModel.modifyProStatus(this.pid,1,uid,()=>{
					uni.showToast({
						title: '购买成功',
						icon:'success',
						duration: 2000
					});
				});
			},
			toChat(){
				uni.showToast({
					title: '未实现',
					icon:'none',
					duration: 1000
				});
			}
		}
	}
</script>

<style>
/* 商家信息 */

.padding-name{
  padding-top: 25rpx;
  padding-left: 20rpx;
}
.padding-name text{
  color: gray;
  font-size: 20rpx;
}
.fl image{
  width: 100rpx;
  height: 100rpx;
  border-radius: 100%;
}
.padding-time{
	font-size: 30rpx;
  padding-top: 45rpx;
}
text-title-size{
  font-size: 50rpx;
  color: gray;
}
/* 商家信息end */

/* 商品内容 */
.top-20{
margin-top: 20rpx;
}

.price-size{
  font-size: 50rpx;
  color: red;
}
.price-symbol{
  font-size: 20rpx;
  color: red;
}
.price-ori{
  margin-left: 25rpx;
  text-decoration: line-through;
}
.font-size text{
  font-size: 35rpx;
  color: black;
}
.hint{
  margin-top: 20rpx;
  color: black;
  font-size: 40rpx;
}
.img{
  margin-top: 10rpx;
  width: 100%;
  height: 800rpx;
}
.cu-tag{
  margin-left: 20rpx;
  /* padding: 0rpx; */
  font-size: 22rpx;
}
.browse{
  display: flex;
  justify-content: space-between;
}
.browse-tiem{
  font-size: 23rpx;
  color: gray;
}
.padding-browse{
  padding: 10rpx;
}
/* 商品内容end */

/* 商家信息 */
.in_regard_to{
  display: flex;
  align-items: center;
}
.in_regard_to image{
  width: 50rpx;
  height: 65rpx;
}
.in_regard_to_text{
  font-size: 35rpx;
  color: black;
  font-family: inherit;
}
.top-30{
  margin-top: 30rpx;
  
}
.Business_information{
  /* width: 30%; */
  padding: 5rpx;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

}
.information{
  /* border-top-left-radius: 5%;
  border-top-right-radius: 5%; */
  border-radius: 20rpx;
  padding: 10rpx;
  display: flex;
  justify-content: space-around;
}
.item-inline{
display: inline-block;
margin-right: 10rpx;
height: 150rpx;
width: 230rpx;
}

/* end */

/* 消息 */
.msg{
  display: flex;
}
.msg-conetent{
  margin-left: 30rpx;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 10rpx;
    width: 80%;
}
.msg-timer{
 padding-left: 20rpx;
}
.msg-timers{
  color: gray;
  font-size: 22rpx;
}
/* end */



/* 相似商品 */
.container{
  margin-left: 29rpx;
  margin-right: 20rpx;
  /* float: left; */
  height: 530rpx;
  width: 43%;
  background: white;
  margin-bottom: 20rpx;
  
}
.container_img image{
  height: 300rpx;
  width: 100%;
}
.container_text{
  color: black;
  padding: 10rpx;
  font-size: 23rpx;
}
.container_price{
  display: flex;
  justify-content: space-between;
  padding-left: 8rpx;
  padding-right: 8rpx;
}
.container_price_text_0{
  color: red;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.container_price_text_1{
  font-size: 22rpx;
}
.container_line{
  width: 100%;
  background: gainsboro;
  height: 1rpx;
  margin-top: 10rpx;
}
.container_user{
  margin-top: 20rpx;
  display: flex;
  line-height:50rpx;
}
.container_user image{
  margin-left: 10rpx;
  margin-right: 50rpx;
  height: 50rpx;
  width: 50rpx;
}
.container-flex{
  display: flex;
  flex-wrap: wrap;
}
/* end */

/* 底部操作选项卡 */
.fixation{
  position: fixed;
  bottom: 0rpx;
  width: 100%;
}
.margin-rigth-20{
  margin-right: 20rpx;
}
/* end */
</style>
