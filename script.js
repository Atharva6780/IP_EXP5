function calculator(a, b, operation) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject('Invalid input: Both arguments must be numbers');
        }

        switch (operation) {
            case 'add':
                resolve(a + b);
                break;
            case 'subtract':
                resolve(a - b);
                break;
            case 'multiply':
                resolve(a * b);
                break;
            case 'divide':
                if (b === 0) {
                    reject('Error: Cannot divide by zero');
                } else {
                    resolve(a / b);
                }
                break;
            default:
                reject('Invalid operation: Supported operations are add, subtract, multiply, and divide');
        }
    });
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    calculator(num1, num2, operation)
        .then(result => resultElement.innerText = `Result: ${result}`)
        .catch(error => resultElement.innerText = `Error: ${error}`);
}


const arrayOfNumbers = [1, 2, 3, 4, 5];

const squareIterator = {
    arr: arrayOfNumbers,
    currentIndex: 0,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.currentIndex < this.arr.length) {
            const value = this.arr[this.currentIndex] ** 2;
            this.currentIndex++;
            return { value, done: false };
        } else {
            return { done: true };
        }
    }
};

function iterateSquares() {
    let squares = '';
    for (let square of squareIterator) {
        squares += square + ' ';
    }
    document.getElementById('squares').innerText = `Squares: ${squares}`;
}


function* primeGenerator(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let number = 2;
    while (number <= limit) {
        if (isPrime(number)) {
            yield number;
        }
        number++;
    }
}

function generatePrimes() {
    const primes = primeGenerator(30);
    let primesList = '';
    for (let prime of primes) {
        primesList += prime + ' ';
    }
    document.getElementById('primes').innerText = `Prime Numbers: ${primesList}`;
}
