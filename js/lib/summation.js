class Summation{
	ofN(n){
		return n*(n+1)/2;
	}
	ofNSkipM(n,m){
		return Summation.ofN(Math.floor(n/m))*m;
	}
}
