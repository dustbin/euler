function problem4(){
	for(let i=999;i>900;--i){
		for(let j=i;j>900;--j){
			if(Palindrome.verify(i*j)){return i*j;}
		}
	}
	return 0;
}
Problem.create("problem 4",problem4,906609);
