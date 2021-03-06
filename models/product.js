import {Http} from '@/util/http.js'

class ProductModel extends Http{
	modifyProStatus(pid,status,uid,sCallback){
		this.request({
			api:2,
			method:'PUT',
			url: 'product/' + pid + '/' + status + '/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getUserProduct0(uid,sCallback){
		this.request({
			api:2,
			url: 'products0/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getUserProduct12(uid,sCallback){
		this.request({
			api:2,
			url: 'userproducts12/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getBuyerProduct3(uid,sCallback){
		this.request({
			api:2,
			url: 'buyerproducts3/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getSellerProduct3(uid,sCallback){
		this.request({
			api:2,
			url: 'sellerproducts3/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getUserProduct12Num(uid,sCallback){
		this.request({
			api:2,
			url: 'userproducts12Num/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getBuyerProduct3Num(uid,sCallback){
		this.request({
			api:2,
			url: 'buyerproducts3Num/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getSellerProduct3Num(uid,sCallback){
		this.request({
			api:2,
			url: 'sellerproducts3Num/' + uid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getProBypid(pid,sCallback){
		this.request({
			api:2,
			url: 'product/' + pid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getAllProducts(sCallback){
		this.request({
			api:2,
			url: 'products',
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	getClassifyPros(cid,sCallback){
		this.request({
			api:2,
			url: 'products/'+cid,
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	issueProduct(option,sCallback){
		this.request({
			api:2,
			url: 'product',
			method:'POST',
			data:{
				name : option.name,
				price : option.price,
				content : option.content,
				cid : option.cid,
				img : option.img,
				address : option.address,
				uid : option.uid
			},
			success:(res)=>{
				sCallback(res);
			}
		});
	}
}
export {ProductModel}