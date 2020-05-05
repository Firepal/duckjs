var backwards, forwards;

var imgduck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAVklEQVQoz6WRSw6AMAhEH5yiR+5Re4txIwka1LbOik8eGQA2ZDlpQhEPu/ZKKAMzIADqSB2dsKohUfMAbk2egE97lYZhPu0/yVdOHYP995/edluxX+oAarQf4d+S0rQAAAAASUVORK5CYII=";
var imgduckopen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAWUlEQVQoz5WRwQ3AIAwDz0zRkRmVLdxPI1VpoHAvBDrLFuLFZRznIcQEVcKOCIA7dseP7CokaCGkmiURpNlDrhf3Q2i5qWIIte3RedMuEXwkff7pb9tJ/ZIbxb4jzL1bE3wAAAAASUVORK5CYII=";


function cssAddClass( foo ) {

	if( document.getElementsByTagName('style')[0] ) {

	document.getElementsByTagName('style')[0].innerHTML += "\n" + foo;

	} else {

	var style = document.createElement('style').innerHTML(foo);
	document.getElementsByTagName('head')[0].appendChild(style);

	}

}

function duckAnim () {
	let addedright = -130;

		forwards = setInterval(function () {

			addedright += 2;
			duck.style.right = String(addedright) + "px";

			if (duck.style.right == "0px") { clearInterval(forwards); }

		}, 10);

	var quack = setTimeout(function(){ duck.src = imgduckopen; ducksound.play(); },800);

	var quacknt = setTimeout(function(){ duck.src = imgduck; },900);

		backwards = setTimeout(function(){
			
			var innerback = setInterval(function () {
			
				addedright -= 2;
				duck.style.right = String(addedright) + "px";

				if (duck.style.right == "-130px") { clearInterval(innerback); }

			}, 10);
			
		},2000);

}

var duck = new Image();
duck.src = imgduck;

var ducksound = new Audio('quack.wav');


window.onload = function() {
	duck.className = "duck";
	
	// get div from DOM
	let duckdiv = document.getElementById('duckjs');
	var ducktext = duckdiv.textContent;
	duckdiv.textContent = "";

	cssAddClass('.duckbutton { display:block; position:fixed; bottom:10px; right:10px; background-color: yellow; padding:10px; border-radius: 25px; border:none; }');

	let duckbutton = document.createElement('button');
	duckbutton.className = "duckbutton";
	duckbutton.textContent = ducktext;
	duckbutton.onclick = function(){	
		if(!backwards || !forwards){
		duckAnim();
		setTimeout(function(){backwards = null; forwards = null;},2500)
		}
	};

	duckdiv.appendChild(duckbutton); duckdiv.appendChild(duck);
	
	cssAddClass('.duck { image-rendering:pixelated; width:130px; display:block; right:-130px; position:fixed; overflow:none; bottom:' + String(parseInt(duckbutton.clientHeight) + 20) + 'px }');
}
