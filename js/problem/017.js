function problem17(){
	let regex = /( |-)/g;
	let sum = 0;
	for(let i=1;i<=1000;++i){
		let t = NumberString.convert(i);
		sum += t.replaceAll(regex,"").length;
	}
	return sum;
}
Problem.create("problem 17",problem17,21124);
