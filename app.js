$(document).ready(function(){
	var clickity = 0;
	var kitty = "\\    /\\ <br> )  ( ')<br>(  /  ) <br> \\(__)|<br>";
	$("img").click(function(){
		$("span").html(clickity);
		if(clickity % 20 === 0) {
			var game = ["Tower Fall Ascencion", "Mini Metro", "This is police", "Truc","Machin", "Kingdoms", "This War of Mine"];
			alert("Allez jouer a un vrai jeu! Genre: "+ game[Math.floor(Math.random() * game.length)]);
			console.log("Allez jouer a un vrai jeu! Genre: "+ game);
		}

	});

	

});