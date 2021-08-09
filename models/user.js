import {Http} from '@/util/http.js'

class UserModel extends Http{
	sendIdCode(email,sCallback){
		this.request({
			url: 'user/sendEmail',
			method:'POST',
			data:{
				email:email
			},
			success:(res)=>{
				sCallback(res);
			}
		});
	}
	login(email,password,sCallback){
		this.request({
			url: 'user/login',
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
export {UserModel}