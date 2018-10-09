var x;
var y;

function setup(){
	createCanvas(600,500);
	ellipseMode(CENTER);
	rectMode(CENTER);
	background(255);


}

function draw(){

circle();

}

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
	translate(100,100)
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
	translate(100,100)
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
	translate(100,100)
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
	translate(100,100)
	x = map (mouseX, 0, 600, 0, PI);
		rotate(x);
	rect(0,0,20,20);
	pop();



}