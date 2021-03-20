function isprime(i,primes){
	for(let j=0;j<primes.length;++j){
		if(primes[j]*primes[j]>i){return true;}
		if(i%primes[j]==0){return false;}
	}
	return true;
}
function sumOfPrimes(n){
	let primes = []
	for(let i=2;i<n;++i){
		if(isprime(i,primes)){
			primes.push(i);
		}
	}
	return primes.reduce((a,c)=>a+c,0);
}
function problem10(){
	return 1;
}
Button.create("problem 10",problem10,142913828922);
