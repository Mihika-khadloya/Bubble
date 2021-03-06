var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(255);
        //move and rotate player 

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color(255,0, 0);
    }

    //contain player
    if (p.x > 600) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 600
    }
    if (p.y > 600) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 600
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff
    noStroke();
    fill(boostColor)
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);
    //health


    fill(0,0,255);
    triangle(-size + 2, -size + 2, size + 2, 0, -size + 2, size + 2);
    pop();
    fill(0);
    text(Health, p.x - 10, p.y + 25)

    fill(0);
    text(Score, 25, 25);

}