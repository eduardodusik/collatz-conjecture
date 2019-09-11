class CollatzConjecture {
    constructor(params) {
        this.params = params;
        this.maxNumber = this.params.NUMBER_MAX;

        // Bootstrap to init.
        this.init();
    }

    init() {
        const largest = this.searchLargestConjecture(this.maxNumber);
        console.log(`The most sequential number is ${largest.Largest.value} with ${largest.Largest.conjectures}.`)
    }

    /**
     * This method generates the sequence of sets according to the total sequence
     * to be obtained and gets the value with the most sequence.
     * @param {number} Total numbers for sequences;
     * @return {object} Object with the most sequence information and number of sequences;
     */
    searchLargestConjecture(number) {
        let largest = 0;
        let numberLargest;
        this.count(number).forEach(n => {
            const totalConjecture = this.getConjecture(n).length;
            if (totalConjecture > largest) {
                largest = totalConjecture;
                numberLargest = n;
            }
        });
        return ({Largest: {value: numberLargest, conjectures: largest}});
    };

    /**
     * Get Collatz Conjecture.
     * @param {number} number to get conjecture;
     * @return {[number]} Array with the sequence of collatz;
     */
    getConjecture (number) {
        const conjecture = [];
        conjecture.push(number);

        while(conjecture[conjecture.length -1] > 1){
            conjecture.push(this.getCollatz(conjecture[conjecture.length -1]));
        }
        return conjecture;
    };

    /**
    * Define next sequence according to its type (even or odd).
    * @param {number} number to get sequence;
    * @return {number | null} sequence number or null case number is one;
    */
    getCollatz (number) {
        if(this.isEven(number) && number !== 1) {
            return number / 2;
        } else if (number !== 1) {
            return (number * 3) + 1;
        }
    };

    // Utils
    // -----------------------------------------------------------------------------------------------------------------

    /**
     * Check if a value is even
     * @param {number} number to check;
     * @return {boolean} return true case number is even;
     */
    isEven (number){
        if(number % 2 === 0)
            return true;
    };

    /**
     * Generate array of a value for easy looping
     * @param {number} number to generate array;
     * @return {[number]} return array of numbers;
     */
    count(to) {
        const array = [];
        for (let i = 0; i < to; i++) {
            array.push(i);
        }
        return array;
    };

}

// Initialize constructor with params.
new CollatzConjecture({
    NUMBER_MAX: 999999
});
