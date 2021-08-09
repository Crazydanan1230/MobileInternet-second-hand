import {Http} from '@/util/http.js'

class FavorModel extends Http{
	updateFavor(token,uid,behavior,index,sCallback){
		let option = behavior ? 'like':'dislike';
		let url = `favor/${uid}/${index}/${option}`;
		this.request({
			url: url,
			method:'PUT',
			header:{
				token:token
			},
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getFavorInfo(uid,index,sCallback){
		this.request({
			url: `favor/${uid}/${index}`,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	
}
export {FavorModel}