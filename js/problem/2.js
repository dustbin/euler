function problem2(){
	let fib = new Fibonacci();
	let sum = 0;
	for(let i=0;fib.getFibonacci(i)<4000000;++i){
		if(fib.getFibonacci(i)%2==0){sum+=fib.getFibonacci(i);}
	}
	return sum;
}
Problem.create("problem 2",problem2,4613732);
