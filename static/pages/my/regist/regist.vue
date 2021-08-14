<template>
	<view class="zai-box">
		<image src="@/static/login/register.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">二手交易</view>
		<view class="zai-form">
			<input class="zai-input"  v-model="email" placeholder="请输入邮箱" />
						<view class="zai-but" @click="sendIdCode"><button size="mini">{{send?'已发送':'发送验证码'}}</button></view>
			<input class="zai-input"  v-model="idCode" password placeholder="请输入验证码"/>
			<input class="zai-input"  v-model="password" password placeholder="请输入密码"/>
			<button @click="regist" class="zai-btn">立即注册</button>
			<navigator url="../login/login" hover-class="none" class="zai-label">已有账号，点此去登录.</navigator>
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
				password:'',
				password2:'',
				send:false,
				idCode:''
			}
		},
		onLoad() {
	
		},
		methods: {
			sendIdCode:function(){
				userModel.sendIdCode(this.$data.email,(res)=>{
					console.log(res);
					if(res.code == 0){
						//已注册
						uni.showToast({
							title: res.msg,
							icon: 'error',
							duration: 2000
						});
						return;
					}
					this.$data.send = true;
					uni.setStorageSync('idCode',res.data.code);
				})
			},
			regist:function(){
				if(!this.$data.email || !this.$data.password|| !this.$data.idCode){
					uni.showToast({
						title: '确保每项不能为空',
						icon:'none',
						duration: 2000
					});
					return;
				}
				console.log(this.$data.idCode)
				console.log(uni.getStorageSync('idCode'))
				if(this.$data.idCode != uni.getStorageSync('idCode')){
					uni.showToast({
						title: '验证码错误',
						icon:'error',
						duration: 2000
					});
					return;
				}
				uni.removeStorageSync('idCode');
				userModel.regist(this.$data.email,this.$data.password,(res)=>{
					console.log(res)
					let title = res.msg;;
					let icon = '';
					if(res.code == 1){
						icon = 'success';
					}else{
						icon = 'error';
					}
					uni.showToast({
						title: title,
						icon: icon,
						duration: 2000
					});
				});
			}
		}
	}
</script>

<style>
	.zai-but{
		padding: 0 20upx;
		text-align:right;
		background-color: #FFFFFF;
	}
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
	.zai-label{
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
		margin-top: 60upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
