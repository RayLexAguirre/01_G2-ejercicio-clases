export default class Number {
    constructor(value) {
        this.value = value;
    }

    isEven() {
        if(this.value%2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    isPrime() {
        if(this.value % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }

    isPositive() {
        if(this.value > 0) {
            return true 
        } else {
            return false
        }
    }
}