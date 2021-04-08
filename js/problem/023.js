function problem23(){
	let prime = new Prime();
	let numbers = [];
	let index = [];
	for(let i=12;i<28123;++i){
		let t = prime.divisorSum(i);
		if(t>i){
			numbers.push(i);
			index[i]=true;
		}
	}

	let sum = 0;
	for(let i=1;i<=28123;++i){
		for(let j=0;;++j){
			if(numbers[j]>i/2){
				sum+=i;
				break;
			}
			if(index[i-numbers[j]]){
				break;
			}
		}
	}
	return sum;
}
Problem.create("problem 23",problem23,4179871);
