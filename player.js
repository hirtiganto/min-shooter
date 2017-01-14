function Player() {
  this.location = createVector(width / 2, height - 180)

  this.render = function() {
    noStroke()
    fill(237, 237, 40)
    rect(this.location.x, this.location.y, 60, 120)
  }
}
