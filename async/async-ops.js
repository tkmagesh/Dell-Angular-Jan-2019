(function(){
	//Synchronous
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning the result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}
	window['addSyncClient'] = addSyncClient;

	//asynchronous
	//using callback
	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning the result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	var addAsyncEvents = (function(){
		var listeners = [];
		function add(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				listeners.forEach(listener => listener(result));
			}, 4000);
		}
		function subscribe(listener){
			listeners.push(listener);
		}
		return { add, subscribe };
	})();

	window['addAsyncEvents'] = addAsyncEvents;

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				resolveFn(result);
			}, 4000);
		});
		return promise;
	}

	window['addAsyncPromise'] = addAsyncPromise;

})();	