<template>
	<view>
		<view class='container_img'><image :src='options.img'></image></view>
		<view class='container_text'><text class=''>{{options.name}}</text></view>
		<view class='container_price'><text class='container_price_text_0'>￥{{options.price}}</text></view>
		<view class='container_line'></view>
		<view class='container_user'>
		<image></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pro-card",
		props:{
			options: {
			  type: Object,
			  default: function() {
			    return {
			      name:'苹果',
			      price:99,
			      content:'wwww',
			      cid:1,
			      img:'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg',
			      address:'12B104'
			    };
			  }
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.container_img image {
	  height: 300rpx;
	  width: 100%;
	}
	
	.container_text {
	  color: black;
	  padding: 10rpx;
	  font-size: 23rpx;
	}
	
	.container_price {
	  display: flex;
	  justify-content: space-between;
	  padding-left: 8rpx;
	  padding-right: 8rpx;
	}
	
	.container_price_text_0 {
	  color: red;
	  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	
	.container_price_text_1 {
	  font-size: 22rpx;
	}
	
	.container_line {
	  width: 100%;
	  background: gainsboro;
	  height: 1rpx;
	  margin-top: 10rpx;
	}
	
	.container_user {
	  margin-top: 20rpx;
	  display: flex;
	  line-height: 50rpx;
	}
	
	.container_user image {
	  margin-left: 10rpx;
	  margin-right: 50rpx;
	  height: 100rpx;
	  width: 50rpx;
	}
</style>
