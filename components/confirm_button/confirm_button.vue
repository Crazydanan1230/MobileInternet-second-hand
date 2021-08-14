<template>
	<view  class="container">
		<view @click="onClick()">
			<button size="mini">{{content}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"confirm_button",
		props:{
			readOnly:{
				type:Boolean,
				default:true
			},
			content:String
		},
		data() {
			return {
				
			};
		},
		methods:{
			onClick() {
				if (this.readOnly) {
					return;
				}
				uni.$emit('confirm-click');
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
