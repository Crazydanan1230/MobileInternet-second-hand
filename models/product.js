import {Http} from '@/util/http.js'

class ProductModel extends Http{
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
	regist(email,password,sCallback){
		this.request({
			url: 'user/register',
			method:'POST',
			data:{
				email:email,
				password:password
			},
			success:(res)=>{
				sCallback(res);
			}
		});
	}
}
export {ProductModel}