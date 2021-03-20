function problem3(){
	let prime = new Prime();
	let f = prime.factors(600851475143);
	return f[f.length-1][0];
}
problem3.answer = 6857;
