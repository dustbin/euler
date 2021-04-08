function problem1(){
	return Summation.ofNSkipM(999,3)+Summation.ofNSkipM(999,5)-Summation.ofNSkipM(999,15);
}
Problem.create("problem 1",problem1,233168);
