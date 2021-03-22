function problem12(){
	let prime = new Prime();
	for(let i = 1;;++i){
		let tNum = Summation.ofN(i);
		let divisors = prime.factors(tNum).reduce((a,c)=>a+a*c[1],1);
		if(divisors>500){
			return tNum;
		}
	}
}
Button.create("problem 12",problem12,76576500);
