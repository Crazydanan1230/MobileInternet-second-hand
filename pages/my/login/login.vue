<template>
	<view class="zai-box">
		<image src="@/static/login/logo.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-form">
			<input class="zai-input" v-model="email" placeholder="请输入邮箱" />
			<input class="zai-input" v-model="password" password placeholder="请输入密码"/>
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
				if(!this.$data.email || !this.$data.password){
					uni.showToast({
						title: '确保每项不能为空',
						icon:'none',
						duration: 2000
					});
					return;
				}
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
		height: 1240rpx;
		background-color: #FFFFFF;
	}
	.zai-logo{
		margin-top: 60rpx;
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-form{
		margin-top: 220upx;
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
		margin-top: 60rpx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
