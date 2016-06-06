var sum = 0;
function oddNumbers() {
	for (var i = 0; i < 1000; i++) {
		if(i % 3 ===0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(oddNumbers());