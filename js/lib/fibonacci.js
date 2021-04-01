class Fibonacci{
	fibs = [1n,2n];
	constructor(){
	}
	getFibonacci(index){
		if(this.fibs.length<=index){
			this.buildFibonacci(index+1);
		}
		return this.fibs[index];
	}
	buildFibonacci(length){
		while(this.fibs.length<length){
			let i = this.fibs.length;
			this.fibs.push(this.fibs[i-2]+this.fibs[i-1]);
		}
	}
}
