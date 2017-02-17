function Bullet(player) {
  this.location = createVector(player.x, player.y + map(50, 0, 738, 0, height))
  this.direction = createVector(1, 0)
  this.speedScale = map(20, 0, 1440, 0, width)
  this.deletable = false

  this.w = 40
  this.h = 5
  this.w = map(40, 0, 1440, 0, width)
  this.h = map(5, 0, 738, 0, height)


  this.col = {
    red: color(226, 29, 29),
    orange: color(255, 137, 28),
    yellow: color(255, 240, 40),
    green: color(118, 237, 71),
    blue: color(71, 140, 237),
    violet: color(179, 71, 237)
  }


  this.render = function() {
    noStroke()

    fill(this.col.red)
    rect(this.location.x, this.location.y + (this.h * 0), this.w, this.h)

    fill(this.col.orange)
    rect(this.location.x, this.location.y + (this.h * 1), this.w, this.h)

    fill(this.col.yellow)
    rect(this.location.x, this.location.y + (this.h * 2), this.w, this.h)

    fill(this.col.green)
    rect(this.location.x, this.location.y + (this.h * 3), this.w, this.h)

    fill(this.col.blue)
    rect(this.location.x, this.location.y + (this.h * 4), this.w, this.h)

    fill(this.col.violet)
    rect(this.location.x, this.location.y + (this.h * 5), this.w, this.h)
  }


  this.update = function(){
    this.location.add(this.direction)

    if (this.location.x > width || this.location.x < 0) {
      this.deletable = true
    }

    for (var i = 0; i < opponents.length; i++) {
      if (checkCollision(this.location, this.w, this.h, opponents[i].location, opponents[i].w, opponents[i].h)) {
        opponents[i].hit()
        this.deletable = true
        continue
      }
    }
  }


  this.fire = function (dirRight) {
    this.direction.mult(this.speedScale)
    if (!dirRight) {
      this.direction.mult(-1)
    }
  }
}
