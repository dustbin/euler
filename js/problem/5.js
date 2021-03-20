function problem5(){
	let prime = new Prime();
	let total = 1;
	for(let i=0;;++i){
		let p = prime.getPrime(i);
		if(p>20){break;}
		let t = p;
		while(t*p<20){t*=p;}
		total*=t;
	}
	return total;
}
problem5.answer = 232792560;
Button.create("problem 5",problem5,problem5.answer);
