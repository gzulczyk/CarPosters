	function zmienBackground()
	{
		var tlo = document.getElementById('faktyczneTlo');
		document.getElementById("bfp"+cyfraObrazka).style = "border: 3px solid #fff";
		cyfraObrazka++;
		if(cyfraObrazka == 5){cyfraObrazka = 1; tlo.src="https://carposters.pl/wp-content/themes/bam/ikonki/bfp"+cyfraObrazka+".jpg"; document.getElementById("bfp"+cyfraObrazka).style =  "border: 3px solid #fff"; document.getElementById("bfp"+cyfraObrazka).style = "border: 3px solid #ffbc03";}
		tlo.src="https://carposters.pl/wp-content/themes/bam/ikonki/bfp"+cyfraObrazka+".jpg";
		document.getElementById("bfp"+cyfraObrazka).style =  "border: 3px solid #ffbc03";
	}