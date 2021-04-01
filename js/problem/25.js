function problem25(){
	let f = new Fibonacci();
	for(let i=0;;++i){
		if(f.getFibonacci(i).toString().length>=1000){
			return i+2;
		}
	}
}
Problem.create("problem 25",problem25,null);
