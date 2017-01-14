function Player() {
  this.location = createVector(width / 2, height - 180)
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.speedScale = 10

  this.applyForce = function(force) {
    this.acceleration.add(force)
  }

  this.move = function() {
    var dir = createVector(1, 0)

    if (keyIsDown(LEFT_ARROW)) {
      dir.mult(-this.speedScale)
      this.applyForce(dir);
    } else if (keyIsDown(RIGHT_ARROW)) {
      dir.mult(this.speedScale)
      this.applyForce(dir);
    }
  }

  this.update = function() {
    this.move()

    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)

    this.acceleration.mult(0)
    this.velocity.mult(0)
  }

  this.render = function() {
    noStroke()
    fill(237, 237, 40)
    rect(this.location.x, this.location.y, 60, 120)
  }
}
