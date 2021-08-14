<template>
	<view >
		<view  v-for="(item,index) in 5" :key="index">
		 <hm-card title="买到的"></hm-card>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(event) {
			this.cid = event.cid;
		},
		data() {
			return {
				title:'',
				cid:0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
