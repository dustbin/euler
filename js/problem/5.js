function isprime(i,primes){
	for(let j in primes){
		if(primes[j]*primes[j]>i){return true;}
		if(i%primes[j]==0){return false;}
	}
	return true;
}
function findsmallestmultiple(n){
	let total = 1;
	let primes = [];
	for(let i=2;i<=n;++i){
		if(isprime(i,primes)){
			primes.push(i);
			let t = i;
			while(t*i<n){t*=i;}
			total*=t;
		}
	}
	return total;
}