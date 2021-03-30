class Word{
	static sum(word){
		let ret=0;
		let a = 'A'.charCodeAt(0)-1;
		for(let i=0;i<word.length;++i){
			ret += word.charCodeAt(i)-a;
		}
		return ret;
	}
}
