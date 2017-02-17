var player
var opponents = []
var maxEnemyCount
var score

function setup() {
  createCanvas(640,360)

  player = new Player()
  maxEnemyCount = 5
  score = 0
}


function draw() {
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
  noLoop()
  fill (51)
  textSize(map(100, 0, 738, 0, height))
  text("game over", width / 2, height / 2)
}
