function problem1(){
	return Summation.ofNSkipM(999,3)+Summation.ofNSkipM(999,5)-Summation.ofNSkipM(999,15);
}
problem1.answer = 233168;
Button.create("problem 1",problem1,problem1.answer);
