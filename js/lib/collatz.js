class Collatz{
	values = [0,0];
	constructor(){
	}
	solve(n){
		if(this.values[n]==undefined){
			if(n%2==0){
				this.values[n] = this.solve(n/2)+1;
			}else{
				this.values[n] = this.solve(n*3+1)+1;
			}
		}
		return this.values[n];
	}
}
