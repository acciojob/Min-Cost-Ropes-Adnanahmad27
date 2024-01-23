function mincost(arr)
{ 
	// sort
	// take out 2 ele and make it one , push back to array
	let sum = 0;
	while(arr.length > 1){
		
		arr.sort( (a,b) => {
		return b - a;
		});
		
		let a = arr.pull();
		let b = arr.pull();

		sum += a+b;
		arr.push(a+b);
	}
	return arr[0];
  
}

module.exports=mincost;
