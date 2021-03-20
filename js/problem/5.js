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
Button.create("problem 5",problem5,232792560);
