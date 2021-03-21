class Summation{
	static ofN(n){
		return n*(n+1)/2;
	}
	static ofN2(n){
		let ret = 1;
		for(let i=2;i<=n;++i){
			ret += i*i;
		}
		return ret;
	}
	static ofNSkipM(n,m){
		return Summation.ofN(Math.floor(n/m))*m;
	}
}
class PiSummation{
	dirty = true;
	current = 0;
	stack = [];
	constructor(){
	}
	get length(){
		return this.stack.length;
	}
	push(n){
		n = Number(n);
		this.stack.push(n);
		this.add(n);
	}
	pop(){
		this.remove(this.stack.pop());
	}
	unshift(n){
		n = Number(n);
		this.stack.unshift(n);
		this.add(n);
	}
	shift(){
		this.remove(this.stack.shift());
	}
	add(n){
		if(this.dirty){
			if(this.stack.length==0){return;}
			this.current = 1;
			for(let i=0;i<this.stack.length;++i){
				this.current *= this.stack[i];
			}
			this.dirty = false;
		}else{
			this.current *= n;
		}
	}
	remove(n){
		if(n==0){
			this.dirty = true;
		}else{
			this.current /= n;
		}
	}
}
