<template>
	<view  class="container">
		<view @click="onClick()">
			<button size="mini">{{readOnly ? content1:content2}}</button>
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
			content1:String,
			content2:String
		},
		data() {
			return {
				
			};
		},
		methods:{
			onClick(e) {
				if (this.readOnly) {
					return;
				}
				uni.$emit('confirm-click', e);
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
