const myPromise = new Promise((resolve, reject) => {
	resolve('Test file');
});

myPromise().catch(err => console.log('Error'));