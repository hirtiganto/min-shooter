function Player() {
  this.location = createVector(width / 2, height - 180)
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.speedScale = 10

  this.jumped = false
  this.jumpHeight = createVector(0, -200)
  this.gravity = (0, 1)

  this.facingRight = true
  this.bullets = []


  this.applyForce = function(force) {
    this.acceleration.add(force)
  }


  this.move = function() {
    var dir = createVector(1, 0)

    if (keyIsDown(65)) {
      dir.mult(-this.speedScale)
      this.applyForce(dir)
      this.facingRight = false
    } else if (keyIsDown(68)) {
      dir.mult(this.speedScale)
      this.applyForce(dir)
      this.facingRight = true
    }

    if ((keyIsDown(32) || keyIsDown(87)) && !this.jumped) {
      this.jumped = true
    }

    //shooting is in the move methon because why the hell not
    if (keyIsDown(LEFT_ARROW)) {
      this.bullets.push(new Bullet(this.location))
      this.bullets[this.bullets.length - 1].fire(false)
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.bullets.push(new Bullet(this.location))
      this.bullets[this.bullets.length - 1].fire(true)
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


  this.updateBullets = function () {
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update()
      this.bullets[i].render()

      if (this.bullets[i].deletable) {
        this.bullets.splice(i, 1)
        break
      }
    }
  }


  this.render = function() {
    noStroke()
    fill(237, 237, 40)
    rect(this.location.x, this.location.y, 60, 120)
  }
}
