<template>
	<view >
		<view  v-for="(item,pid) in productList" :key="pid">
		 <hm-card :pid="item.pid" :status="item.status" :hideContent="hideContent" :seller="item.seller" :uid="uid" :name="item.name" :price="item.price" :address="item.address" :img="item.img"></hm-card>
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
			uni.$on('sendGoods',(e)=>{
				this.modifyProStatus(e.pid,e.status + 1,this.uid);
			})
			let idx = event.idx;
			let uid = event.uid;
			this.uid = uid;
			console.log(uid);
			console.log(idx);
			//我的发布
			if(event.idx == 0){
				this.getUserProduct0(uid);
			}
			//交易中
			if(event.idx == 1){
				this.getUserProduct12(uid);
			}
			//买到的
			if(event.idx == 2){
				this.getBuyerProduct3(uid);
			}
			//卖出的
			if(event.idx == 3){
				this.getSellerProduct3(uid);
			}
		},
		onShow(event) {
			
		},
		data() {
			return {
				title:'',
				productList:[],
				uid:0,
				hideContent:false
			}
		},
		methods: {
			modifyProStatus(pid,status,uid){
				productModel.modifyProStatus(pid,status,uid,(res)=>{
					if(status == 2){
						uni.showToast({
							title: '发货成功',
							icon:'success',
							duration: 2000
						});
					}else if(status == 3){
						uni.showToast({
							title: '收货成功',
							icon:'success',
							duration: 2000
						});
					}
				});
			},
			getUserProduct0(uid){
				productModel.getUserProduct0(uid,(res)=>{
					this.productList = res;
					console.log(res)
					this.hideContent = true;
				});
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
