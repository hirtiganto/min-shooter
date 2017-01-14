function Player() {
  this.location = createVector(width / 2, height - 180)
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.speedScale = 10

  this.jumped = false
  this.jumpHeight = createVector(0, -200)
  this.gravity = (0, 1)


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

    if (keyIsDown(32) && !this.jumped) {
      this.jumped = true
    }
  }


  this.update = function() {
    this.move()

    if (this.jumped) {
      this.jumpHeight.mult(0.9)
      this.applyForce(this.jumpHeight)
    }

    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.location.x = constrain(this.location.x, 0, width - 60)

    this.acceleration.mult(0)
    this.velocity.mult(0)

    if (this.location.y < height - 180) {
      this.gravity.mult(1.1)
      this.applyForce(this.gravity)
    } else {
      this.jumpHeight = createVector(0, -45)
      this.gravity = createVector(0, 1)
      this.jumped = false
      this.location.y = height - 180
    }
  }


  this.render = function() {
    noStroke()
    fill(237, 237, 40)
    rect(this.location.x, this.location.y, 60, 120)
  }
}
