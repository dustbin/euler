class Problem{
	static loaded = false;
	static problems = [];
	static create(title,func,answer){
		let div = document.createElement("div");
		let div_b = document.createElement("div");
		div.appendChild(div_b);
		let div_a = document.createElement("div");
		div.appendChild(div_a);

		div_b.textContent = title;
		div_b.onclick = function(){
			let res = func();
			div_a.textContent = res;
			if(answer!=null){
				if(answer==res){
					div_a.style="color: green;";
				}else{
					div_a.style="color: red;";
				}
			}
		};
		Problem.problems.push(div);
		if(Problem.loaded){
			document.body.appendChild(div);
		}
	}
	static generateButtons(){
		for(let i in Problem.problems){
			document.body.appendChild(Problem.problems[i]);
		}
		Problem.loaded = true;
	}
}
