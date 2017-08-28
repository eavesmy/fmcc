module.exports = {
	post: function(path,body){
		return fetch(path,{
			credentials: 'include',
			headers:{
				"Accept": "application/json",
				"Content-type": "application/json",
			},
			method: 'POST',
			body: body,
		});
	}
}
