function problem26(){
	let maxL = 0;
	let maxN = 0;
	for(let i=1;i<1000;++i){
		let t = Search.getRepeating(1,i);
		if(t.length>maxL){
			maxL = t.length;
			maxN = i;
		}
	}
	return maxN;
}
Problem.create("problem 26",problem26,983);
