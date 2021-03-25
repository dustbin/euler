function problem16(){
	let ret = 0;
	let num = 1n << 1000;
	while(num>0){
		ret += num%10;
		num -= num%10;
		num /= 10;
	}
	return BigInt.asIntN(32,ret);
}
Button.create("problem 16",problem16,null);
