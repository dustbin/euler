function isprime(i,primes){
	for(let j=0;j<primes.length;++j){
		if(primes[j]*primes[j]>i){return true;}
		if(i%primes[j]==0){return false;}
	}
	return true;
}
function primen(n){
	let primes = [];
	for(let i=2;primes.length<n;++i){
		if(isprime(i,primes)){
			primes.push(i);
		}
	}
	return primes[n-1];
}
function problem7(){
	return 1;
}
Button.create("problem 7",problem7,104743);
