function problem26(){
	let max = 0;
	for(let i=1;i<1000;++i){
		let t = Search.getRepeating(i);
		if(t.length>max){max = t.length;}
	}
	return max;
}
problem26.compare = function(a,b){
	return a.every((e,i) => e==b[i]);
}
Problem.create("problem 26",problem26,null);
