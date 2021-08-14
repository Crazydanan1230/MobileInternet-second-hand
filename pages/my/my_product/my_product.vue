<template>
	<view >
		<view  v-for="(item,pid) in productList" :key="pid">
		 <hm-card :seller="item.seller" :uid="uid" :name="item.name" :price="item.price" :address="item.address" :img="item.img"></hm-card>
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
			uni.$on('confirm-click',()=>{
				this.clickConfirm();
			})
			let status = event.status;
			let uid = event.uid;
			this.uid = uid;
			console.log(uid);
			console.log(status);
			//我的发布
			if(event.status == 0){
				
			}
			//交易中
			if(event.status == 1){
				this.getUserProduct12(uid);
			}
			//买到的
			if(event.status == 2){
				this.getBuyerProduct3(uid);
			}
			//卖出的
			if(event.status == 3){
				this.getSellerProduct3(uid);
			}
		},
		onShow(event) {
			
		},
		data() {
			return {
				title:'',
				productList:[],
				uid:0
			}
		},
		methods: {
			clickConfirm(){
				console.log('收货成功')
			},
			getUserProduct12(uid){
				productModel.getUserProduct12(uid,(res)=>{
					this.productList = res;
					console.log(res)
				});
			},
			getBuyerProduct3(uid){
				productModel.getBuyerProduct3(uid,(res)=>{
					this.productList = res;
				});
			},
			getSellerProduct3(uid){
				productModel.getSellerProduct3(uid,(res)=>{
					this.productList = res;
				});
			}
		}
	}
</script>

<style>

</style>
