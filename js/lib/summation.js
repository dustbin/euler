class Summation{
	static ofN(n){
		return n*(n+1)/2;
	}
	static ofNSkipM(n,m){
		return Summation.ofN(Math.floor(n/m))*m;
	}
}
