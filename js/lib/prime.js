class Prime {
	primes = [2];
	primeIndex = {2:0};
	constructor(){
	}
	getPrime(index){
		if(this.primes.length<=index){
			this.buildPrimes(index+1);
		}
		return this.primes[index];
	}
	isPrime(p){
		this.buildLessThan(p+1);
		if(this.primeIndex[p]>=0){return true;}
		return false;
	}
	buildPrimes(length){
		if(this.primes.length>=length){return;}
		for(let i=this.primes[this.primes.length-1]+1;this.primes.length<length;++i){
			for(let j=0;;++j){
				let p = this.primes[j];
				if(i<p*p){
					this.primeIndex[this.primes.length]=i;
					this.primes.push(i);
					break;
				}
				if(i%p==0){break;}
			}
		}
	}
	buildLessThan(n){
		if(this.primes[this.primes.length-1]>=n){return;}
		for(let i=this.primes[this.primes.length-1]+1;i<n;++i){
			for(let j=0;;++j){
				let p = this.primes[j];
				if(i<p*p){
					this.primeIndex[this.primes.length]=i;
					this.primes.push(i);
					break;
				}
				if(i%p==0){break;}
			}
		}
	}
	factors(n){
		if(n<2){return [];}
		let ret = [];
		for(let i=0;;++i){
			let p = this.getPrime(i);
			let t = 0;
			if(n<p*p){
				if(n>1){ret.push([n,1]);}
				break;
			}
			while(n%p==0){
				++t;
				n/=p;
			}
			if(t>0){
				ret.push([p,t]);
			}
		}
		return ret;
	}
	divisors(n){
		let facts = this.factors(n);
		let divs = [1];
		for(let i=0;i<facts.length;++i){
			let newDivs = [];
			for(let j=1;j<=facts[i][1];++j){
				let t = facts[i][0]**j;
				for(let k=0;k<divs.length;++k){
					newDivs.push(divs[k]*t);
				}
			}
			divs = divs.concat(newDivs);
		}
		return divs;
	}
	divisorSum(n){
		return this.divisors(n).reduce((a,c)=>a+c,-n);
	}
}
