function problem22(){
	let t = problem22.data.sort();
	let sum = 0;
	for(let i=0;i<t.length;++i){
		sum += Word.sum(t[i])*(i+1);
	}
	return sum
}
Problem.create("problem 22",problem22,null);
