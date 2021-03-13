function isprime(i,primes){
	for(let j in primes){
		if(primes[j]*primes[j]>i){return true;}
		if(i%primes[j]==0){return false;}
	}
	return true;
}
function maxfactor(n){
	let max = 0;
	let primes = [];
	for(let i=2;i*i<n;++i){
		if(isprime(i,primes)){
			primes.push(i);
			while(n%i==0){
				max = i;
				n/=i;
			}
		}
	}
	if(n>1){return n;}
	return max;
}