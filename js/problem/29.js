function problem29(){
	let d = [];
	for(let a=2n;a<=100n;++a){
		for(let b=2n;b<=100n;++b){
			d[a**b] = true;
		}
	}
	return Object.keys(d).length;
}
Problem.create("problem 29",problem29,9183);
