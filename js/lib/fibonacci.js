class Fibonacci{
	fibs = [1,2];
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
			
		}
	}
}
