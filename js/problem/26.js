function problem26(){
	let max = 0;
	for(let i=1;i<1000;++i){
		let t = Search.getRepeating(i);
		if(t.length>max){max = t.length;}
	}
	return max;
}
Problem.create("problem 26",problem26,null);
