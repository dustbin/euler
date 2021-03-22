function problem12(){
	let prime = new Prime();
	for(let i = 1;;++i){
		let t = Summation.ofN(i);
		let f = prime.factors(t);
		if(f.reduce((a,c)=>a+a*c,1)>500){
			return t;
		}
	}
}
Button.create("problem 12",problem12,null);
