window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  
  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game ();
    game.start();
  }
  
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -10;
          break;
        case "ArrowUp":
          game.player.directionY = -10;
          break;
        case "ArrowRight":
          game.player.directionX = 10;
          break;
        case "ArrowDown":
          game.player.directionY = 10;
          break;
        }
      }
    }

  window.addEventListener("keydown", handleKeydown);

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
