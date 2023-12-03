class Obstacle {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 70);
        this.top = 0;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement("img");
        
        this.element.src = "./images/redCar.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        this.counter = 3 + (setInterval(() => {
            +1
        }, 1000));
    }
    
    move () {
        this.top += this.counter;
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}