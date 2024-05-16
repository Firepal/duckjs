var oggduck = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAACZFFS8AAAAANZ6V4cBE09wdXNIZWFkAQE4AYC7AAAAAABPZ2dTAAAAAAAAAAAAAJkUVLwBAAAA2LoYVgE+T3B1c1RhZ3MNAAAATGF2ZjU5LjI0LjEwMAEAAAAdAAAAZW5jb2Rlcj1MYXZjNTkuMjguMTAwIGxpYm9wdXNPZ2dTAAS9IQAAAAAAAJkUVLwCAAAAP2EgVwlSYV5VTlFbVD5ohCettVhuEeGYxCjvJEBzcBCNbJWYHF59oEjFq/C+9P1pu8C04eVMcP2DLSoRPIIu5w0EvGTsxgfQMKMA64A1z8uQfTk7NmiJwdobJw+1O3zraLkBeuV9HZQkTs253m72/FWZlNIf3AN6oOWeIsAQJWr2LkaVDXR5AfNt5JkP5ICvAdLmXtvxjkuHSIuwF6Hs139Si2psxywu7GGFe0DxnPEUcwLzGklARkrz1qANa3fnymi6fQeHJfVc/fgmhQrC9Y1CFKgT4UJKbwpOcaUYeeFruH3HyEyMu9Q27z3ZpQhfPyO+nhcMeXT3PItYucQWesi06OTA5y39Mu95wp4CgQL9KI8dSWB506cs9f0GBeFoum/7Ob911V2LfYj7kMENU8NcuKrBxAMIeJKK2O1tzd+oRCnyqRoE4fzfc13zUPWhCEKViaWWSrmo5g8McAuJAEvo7N58BXEYrnO39J7nIsjBVvc/aLpXqDiWBItJOzodPs2VY1tvItUDcRuWeGimF5gtWUs7b1aJgBSF96RuK2o7WjimOi7AcI3QoBQtRjxSDvIyWGFgXcQHZlBmRlXjRqtGaLihezm82zyJFF9T7mmK3zoqyoby4qsEETMljjj3088Sb2bMXqlsSyz8SaZtFxmb4hCQquckNbNXZ5iLbY7Y93j2NihoD0ehd7fWYPQLsCJwaLhru3Vf2UxRqWGVnVi23aSHGRypfKVZUd64EvCzJ8sLcm9OtfuLntCv9SQqGZONOszbqgZFbMcDMG/d/u7BB0ibcHuDov+OATfojiwlIPVdzOyZ6mtubn1NqWi/mBwUZW4OPMDSQnYM1hoL1yhd3UpTWJju8sFrlEYrtJ7pPLkvK7wsowEphJRJbVMv42/rDh2Fpgf+Oc+wr+CJ4IHRa2d/FOvo8Ni6asBtHGHCAGg9TgydxzLj50oFEAf0vqP2657c4s3KPC1eyQBR1kxck0COA3xpGH/4/8kOAdlKYsNXUOTJyLexeLfEWr2a"
var imgduck = "data:image/webp;base64,UklGRjwAAABXRUJQVlA4TC8AAAAvDIACEAoFbRs5D/9Z7wUhUQUCSRj7ix79nwCeW3rheqrHYiMk0UUBLwE+8YEdzwA="
var imgduckopen = "data:image/webp;base64,UklGRjwAAABXRUJQVlA4TDAAAAAvDIACEAoFbRs5D/9Z7wUhUQUCSRj7ix79nwCgpZxdT/VYnJLoRtadi5cAn/jAjmc="

function cssAddClass( foo ) {
	let style_node = document.getElementsByTagName('style')[0]
	
	if( !style_node ) {
	style_node = document.createElement('style')

	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
	}
	style_node.innerHTML += "\n" + foo

}

var phase = 0
var acc = 0 // for timing and position

function next_phase_if(incr, max) {
	acc += incr
	if (acc > max) { nextPhase() }
}

function nextPhase() {
	phase += 1
	acc = 0
}

function setDuckPos(x) {
	duck.style.right = String(x) + "px";
}

function duckAnim(start) {
	if (phase != 0 && start == true) {
		console.log("no")
		return
	}
	
	if (phase == 0) {
		acc = -130
		phase = 1
	}

	switch (phase) {
		case 1: // duck enter
			acc = Math.min(acc+4,0)
			setDuckPos(acc)
			next_phase_if(0,-1); break
		case 2: // quack
			duck.src = imgduckopen
			if (acc == 0) {
				ducksound.play()
			}
			next_phase_if(1,3); break
		case 3: // duck idle
			duck.src = imgduck
			next_phase_if(1,40);break
		case 4: // duck exit
			acc = Math.max(acc-4,-130)
			setDuckPos(acc)
			if (acc == -130) {
				console.log("done")
				phase = acc = 0
			}
			break
	}

	if (phase != 0) {
		requestAnimationFrame(_ => duckAnim(false))
	}
}

var duck = new Image();
duck.src = imgduck;

var ducksound = new Audio(oggduck);


window.onload = function() {
	duck.className = "duck";
	
	// Get div from DOM.
	let duckdiv = document.getElementById('duckjs');

	// TODO: Use a custom attribute for setting the button text instead of the element's body.
	var ducktext = duckdiv.innerHTML;
	duckdiv.innerHTML = "";

	cssAddClass('.duckbutton { display:block; position:fixed; bottom:10px; right:10px; background-color: yellow; padding:10px; border-radius: 25px; border:none; }');

	let duckbutton = document.createElement('button');
	duckbutton.className = "duckbutton";

	duckbutton.innerHTML = "click me<br>for duck"
	if (ducktext != "") {
		duckbutton.innerHTML = ducktext;
	}
	
	duckbutton.onclick = (_ => duckAnim(true));

	duckdiv.appendChild(duckbutton);
	duckdiv.appendChild(duck);
	
	cssAddClass('.duck { image-rendering:pixelated; image-rendering: crisp-edges; width:130px; display:block; right:-130px; position:fixed; overflow:none; bottom:' + String(parseInt(duckbutton.clientHeight) + 20) + 'px }');
}
