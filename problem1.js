var multiples = [];

for (var i = 3; i < 1000; i += 3) {
    //Only add to array if not divisible by 5
    if (i % 5 !== 0) {
        multiples.push(i);
    }
}

for (var j = 5; j < 1000; j += 5) {
    multiples.push(j);
}

alert(multiples);