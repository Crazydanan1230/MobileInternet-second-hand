<template>
	<view>
		<form @submit="formSubmit" @reset="">
			<!-- 标题 -->
			<view class="cu-form-group margin-top">
				<view class="title">标题</view>
				<input v-model="productName" placeholder="品类品牌型号都是买家喜欢搜索的"></input>
			</view>
			<!-- end -->

			<!-- 内容 -->
			<view class="cu-form-group margin-top">
				<textarea v-model="content" maxlength="1000" placeholder="描述宝贝的转手原因,入手渠道和使用感受"></textarea>
			</view>
			<!-- end -->

			<!-- 图片 -->
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/5
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
						:data-url="imgList[index]">
						<image :src="imgList[index]" mode='aspectFill'></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length < 1">
						<text class="cuIcon-cameraadd"></text>
					</view>
				</view>
			</view>
			<!-- end -->

			<!-- 地址选择 -->
			<view class="cu-form-group margin-top">
				<view class="title">地址</view>
				<input v-model="address" placeholder="建议填写宿舍号"></input>
			</view>
			<!-- end -->

			<!-- 价钱 -->
			<view class="cu-form-group margin-top">
				<view class="title">出售价:</view>
				<input type="digit" @input="moneyInput" :value="money" placeholder="请输入价钱" maxlength='7'
					name="newPrice"></input>
			</view>
			<!-- end -->

			<!-- 选择分类  -->
			<view class="cu-form-group">
				<view class="title">分类:</view>
				<input disabled="true" name="classify" :value='classify'></input>
				<button class="cu-btn  bg-green" role="button" aria-disabled="false" @tap="showModal"
					data-target="DrawerModalL">选择</button>
			</view>
			<!-- end -->
			<!-- 交易方式 -->
			<view class="cu-form-group">
				<view class="title">交易方式</view>
				<checkbox-group name="means" @change="checkboxChange">
					同校面交
				</checkbox-group>

			</view>
			<!-- end -->

			<!-- 确定发布 -->
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" form-type="submit">确定发布</button>
			</view>
			<!-- end -->
		</form>

		<!-- 模态框 -->
		<view @touchmove.stop="modeMove" class=" cu-modal drawer-modal justify-start "
			:class=" modalName == 'DrawerModalL'?'show':'' " @tap="hideModal">
			<scroll-view scroll-with-animation='true' scroll-y='true' class="cu-dialog basis-lg">
				<view class="cu-list menu text-left">
					<view class="cu-item " v-for=" (item,index) in  picker" :key="index" @tap="getClassify"
						:data-name="item.classify_name" :data-value="item.classify_id">
						<view class="content">
							<view>{{item.classify_name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import allSchool from "../../common/allSchool.js";
	export default {
		data() {
			return {
				address: '',
				productName: '',
				content: '',
				filePath: '',
				fileName: '',
				modalName: '', //模态框开关
				picker: [{
						classify_id: 1,
						classify_name: '图书'
					},
					{
						classify_id: 2,
						classify_name: '服饰'
					},
					{
						classify_id: 3,
						classify_name: '电子'
					},
					{
						classify_id: 4,
						classify_name: '其他'
					}
				],
				itemListsIndex: 0, //几层新下标（默认全新）
				itemLists: ['全新', '99新', '95新', '85新', '8新'], //几次新
				classify: '', //分类选择默认
				money: '', //出售价
				imgList: [], //图片上传
			}
		},
		methods: {

			formSubmit() {
				console.log(111);
				console.log(this.$data.filePath);
				console.log(this.$data.fileName);
				//调用图片上传接口
				if (this.$data.filePath) {
					uni.uploadFile({
						url: 'http://yucheng13.ltd:7001/admin/file/uploadimagebyajax',
						filePath: this.$data.filePath,
						name: this.$data.fileName,
						success: (uploadFileRes) => {
							console.log(2222)
							console.log(uploadFileRes)
							console.log('http://yucheng13.ltd:7001' + JSON.parse(uploadFileRes.data).url);
						}
					});
				}
				
				console.log(this.productName)
				console.log(this.content)
				console.log(this.address)
				console.log(this.money)
				console.log(this.classify_id)
			},


			// 图片上传
			ChooseImage() {
				uni.chooseImage({
					count: 5, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res.tempFilePaths[0]);
						console.log(res.tempFiles[0].name);
						this.$data.filePath = res.tempFilePaths[0];
						this.$data.fileName = res.tempFiles[0].name;
						//调用图片上传接口


						if (this.imgList.length != 0) {
							this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			// 删除照片
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这个照片吗？',
					cancelText: '再看看',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
							this.imgList = this.imgList;
							this.$data.filePath = '';
							this.$data.fileName = '';
						}
					}
				})
			},

			//限制只能到小数点2位
			moneyInput: function(e) {
				var money;
				if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
					money = e.detail.value;
				} else {
					money = e.detail.value.substring(0, e.detail.value.length - 1);
				}
				this.money = money;
			},

			//原价验证
			newInput: function(e) {
				var money;
				if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
					money = e.detail.value;
				} else {
					money = e.detail.value.substring(0, e.detail.value.length - 1);
				}
				this.newMoney = money;
			},


			// 选择交易方式
			checkboxChange: function(e) {
				console.log(e);
				//获取选择状态
				var item = this.checkboxs,
					values = e.detail.value;
				for (var i = 0; i < item.length; i++) {
					item[i].checked = false; //初始化选择状态
					for (var j = 0; j < values.length; j++) {
						if (item[i].value == values[j]) {
							item[i].checked = true;
							break;
						}
					}
				}


			},

			// 新旧程度
			newState: function(e) {
				var that = this;
				uni.showActionSheet({
					itemList: that.itemLists,
					success(e) {
						that.itemListsIndex = e.tapIndex
					}
				})
			},
			// 拦截模态框滚动事件
			modeMove: function() {

			},

			// 显示分类模态框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			// 隐藏分类模态框
			hideModal(e) {
				this.modalName = null
			},
			// 得到分类的值
			getClassify: function(e) {
				this.classify = e.currentTarget.dataset.name,
				this.classify_id = e.currentTarget.dataset.value
				this.hideModal();
			},
		},
		onLoad(options) {

		},
		onShow() {

		},
		onHide() {

		},
		// 出发下拉刷新
		onPullDownRefresh() {
			// 模拟刷新完成
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style>
	.rule {
		display: flex;
		justify-content: space-between;
	}

	.margin-top-xl-170 {
		margin-top: 170rpx;
	}
</style>
