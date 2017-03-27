let fs = require('fs');

let dealFn = {

	writeFileData: (file, obj) => {
	    let promise = new Promise((resolve, reject) => {
	        obj = JSON.stringify(obj);
	        fs.writeFile("./database/" + file, obj, function(err){
	            if(err) {
	                reject("fail " + err)
	            }
	            else {
	                resolve("write success!");
	            }
	        });
	    }) 
	    return promise;
	},
	
	readFileData: (file) => {
		let Promise = new Promise((reslove, reject) => {
			fs.readFile('./data/' + file, 'utf-8', (err, data) => {
				if(err){
					console.log('error');
					reject('read Filedata error')
				}else{
					data = Json.parse(data);
					reslove(data);
				}
			})
		});
		return promise;
	}
}

module.exports = dealFn;
