function problem3(){
	let prime = new Prime();
	let factors = prime.factors(600851475143);
	return factors[factors.length-1][0];
}
Problem.create("problem 3",problem3,6857);
