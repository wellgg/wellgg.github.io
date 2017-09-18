var title = document.getElementById("animtitle");
var tctx = title.getContext("2d");
var lettery = [90,90,90,90,90,90,90,90,90];
var cycle = 0;
tctx.font = "50px courier";
title.addEventListener('click', function() {
	tctx.fillStyle = "black";
	tctx.font = "50px courier";
	if (cycle > 6) {
		cycle = 0;
	}else{
		cycle++;
	}
	switch (cycle) {
		case 0:
			lettery = [90,90,90,90,90,90,90,90,90];
			break;
		case 1:
			for (var i = 0; i < 9; i++)
			lettery[i] = i * 10 + 40;
			break;
		case 2:
			for (var i = 0; i < 9; i++)
			lettery[i] = i * -10 + 130;
			break;
		case 3:
			for (var i = 0; i < 9; i++)
			lettery[i] = Math.sin(i-4)*10+90;
			break;
		case 4:
			for (var i = 0; i < 9; i++)
			lettery[i] = Math.tan(i-4)*10+90;
			break;
		case 5:
			for (var i = 0; i < 9; i++)
			lettery[i] = Math.atan(i-4)*10+90;
			break;
		case 6:
			for (var i = 0; i < 9; i++)
			lettery[i] = Math.atan(i-4)*-10+90;
			break;
		case 7:
			for (var i = 0; i < 9; i++)
			lettery[i] = Math.floor((Math.random() * 10) + 3)*10+15;
	}
}, false);
update();
function update() {
	tctx.clearRect(0, 0, title.width, title.height);
	tctx.fillText("w", 15, lettery[0]);
	tctx.fillText("e", 45, lettery[1]);
	tctx.fillText("l", 75, lettery[2]);
	tctx.fillText("l", 105, lettery[3]);
	tctx.fillText(".", 135, lettery[4]);
	tctx.fillText(".", 165, lettery[5]);
	tctx.fillText(".", 195, lettery[6]);
	tctx.fillText("g", 225, lettery[7]);
	tctx.fillText("g", 255, lettery[8]);
	requestAnimationFrame(update);
}