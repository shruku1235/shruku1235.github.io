let walkers = [];
let numWalkers;

function setup() {
  createCanvas(500, 500);
  background(100);
  numWalkers = int(prompt("How many walkers? (1-2000):", 500));
  numWalkers = constrain(numWalkers, 1, 2000);
  for (let i = 0; i < numWalkers; i++) {
    walkers.push({
      x: random(width),
      y: random(height),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  for (let w of walkers) {
    stroke(w.color);
    strokeWeight(6);
    point(w.x, w.y);
    let r = floor(random(4));
    switch (r) {
      case 0:
        w.x += 2;
        break;
      case 1:
        w.x -= 2;
        break;
      case 2:
        w.y += 2;
        break;
      case 3:
        w.y -= 2;
        break;
    }
  }
}
