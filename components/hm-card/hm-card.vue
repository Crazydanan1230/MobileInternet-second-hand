<template>
  <view class="hm-goods-card">
    <view class="box">
		<view class="container">
		  <view class="goods">
			<view class="wrap"><image class="img" :src="img" /></view>
			<view class="block">
			  <text class="name">{{ name }}</text>
			  <text class="price">￥{{ price }}</text>
			  <text class="address">{{ address }}</text>
			</view>
		  </view>
		  <view class="btn">
		  <confirm_button :readOnly="readOnly" :content1="content1" :content2="content2"></confirm_button>
		  </view>
	   </view>
      <view  />
     <view class="submain" />
    </view>
  </view>
</template>
<script>
export default {
  name: 'hm-card',
  props: {
	  uid:0,
	  seller:0,
	  img:String,
	  name: String,
	  price: Number,
	  address: String,
	  
  },
  data() {
    return {
		readOnly:true,
		content1: '',
		content2: '',
	};
  },
  created() {
  	this.sign();
  },
  methods: {
	  sign(){
		  if(this.seller == this.uid){
			  this.content1='去发货';
			  this.content2='待收货';
		  }else{
			  this.content1='待发货';
			  this.content2='确认收货';
		  }
	  }
  }
};
</script>
<style>
.btn{
	position:absolute;
	left: 530rpx;
	margin-top: 80rpx;
}
.container{
	width: 750rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.hm-goods-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 322.08rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 13.64rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 315.16rpx;
}




.goods {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 62.34rpx;
  margin-left: 58.44rpx;
  width: 500rpx;
  height: 194.81rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #eeeff3;
  width: 194.81rpx;
  height: 194.81rpx;
  overflow: hidden;
}

.img {
  width: 194.81rpx;
  height: 194.81rpx;
}

.block {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 142.21rpx;
}

.name {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.price {
  position: relative;
  opacity: 1;
  margin-top: 7.79rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ED1C24;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.address {
  position: relative;
  opacity: 1;
  margin-top: 17.53rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.row {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.row2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.submain {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.main {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}
</style>
