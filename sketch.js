var player
var opponents = []
var maxEnemyCount
var score
var over

function setup() {
  createCanvas(1280, 720)

  player = new Player()
  maxEnemyCount = 5
  score = 0
  over = false
}


function draw() {

  if (!over) {
    redrawBackground()
    noStroke()

    fill(255)
    textSize(map(32, 0, 738, 0, height))
    text("Score: " + score, width / 2 - map(40, 0, 738, 0, height), map(40, 0, 738, 0, height))

    player.update()
    player.updateBullets()
    player.render()

    while (opponents.length < maxEnemyCount) {
      opponents.push(new Opponent())
    }

    for (var i = 0; i < opponents.length; i++) {
      opponents[i].update(player)
      opponents[i].render()

      if (opponents[i].deletable) {
        opponents.splice(i, 1)
        score += 10
        continue
      }
    }
  }

  if (keyIsPressed && over) {
    restartGame()
  }
}


function redrawBackground() {
  background(66, 244, 209)

  noStroke()
  fill(135, 93, 119)
  rect(0, height - map(60, 0, 738, 0, height), width, map(60, 0, 738, 0, height))
}


function checkCollision(location, w, h, collider, colW, colH) {
  if ((location.x <= collider.x + colW) && (location.x + w >= collider.x)) {
    if (location.y + h >= collider.y) {
      return true
    }
  }
}

function gameOver() {
  over = true
  fill (51)
  textSize(map(50, 0, 738, 0, height))
  text("game over, press anything to restart", width / 4, height / 2)
}

function restartGame() {
  score = 0
  opponents = []
  over = false
}
