import {Http} from '@/util/http.js'

class ClassicModel extends Http{
	getFavClassics(token,uid,sCallback){
		this.request({
			url:`classic/${uid}/preview`,
			header:{
				token:token
			},
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getLatest(sCallback){
		this.request({
			url:'classic/latest',
			success:(res)=>{
				sCallback(res);
				this._setLatestIndex(res.index)
				uni.setStorageSync(this._getKey(res.index),res);
			}
		});
	}
	getClassic(index,opt,sCallback){
		if(opt == 'previous'){
			index = index - 1;
		}else{
			index = index + 1;
		}
		let res = uni.getStorageSync(this._getKey(index));
		if(!res){
			this.request({
				url:'classic/' + index,
				success:(res)=>{
					sCallback(res);
					uni.setStorageSync(this._getKey(res.index),res);
				}
			});
		}else{
			sCallback(res);
		}
		
	}
	isFirst(index){
		return index == 1;
	}
	isLatest(index){
		return index == this._getLatestIndex();
	}
	_setLatestIndex(index){
		uni.setStorageSync("latestIndex",index);
	}
	_getLatestIndex(){
		return uni.getStorageSync("latestIndex");
	}
	_getKey(index){
		return "classic" + index;
	}
}
export {ClassicModel}