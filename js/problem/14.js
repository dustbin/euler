function problem14(){
	let collatz = new Collatz();
	let max = 0;
	for(let i = 2;i<1000000;++i){
		let t = collatz.solve(i);
		if(t>max){max = t;}
	}
	return max;
}
Button.create("problem 14",problem14,null);
