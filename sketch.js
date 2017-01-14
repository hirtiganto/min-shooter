var player

function setup() {
  createCanvas(windowWidth,windowHeight)

  player = new Player()
}

function draw() {
  redrawBackground()
  player.render()
}

function redrawBackground() {
  background(66, 244, 209)

  noStroke()
  fill(135, 93, 119)
  rect(0, height - 60, width, 60)
}
