function Opponent() {
  this.location = createVector(0, height - 180)
  this.col = color(random (150, 200),random(10, 25),random(10, 25))

  // i want the opponent to spawn beyond the screen
  if (Math.round(random(0, 1)) > 0) {
    this.location.x = -120
  } else {
    this.location.x = width + 120
  }

  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.speedScale = random(2,6)


  // this is in case i wanted to apply some fancy physics
  this.applyForce = function(force) {
    this.acceleration.add(force)
  }


  this.update = function(player) {
    var direction
    if (player.location.x - this.location.x <= 0) {
      direction = createVector(-1, 0)
    } else {
      direction = createVector(1, 0)
    }
    direction.mult(this.speedScale)
    this.applyForce(direction)

    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)

    this.acceleration.mult(0)
    this.velocity.mult(0)
  }


  this.render = function() {
    noStroke()
    fill(this.col)
    rect(this.location.x, this.location.y, 60, 120)
  }
}
