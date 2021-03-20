function sumn(n){return (n*n+n)/2;}
function isPrime(i,primes){
	for(let j=0;j<primes.length;++j){
		if(primes[j]*primes[j]>i){return true;}
		if(i%primes[j]==0){return false;}
	}
	return true;
}
function findDivisors(n,primes){
	let roots = 0;
	for(let i=0;i<primes.length;++i){
		while(n%primes[i]){roots+=1;n/=t;}
		if(n==1){break;}
	}
}

function problem12(){
	return 1;
}
Button.create("problem 12",problem12,null);
