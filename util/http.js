import {config} from '@/config.js'

class Http{
	request(params){
		if(!params.method){
			params.method = "GET";
		}
		let api_base_url = config.api_base_url1;
		if(params.api == 2){
			api_base_url = config.api_base_url2;
		}
		uni.request({
			url:api_base_url + params.url,
			method:params.method,
			data:params.data,
			header:params.header,
			success: (res) => {
				let code = res.statusCode.toString();
				if(code.startsWith("2")){
					params.success && params.success(res.data)
				}else{
					// uni.showToast({
					// 	title:'请求错误',
					// 	icon:'none'
					// })
				}
			},
			fail: err => {
				
			}
		})
	}
}
export {Http}