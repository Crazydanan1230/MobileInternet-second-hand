<template>
	<view  class="container">
		<view @click="onClick()">
			<button size="mini">{{startCountDown ? count + 's后重新获取':'获取验证码'}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"idf-button",
		props:{
			countDownNum: {
				type: Number,
				default: 10
			},
			readOnly:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				count: this.countDownNum,
				countDownText: '后重新获取',
				startCountDown:false,
				timer: {}
			};
		},
		watch: {
			count(val) {
				if (val === 0) {
					clearInterval(this.timer)
					this.startCountDown = false
					this.count = this.countDownNum
				}
			},
			readOnly(val) {
				// console.log(this.readOnly)
				if(this.readOnly){
					this.count = 0;
					this.startCountDown = false;
				}
			}
		},
		methods:{
			onClick(e) {
				//正在倒计时或者验证码只读时，不触发点击事件
				if (this.startCountDown || this.readOnly) {
					return;
				}
				uni.$emit('idf-click', e);
				this.startCountDown = true
				this.timer = setInterval(()=>{
					this.count--;
				}, 1000);
			}
		}
		
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
</style>
