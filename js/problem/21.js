function problem21(){
	let prime = new Prime();
	let sum = 0;
	for(let i=2;i<10000;++i){
		let t = prime.divisorSum(i);
		if(t!=i&&prime.divisorSum(t)==i){
			sum+=i;
		}
	}
	return sum;
}
Problem.create("problem 21",problem21,31626);
