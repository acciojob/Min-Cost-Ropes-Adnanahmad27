function mincost(arr)
{ 
	let sum = 0;
	while(arr.length > 1){
		
		arr.sort( (a,b) => {
		return a - b;
		});
		
		let a = arr.shift();
		let b = arr.shift();

		sum += a+b;
		arr.push(a+b);
	}
	return sum;
  
}

module.exports=mincost;
