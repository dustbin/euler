function problem27(){
	let p = new Prime();
	let maxN = 0;
	let maxV = 0;
	for(let i=1;;++i){
		let b = p.getPrime(i);
		if(b>1000){break;}
		for(let a=1;a<1000;a+=2){
			for(let n=0;;++n){
				if(!p.isPrime(n**2+a*n+b)){
					if(n>maxN){maxN = n;maxV = a*b;}
					break;
				}
			}
		}
	}
	return maxV;
}

Problem.create("problem 27",problem27,null);
