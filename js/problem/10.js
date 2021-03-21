function problem10(){
	let prime = new Prime();
	prime.buildLessThan(2000000);
	let sum = new Summation(prime.primes);
	return sum.current;
}
Button.create("problem 10",problem10,142913828922);
