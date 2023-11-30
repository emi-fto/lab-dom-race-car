class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player (this.gameScreen, 200, 500, 100, 150,"./images/car.png");
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
        if (this.gameIsOver) {
            return
        }
        this.update ();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.player.move();
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(obstacle, 1);
                this.lives -=1;
                console.log(this.lives)
                obstacle -=1;
              } // If the obstacle is off the screen (at the bottom)
              else if (obstacle.top > this.height) {
                this.score +=1;
                console.log(this.score)
                obstacle.element.remove();
                this.obstacles.splice(obstacle, 1);
                obstacle -=1;
            }
        });
        
        if (this.lives === 0) {
        this.endGame();
        }
  
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
        }
    }   

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
    
        this.gameIsOver = true;
    
        
        this.gameScreen.style.display = "none";
       
        this.gameEndScreen.style.display = "block";
    }
}