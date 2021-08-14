import {Http} from '@/util/http.js'

class ProductModel extends Http{
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
				address : option.address
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