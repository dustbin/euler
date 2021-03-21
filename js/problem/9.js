function problem9(){
	for(let a=1;a<1000/3;++a){
		for(let b=a+1;b<(1000-a)/2;++b){
			let c = 1000-a-b;
			if(a*a+b*b==c*c){
				return a*b*c;
			}
		}
	}
	return -1;
}
Button.create("problem 9",problem9,31875000);
