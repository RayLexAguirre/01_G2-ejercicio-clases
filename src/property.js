export default class Property {
    constructor(width, height, priceM2, address) {
        this.width = width;
        this.height = height;
        this.priceM2 = priceM2;
        this.address = address;
    }
    
    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width + this.width + this.height + this.height;
    }

    getPrice() {
        return this.getArea() * this.priceM2;
    }
}