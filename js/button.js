class Button{
	static loaded = false;
	static buttons = [];
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
		Button.buttons.push(div);
		if(Button.loaded){
			document.body.appendChild(div);
		}
	}
}

window.onload = function(){
	for(let b in Button.buttons){
		document.body.appendChild(b);
	}
	Button.loaded = true;
};
