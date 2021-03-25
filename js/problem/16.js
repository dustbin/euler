function problem16(){
	let ret = 0n;
	let num = 1n << 1000n;
	while(num>0n){
		ret += num%10n;
		num -= num%10n;
		num /= 10n;
	}
	return ret;
}
Problem.create("problem 16",problem16,1366);
