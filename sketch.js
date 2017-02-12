var player
var opponents = []

function setup() {
  createCanvas(windowWidth,windowHeight)

  player = new Player()
}


function draw() {
  redrawBackground()
  noStroke()
  fill(0)
  text("FPS: " + Math.round(frameRate()),20,20)

  player.update()
  player.updateBullets()
  player.render()

  while (opponents.length < 3) {
    opponents.push(new Opponent())
  }

  for (var i = 0; i < opponents.length; i++) {
    opponents[i].update(player)
    opponents[i].render()

    if (opponents[i].deletable) {
      opponents.splice(i, 1)
      break
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
