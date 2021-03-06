class Search{
	constructor(n0,n1,a,fCompare){
		this.n0 = n0;
		this.n1 = n1;
		this.i = 0;
		this.a = a;
		this.compare = fCompare;
	}
	check(){
		let t0 = this.a[this.n0+this.i];
		let t1 = this.a[this.n1+this.i];
		if(this.compare(t0,t1)){
			if(this.n0+this.i==this.n1){
				return 2;
			}
			return 1;
		}
		return 0;
	}
	increment(){
		this.i+=1;
	}
	slice(fExtract){
		if(fExtract){
			return this.a.slice(this.n0,this.n1).map(fExtract);
		}
		return this.a.slice(this.n0,this.n1);
	}
	static getRepeating(n,d){
		let a = [];
		let searches = [];
		let newSearches,j,t;
		while(n%d!=0){
			t = [Math.floor(n/d),n];
			newSearches = [];
			for(j=0;j<a.length;++j){
				if(Search.compareRepeating(a[j],t)){
					newSearches.push(new Search(j,a.length,a,Search.compareRepeating));
				}
			}
			a.push(t);
			n=(n%d)*10;
			for(j in searches){
				searches[j].increment();
				t = searches[j].check();
				if(t==2){
					return searches[j].slice(Search.extractRepeating);
				}else if(t==1){
					newSearches.push(searches[j]);
				}
			}
			searches = newSearches;
		}
		return [];
	}
	static compareRepeating = function(a,b){
		return a.every((e,i) => e==b[i]);
	}
	static extractRepeating = function(a){
		return a[0];
	}
}
