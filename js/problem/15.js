function problem15(){
	let grid = [];
	for(let i=0;i<=20;++i){
		for(let j=0;j<=20;++j){
			if(j==0){
				grid[i] = [1];
			}else{
				if(i==0){
					grid[i][j]=1;
				}else{
					grid[i][j]=grid[i-1][j]+grid[i][j-1];
				}
			}
		}
	}
	return grid[20][20];
}
Button.create("problem 15",problem15,null);
