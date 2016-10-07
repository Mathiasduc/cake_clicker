$(document).ready(function(){
	var clickity = 0;
	$("img").click(function(){
		clickity++;
		$("span").html(clickity);
		if(clickity % 20 === 0) {
			var game = ["Tower Fall Ascencion", "Mini Metro", "This is police", "Morrowind","The Stanlay Parable", "Kingdoms", "This War of Mine"];
			alert("Allez jouer a un vrai jeu! Genre: "+ game[Math.floor(Math.random() * game.length)]);	
		}
	});
});