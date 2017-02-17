function Opponent() {
  this.location = createVector(0, height - map(180, 0, 738, 0, height))
  this.col = color(random (150, 200),random(10, 25),random(10, 25))

  this.w = map(60, 0, 1440, 0, width)
  this.h = map(120, 0, 738, 0, height)

  this.hp = 2
  this.deletable = false

  // i want the opponent to spawn beyond the screen
  if (Math.round(random(0, 1)) > 0) {
    this.location.x = -this.h
  } else {
    this.location.x = width + this.h
  }

  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.speedScale = map(random(2,6), 0, 1440, 0, width)


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


  this.hit = function () {
    this.hp -= 1
    if (this.hp < 1) {
      this.deletable = true
    }
  }


  this.render = function() {
    noStroke()
    fill(this.col)
    rect(this.location.x, this.location.y, this.w, this.h)
  }
}
