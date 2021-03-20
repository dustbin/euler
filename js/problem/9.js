function findTriplet(n){
	for(let a=1;a<n/3;++a){
		for(let b=a+1;b<(n-a)/2;++b){
			let c = Math.sqrt(a*a+b*b);
			if(a+b+c==n){
				return a*b*c;
			}
		}
	}
	return -1;
}
function problem9(){
	return 1;
}
Button.create("problem 9",problem9,31875000);
