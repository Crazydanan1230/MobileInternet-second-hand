<template>
	<view class="zai-box">
		<image src="@/static/login/login.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">二手交易</view>
		<view class="zai-form">
			<input class="zai-input" v-model="email" placeholder="请输入邮箱" />
			<input class="zai-input" v-model="password" password placeholder="请输入密码"/>
			<navigator url="../forget/forget"class="zai-label1">忘记密码 </navigator>
<!-- 			<view class="zai-label" ></view> -->
			<button  @click="login" class="zai-btn">立即登录</button>
			<navigator url="../regist/regist" hover-class="none" class="zai-label2">还没有账号？点此注册.</navigator>
		</view>
	</view>
</template>

<script>
	import {
		UserModel
	} from '@/models/user.js';
	let userModel = new UserModel();
	export default {
		data() {
			return {
				email:'',
				password:''
			}
		},
		onLoad() {
	
		},
		methods: {
			login:function(){
				userModel.login(this.$data.email,this.$data.password,(res)=>{
					console.log(res)
					let title = res.msg;;
					let icon = '';
					if(res.code == 1){
						icon = 'success';
					}else{
						icon = 'none';
					}
					uni.showToast({
						title: title,
						icon: icon,
						duration: 2000
					});
					if(res.code != 1){
						return;
					}
					console.log(res.data[0])
					uni.setStorageSync('userInfo',res.data[0]);
					uni.switchTab({
						url:'../my'
					})
				});
			}
		}
	}
</script>

<style>
	.zai-box{
		padding: 0 100upx;
		position: relative;
		background-color: #FFFFFF;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-form{
		margin-top: 300upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label1{
		padding: 20upx 10upx;
		text-align: right;
		font-size: 30upx;
		color: #000000;
	}
	.zai-label2{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
