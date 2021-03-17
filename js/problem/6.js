function sumn(n){return (n*n+n)/2;}
function sumofsquares(n){
	let sum = 0;
	for(let i=1;i<=n;++i){
		sum += i*i;
	}
	return sum;
}
function sumsquaredifference(n){
	let t = sumn(n);
	return t*t - sumofsquares(n);
}