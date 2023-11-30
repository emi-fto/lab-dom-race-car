class Game {
    constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    }

    start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
    }

    gameLoop() {
    console.log("in the game loop");    
    if (this.gameIsOver) {
        return
    }
    this.update ();
    this.gameLoop(window.requestAnimationFrame())
    }

    update() {
    console.log("in the update");
    }

}