var player
var opponents = []

function setup() {
  createCanvas(windowWidth,windowHeight)

  player = new Player()

  for (var i = 0; i < 3; i++) {
    opponents.push(new Opponent())
  }
}


function draw() {
  redrawBackground()
  noStroke()
  fill(0)
  text("FPS: " + Math.round(frameRate()),20,20)

  player.update()
  player.updateBullets()
  player.render()

  for (var i = 0; i < opponents.length; i++) {
    opponents[i].update(player)
    opponents[i].render()
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
