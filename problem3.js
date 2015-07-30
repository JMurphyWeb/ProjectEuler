var recordedPrimes = [2];

var largestPrimeFactor = function (userInput) {
    var i = 1;
    var currentDividingPrime = 2;

    //remove all factors of 2
    while (userInput % 2 === 0) {
        userInput = userInput / 2;
        if (userInput === 1) {
            break;
        }
    }

    //now remove all of next primes factors until userInput is 1
    while (userInput !== 1) {
        //get next prime
        currentDividingPrime = nextPrime(currentDividingPrime);

        while (userInput % currentDividingPrime === 0) {
            userInput = userInput / currentDividingPrime;
        }
    }

    return currentDividingPrime;
};



var nextPrime = function (thisPrime) {
    //only works if thisPrime is prime
    //if thisPrime is 2, return 3
    if (thisPrime === 2) {
        return 3;
    }

    while (true) {
        //check the next odd number
        thisPrime += 2;
        if (!isComposite(thisPrime)) {
            return thisPrime;
        }
    }
};



var isComposite = function (number) {
    for (var i = 0; i < recordedPrimes.length; i++) {
        //if the number can be divided by a previous prime
        //return true
        if (number % recordedPrimes[i] === 0) {
            return true;
        }
    }
    recordedPrimes.push(number);
    return false;
};




alert(largestPrimeFactor(600851475143));