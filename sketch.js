var player
var opponents = []
var maxEnemyCount
var score

function setup() {
  createCanvas(windowWidth,windowHeight)

  player = new Player()
  maxEnemyCount = 4
  score = 0
}


function draw() {
  redrawBackground()
  noStroke()

  fill(0)
  textSize(12)
  text("FPS: " + floor(frameRate()),20,20)

  fill(255)
  textSize(32)
  text("Score: " + score, width / 2, 40)

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


function redrawBackground() {
  background(66, 244, 209)

  noStroke()
  fill(135, 93, 119)
  rect(0, height - 60, width, 60)
}


function checkCollision(location, w, h, collider, colW, colH) {
  if ((location.x <= collider.x + colW) && (location.x + w >= collider.x)) {
    if (location.y + h >= collider.y) {
      return true
    }
  }
}

function gameOver() {
  noLoop()
  fill (51)
  textSize(100)
  text("game over", width / 2, height / 2)
}
