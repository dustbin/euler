function problem24(){
	let a = [0,1,2,3,4,5,6,7,8,9];
	return problem24.f(a,1000000-1);
}
problem24.f = function(a,n){
	if(a.length==1){return a[0];}
	let l = a.length-1;
	let f = PiSummation.factorial(l);
	let t = Math.floor(n/f);
	let ret = a[t]*10**l;
	a.splice(t,1);
	return ret + problem24.f(a,n-f*t);
}
Problem.create("problem 24",problem24,null);
