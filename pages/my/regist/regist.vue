<template>
	<view class="zai-box">
		<image src="@/static/login/logo.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-form">
			<input class="zai-input"  v-model="email" placeholder="请输入邮箱" />
			<view @click="onClickBefore" class="ifbutton"><idf-button :readOnly="email ? false : true"></idf-button></view>
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
				idCode:'',
			}
		},
		onLoad() {
			uni.$on('idf-click',()=>{
				this.sendIdCode();
			})
		},
		methods: {
			onClickBefore(){
				if(!this.$data.email){
					uni.showToast({
						title: "邮箱不能为空",
						icon: 'none',
						duration: 1000
					});
					return;
				}
			},
			sendIdCode:function(){
				userModel.sendIdCode(this.$data.email,(res)=>{
					console.log(res);
					if(res.code == 0){
						//已注册
						uni.showToast({
							title: res.msg,
							icon: 'none',
							duration: 1000
						});
						this.email = '';
						return;
					}
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
	.ifbutton{
		margin-top: 18rpx;
	}
	.zai-but{
		padding: 0 20upx;
		text-align:right;
		background-color: #FFFFFF;
	}
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
		margin-top: 20upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 40upx 0;
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
		margin-top: 30upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
