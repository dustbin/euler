class Summation{
	static ofN(n){
		return n*(n+1)/2;
	}
	static ofN2(n){
		let ret = 1;
		for(let i=2;i<=n;++i){
			ret += i*i;
		}
		return ret;
	}
	static ofNSkipM(n,m){
		return Summation.ofN(Math.floor(n/m))*m;
	}
}
