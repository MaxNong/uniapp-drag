import apiConfig from './config.api.js'

let token = null;

const baseUrl = 'http://gk.aidreamai.cn';
function api (options) {
	getToken()
	if (!apiConfig[options.name]) return;
	
	let scope = this
	
	uni.request({
		url: baseUrl + apiConfig[options.name],
		data: options.data || {},
		method: options.method || 'GET',
		header: token ? {
			'Account-Auth': token
		} : {},
		success: function (data) {
			if (data.data.code) {
				options.success.call(scope, data.data.data)
			} else {
				uni.showToast({
				    title: data.data.message,
				    duration: 2000,
					icon: 'none'
				});
			}
		},
		fail: options.fail,
		complete: function (data) {
			console.log('=============')
			console.log(data)
			console.log('=============')
		}
	})
}

function getToken () {
	if (!token || token == '') {
		try {
		    token = uni.getStorageSync('token');
		} catch (e) {
		}
	}
}

export default api