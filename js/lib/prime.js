class Prime {
	primes = [2];
	constructor(){
	}
	getPrime(index){
		if(this.primes.length<=index){
			this.buildPrimes(index+1);
		}
		return this.primes[index];
	}
	buildPrimes(length){
		if(this.primes.length>=length){return;}
		for(let i=this.primes[this.primes.length-1]+1;this.primes.length<length;++i){
			for(let j=0;this.primes[j]*this.primes[j]<i;++j){
				if(i%j==0){break;}
			}
		}
	}
}
