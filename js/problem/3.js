function problem3(){
	let prime = new Prime();
	let factors = prime.factors(600851475143);
	return factors[factors.length-1][0];
}
problem3.answer = 6857;
