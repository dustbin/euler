function problem28(){
	let sum = 1;
	let t = 1;
	for(let i=2;i<=1000;i+=2){
		for(let j=0;j<4;++j){
			t += i;
			sum += t;
		}
	}
	return sum;
}
Problem.create("problem 28",problem28,669171001);
