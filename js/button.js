class Button{
	static buttons = [];
	static create(title,func,answer){
		let div = document.createElement("div");
		let button = document.createElement("div");
		div.appendChild(button);
		let answer = document.createElelment("div");
		div.appendChild(answer);

		button.text = title;
		button.onclick(function(){
			let res = func();
			answer.text = res;
			if(answer!=null){
				if(answer==res){
					answer.style="color: green;";
				}else{
					answer.style="color: red;";
				}
			}
		});
	}
}

window.onload = function(){
	for(let b in Button.buttons){
		document.body.appendChild(b);
	}
};
