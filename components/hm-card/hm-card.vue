<template>
  <div class="hm-goods-card">
    <div class="box">
      <div class="goods">
        <div class="wrap"><image class="pic" :src="options.pic" /></div>
        <div class="block">
          <text class="tradeName">{{ options.tradeName }}</text>
          <text class="describe">{{ options.describe }}</text>
          <text class="commodity">{{ options.commodity }}</text>
        </div>
      </div>
      <div  />

     <div class="submain" />

    </div>
  </div>
</template>
<script>
export default {
  name: 'hm-card',
  props: {
    dataId: {
      type: String,
      default: 'hm-goods-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          pic:
            './images/img_25335_0_1.png',
          tradeName: '圆形户外搁脚凳',
          describe: '搁脚凳',
          commodity: '凳子',
        };
      }
    }
  },
  data() {
    return {
		
	};
  },
  methods: {}
};
</script>
<style>
.hm-goods-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 322.08rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 13.64rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 344.16rpx;
}




.goods {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 62.34rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #eeeff3;
  width: 194.81rpx;
  height: 194.81rpx;
  overflow: hidden;
}

.pic {
  width: 194.81rpx;
  height: 194.81rpx;
}

.block {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 142.21rpx;
}

.tradeName {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.describe {
  position: relative;
  opacity: 1;
  margin-top: 7.79rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.commodity {
  position: relative;
  opacity: 1;
  margin-top: 17.53rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.row {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.row2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.submain {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.main {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}
</style>
