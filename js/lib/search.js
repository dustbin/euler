class Search{
	constructor(n0,n1){
		this.n0 = n0;
		this.n1 = n1;
		this.i = 0;
		this.s = 0;
	}
	check(a,compare){
		let t0 = a[this.n0+this.i];
		let t1 = a[this.n1+this.i];
		if(compare(t0,t1)){
			if(this.n0+this.i==this.n1){
				this.s = this.i
				return 2;
			}
			return 1;
		}
		return 0;
	}
	size(){
		this.s;
	}
	increment(){
		this.i+=1;
	}
	static getRepeating(n,d){
		let a = [];
		let searches = [];
		while(n%d!=0){
			let t = [Math.floor(n/d),n];
			let j = -1;
			while(true){
				j = a.indexOf(n,j+1);
				if(j<0){break;}
				searches.push(new Search(j,a.length));
			}
			a.push(t);
			n=(n%d)*10;
		}
		return a;
	}
}
