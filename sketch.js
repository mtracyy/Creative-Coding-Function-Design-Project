//I got rid of your global x and y variables because I use x and y in my code too, and we both
//use them only locally so we don't need them up here

function setup() {
    createCanvas(1200, 650);
    ellipseMode(CENTER);
	rectMode(CENTER);

    background(0,0,200);

    drawPath(); //I have to draw the spirals in setup so they don't overlap when looping
}

//Tracy
function spiral(locX, locY, value) {
    center = 0;
    radius = 0.1;

    for (var times=0; times<300; times++) {
        x = radius * cos(center);
        y = radius * sin(center);
        push();
        translate(locX, locY);
        noStroke();
        fill(255);
        ellipse(x, y, 3, 3);
        pop();

        center += value;
        radius += 0.1;
    }

}

//Tracy
function drawPath() {
        for (var diagonalRow = 1; diagonalRow < 13; diagonalRow++) {
            push();
            translate(-42 * diagonalRow, 42 * diagonalRow);

            for (var y=1; y < 16; y++) {
                yOffset = y * 30;
                for (var x = 1; x < 16; x++) {
                    xOffset = x * 30;
                    if (x===y) {
                        spiral((width / 2) + xOffset, (height / 4) + yOffset, random(1,15)/10);
                    }
                }
            }

            pop();

        }
}

//Taline
function circle(){

	stroke(1);
	fill(0);
	ellipse(100,100,100,100);

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,70,70);
	pop();


	push();
	fill(0,100,100);
	translate(100,100)
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,70,70);
	pop();

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,60,60);
	pop();

	push();
	fill(0,100,100);
	translate(100,100)
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,60,60);
	pop();

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,50,50);
	pop();

	push();
	fill(0,100,100);
	translate(100,100);
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,50,50);
	pop();

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,40,40);
	pop();

	push();
	fill(0,100,100);
	translate(100,100);
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,40,40);
	pop();

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,30,30);
	pop();

	push();
	fill(0,100,100);
	translate(100,100);
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,30,30);
	pop();

	push();
	translate(100,100);
	y = map(mouseY,0,500,0,PI);
	rotate(y);
	fill(200,0,40);
		rect(0,0,20,20);
	pop();

	push();
	fill(0,100,100);
	translate(100,100);
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,20,20);
	pop();



}


function draw() {
    circle();
}


