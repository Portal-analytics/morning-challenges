function sumOfThreeAndFive() {
    var sumToOneThousand = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumToOneThousand += i;
        }
    }
    return sumToOneThousand;


}

console.log(sumOfThreeAndFive());
