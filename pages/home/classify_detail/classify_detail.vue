<template>
	<view >
		<view class='card-menu container margin-top ' v-for="(item,pid) in productList" :key="pid">
		  <view @click="toProDetial(item.pid)">
			  <pro-card :options="item"></pro-card>
		  </view>
		</view>
	</view>
</template>

<script>
	import {
		ProductModel
	} from '@/models/product.js';
	let productModel = new ProductModel();
	export default {
		onLoad(event) {
			let cid = event.cid;
			this.getClassifyPros(cid);
		},
		data() {
			return {
				title:'',
				productList:[]
			}
		},
		methods: {
			getClassifyPros(cid){
				productModel.getClassifyPros(cid,(res)=>{
					console.log(res);
					this.productList = res;
				});
			}
		}
	}
</script>

<style>
	.container {
	  margin-left: 29rpx;
	  margin-right: 20rpx;
	  float: left;
	  height: 400rpx;
	  width: 43%;
	  background: white;
	  margin-bottom: 20rpx;
	}
</style>
