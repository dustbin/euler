class NumberString {
	static groupA = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen"
	];
	static groupB = [
		"",
		"ten",
		"twenty",
		"thirty",
		"fourty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety"
	];
	static groupC = [
		"",
		"thousand",
		"million",
	];
	static convert(n){
		if(n<20){return NumberString.groupA[n];}
		let ret = "";
		let t = 0;
		while(n>0){
			if(n%1000!=0){
				if(ret.length>0){ret = " "+ret;}
				if(t>0){
					ret = NumberString.convertHundreds(n%1000) + " " + NumberString.groupC[t] + ret;
				}else{
					ret = NumberString.convertHundreds(n%1000);
				}
			}
			t += 1;
			n = (n-n%1000)/1000
		}
		return ret;
	}
	static convertHundreds(n){
		let ret = "";
		if(n>=100){
			ret += NumberString.groupA[Math.floor(n/100)] + " hundred and ";
		}
		n %= 100;
		if(n>=20){
			ret += NumberString.groupB[Math.floor(n/10)] +"-"+NumberString.groupA[n%10];
		}else if(n>0){
			ret += NumberString.groupA[n];
		}
		return ret;
	}
}
