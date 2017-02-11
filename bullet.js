function Bullet(player) {
  this.location = createVector(player.location.x, height - 100)
  this.direction = createVector(1, 0)
  this.speedScale = 20

  this.w = 40
  this.h = 5

  if (!player.facingRight) {
    this.direction.mult(-1)
  }

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
    rect(this.location.x, this.location.y + (this.w * 0), this.w, this.h)

    fill(this.col.orange)
    rect(this.location.x, this.location.y + (this.w * 1), this.w, this.h)

    fill(this.col.yellow)
    rect(this.location.x, this.location.y + (this.w * 2), this.w, this.h)

    fill(this.col.green)
    rect(this.location.x, this.location.y + (this.w * 3), this.w, this.h)

    fill(this.col.blue)
    rect(this.location.x, this.location.y + (this.w * 4), this.w, this.h)

    fill(this.col.violet)
    rect(this.location.x, this.location.y + (this.w * 5), this.w, this.h)
  }
}
