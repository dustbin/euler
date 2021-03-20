function reverse(s){
    return [...s].reverse().join("");
}
function ispalindrome(i){
	let s = i.toString();
	let b = s.slice(0,Math.floor(s.length/2));
	let e = reverse(s).slice(0,Math.floor(s.length/2));
	return b == e;
}
function findpalindrome(){
	for(let i=999;i>900;--i){
		for(let j=i;j>900;--j){
			if(ispalindrome(i*j)){return i*j;}
		}
	}
	return 0;
}