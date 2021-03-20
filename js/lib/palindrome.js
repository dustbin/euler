class Palindrome{
	static reverse(s){
		return [...s].reverse().join("");
	}
	static verify(i){
		let s = i.toString();
		let b = s.slice(0,Math.floor(s.length/2));
		let e = Palindrome.reverse(s).slice(0,Math.floor(s.length/2));
		return b == e;
	}
}
