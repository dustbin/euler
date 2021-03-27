function problem19(){
	let sum = 0;
	let d = new Date();
	d.setDay(1);
	for(let i=1901;i<=2000;++i){
		d.setFullYear(i);
		for(let j=0;j<12;++j){
			d.setMonth(j);
			if(d.getDay()==1){
				sum+=1;
			}
		}
	}
	return sum;
}
Problem.create("problem 19",problem19,null);
