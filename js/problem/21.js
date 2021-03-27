function problem21(){
	let prime = new Prime();
	let sum = 0;
	for(let i=2;i<10000;++i){
		if(prime.divisorSum(prime.divisorSum(i))==i){
			sum+=i;
		}
	}
	return sum;
}
Problem.create("problem 21",problem21,null);
