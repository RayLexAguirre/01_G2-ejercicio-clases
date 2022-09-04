export default class Plane {

    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    moveUp(value) {
        this.positionY = this.positionY + value;

        if(this.positionY > 24) {
            this.positionY = 24;
        }

        return this.positionY;
    }

    fire(type) {
        let msg = `fire ${type}!`;
    return msg;
    }

    moveDown(value) {
        this.positionY = this.positionY - value;

        if(this.positionY < 0) {
            this.positionY = 0;
        }

        return this.positionY;
    }
    
    moveLeft(value) {
        this.positionX = this.positionX - value;

        if(this.positionX < 0) {
            this.positionX = 0;
        }

        return this.positionX;
    }

    moveRight(value) {
        this.positionX = this.positionX + value;

        if(this.positionX > 80) {
            this.positionX = 80;
        }

        return this.positionX;
    }

}
