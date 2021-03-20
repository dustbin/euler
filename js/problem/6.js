function problem6(){
	let n = Summation.ofN(100);
	let n2 = Summation.ofN2(100);
	return n*n-n2;
}
Button.create("problem 6",problem6,25164150);
