function problem20(){
	let fact = 1n;
	for(let i=2n;i<=100n;++i){
		fact*=i;
	}
	let sum = 0n;
	while(fact>0n){
		sum += fact%10n;
		fact = (fact - fact%10n)/10n;
	}
	return sum;
}
Problem.create("problem 20",problem20,null);
