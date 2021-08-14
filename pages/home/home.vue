<template>
	<!-- <bar></bar> -->
<view class="">
	
<!-- 轮播图 -->
<swiper class="screen-swiper square-dot " :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
<!-- 轮播图end -->

<!-- 宫格列表 -->
<view class="cu-list no-border grid  card-menu "  :class="['col-' + gridCol]" >
    <view class="cu-item" v-for="(item,index) in iconList" :key="index" v-if="index<gridCol*2">
		<view @click="toClassifyDetail(item.cid)">
	   <view :class=" ['cuIcon-' + item.icon,'text-'+item.color] " >
      </view>
      <text>{{item.name}}</text>
	  </view>
    </view>
  </view>
<!-- 宫格列表end -->

<!-- 点击回到顶部 -->
<view class='goTop'>
<image src='../../static/img/top_top.png'  v-if="!showTop" @click='goTop'></image>
</view>
<!-- end -->

 <!-- 内容 -->
<view class='card-menu container margin-top ' v-for="(item,pid) in productList" :key="pid">
  <view @click="toProDetial(item.pid)">
	  <pro-card :options="item"></pro-card>
  </view>
</view>

</view>
</view>

</template>

<script>
	import bar from "../component/bar.vue";
	import TopBar from "../component/topTab.vue";
	import {
		ProductModel
	} from '@/models/product.js';
	let productModel = new ProductModel();
	export default {
		data() {
			return {
				  // 导航条
				    TabCur: '0',
				    scrollLeft: 0,
				  // 导航条end
				 scrollTop:0,//屏幕位置
				 TabCurTab:0,//吸附置顶的偏差值
				 ceil_top:'',//导航条置顶高度
				 //商品列表
				 productList:[],
				 // 轮播图
				    cardCur: 0,
				    swiperList: [{
				      id: 0,
				      type: 'image',
				      url: 'http://trustcdn.baidu.com/comt/1626947899_f7326df47a4d93c6a979faefa9c0ce8f.jpeg'
				    }, {
				      id: 1,
				      type: 'image',
				      url: 'http://trustcdn.baidu.com/comt/1626947948_c4562dab46a4024afb666211c317dc23.jpeg',
				    }, {
				      id: 2,
				      type: 'image',
				      url: 'http://trustcdn.baidu.com/comt/1626947932_8d08b9338aeaa7f75fc5f755bcfad541.jpeg'
				    }],
				    // 轮播图end
					// 宫格列表
					    iconList: [{
						  cid: 1,
					      icon: 'cardboardfill',
					      color: 'red',
					      badge: 120,
					      name: '图书'
					    }, {
						  cid: 2,
					      icon: 'recordfill',
					      color: 'orange',
					      badge: 1,
					      name: '服饰'
					    }, {
						  cid: 3,
					      icon: 'picfill',
					      color: 'yellow',
					      badge: 0,
					      name: '电子'
					    }, {
						  cid: 4,
					      icon: 'noticefill',
					      color: 'olive',
					      badge: 22,
					      name: '其他'
					    }],
					    gridCol: 5,
						showTop:false,//异常
			}
		},
		components:{
			bar,
			TopBar
		},
		onLoad:function(){
			
		},
		onShow:function(){
			this.getAllProducts();
		},
		//上拉刷新
		onPullDownRefresh:function() {
			//模拟加载完成
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		//上拉刷新
		onReachBottom:function(){
			console.log("下拉刷新事件");
			
		},
		methods: {
			getAllProducts(){
				productModel.getAllProducts((res)=>{
					this.productList = res;
				});
			},
			toProDetial(pid){
				// console.log(pid)
				uni.navigateTo({
					url:'home_detail/home_detail?pid='+pid
				})
			},
			toClassifyDetail(cid){
				console.log(cid)
				uni.navigateTo({
					url:'classify_detail/classify_detail?cid='+cid
				})
			},
			// 导航条点击
			  tabSelect(e) {
			      this.TabCur = e.currentTarget.dataset.id
			    
			  },
			    // 点击回到顶部
			    onPageScroll: function (e) {
			      // console.log(e)
			        // this.setData({
			        //   scrollTop: e.scrollTop
			        // })
					this.scrollTop = e.scrollTop
			      
			      if (e.scrollTop > 500) {
					this.showTop = false;
			      } else {
					this.showTop = true;
			      }
			    },
				  goTop: function () {
				    uni.pageScrollTo({
				      scrollTop: 0,
				      duration: 300
				    })
				  },
				  //end
				  
				
				// 吸附自顶的高度
				    SelectorQuery: function () {
				      var that = this;
				      const query = wx.createSelectorQuery()
				      query.select('#navTab').boundingClientRect()
				      query.selectViewport().scrollOffset()
				      query.exec(function (res) {
				        console.log(res);
				          // ceil_top: res[0].top - res[0].height - res[0].height
						 
				      })
				    },
					
			
				

		}
	}
</script>

<style>
	
	
	/* 吸附置顶 */
	.navTab{
	  position: fixed;
	  z-index: 9999;
	  top: 0;
	}
	/* end */
	
	/* 搜索 */
	
	.search_img {
	  margin-right: 30rpx;
	}
	
	
	
	.locaWidth {
	  width: 21%;
	}
	
	/* end */
	
	/* 内容 */
	
	.container {
	  margin-left: 29rpx;
	  margin-right: 20rpx;
	  float: left;
	  height: 400rpx;
	  width: 43%;
	  background: white;
	  margin-bottom: 20rpx;
	}
	
	
	
	/* end */
	
	
	
	/* 滚动的title */
	
	.swiperitem {
	  background: #fff;
	  height: 40px;
	  margin-left: 30rpx;
	  margin-right: 30rpx;
	}
	
	/* end */
	
	.cu-list.grid.no-border {
	  border-radius: 30rpx;
	}
	
	/* 3布局 */
	
	
	.canui-xzwz {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 1;
	}
	
	
	.canui-duotu {
	  padding: 20rpx 30rpx;
	  padding-left: 380rpx;
	  padding-bottom: 30rpx;
	  position: relative;
	  display: flex;
	}
	
	.canui-dtimg-a {
	  position: absolute;
	  left: 30rpx;
	  width: 344rpx;
	  height: 348rpx;
	}
	
	.canui-dtimg-b {
	  height: 348rpx;
	  width: 100%;
	}
	
	.canui-dtimg-ba, .canui-dtimg-bb {
	  height: 172rpx;
	}
	
	.canui-dtimg-bb {
	  margin-top: 5rpx;
	}
	
	.canui-dtimg-content {
	  position: relative;
	}
	
	.canui-dtimg-content, .canui-duotu image {
	  width: 100%;
	  height: 100%;
	}
	
	
	.canui-dtimg-text {
	  position: absolute;
	  bottom: 0px;
	  background: rgba(0, 0, 0, 0.4);
	  height: 60rpx;
	  line-height: 60rpx;
	  padding: 0 15rpx;
	}
	
	.canui-dtimg-text .text-white {
	  float: left;
	  width: auto;
	  max-width: 210rpx;
	  margin-right: 10rpx;
	  color: #aaa;
	}
	
	.canui-dtimg-text .text-price {
	  float: right;
	}
	
	.canui-dtimg-a .canui-dtimg-text {
	  border-radius: 0 0 0 10rpx;
	}
	
	.canui-dtimg-b .canui-dtimg-text .text-white {
	  max-width: 150rpx;
	}
	
	.cu-card>.cu-item {
	  margin-top: 0rpx;
	}
	
	.cu-card>.margin-top {
	  margin-top: 30rpx;
	}
	
	/* end */
	
	/* 点击回到顶部 */
	
	.goTop image {
	height: 60rpx;
	width: 60rpx;
	border-radius: 100%;
	position: fixed;
	bottom: 150rpx;
	right: 60rpx;
	z-index: 10000;
	}
	
	/* end */
	
	/* 撑高线条 */
	.lines{
	  display: flex;
	  width: 100%;
	  height: 150rpx;
	}
	/* end */
	
	/* 页脚 */
	.foot{
	  display: flex;
	  padding: 10rpx;
	  align-items: center;
	  justify-content:space-between;
	}
	.foot-1{
	  width: 35%;
	  height: 1rpx;
	  background: gainsboro;
	}
	/* end */
	
	/* 登陆按钮 */
	.loginButton{
	  width: 100%;
	}
	/* end */

</style>
