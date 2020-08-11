var backwards, forwards;

var oggduck = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAAAV7nByAAAAAIC07h8BHgF2b3JiaXMAAAAAARErAAAAAAAAIE4AAAAAAACZAU9nZ1MAAAAAAAAAAAAAFe5wcgEAAAD3DzPZC0X///////////+1A3ZvcmJpczUAAABYaXBoLk9yZyBsaWJWb3JiaXMgSSAyMDE4MDMxNiAoTm93IDEwMCUgZmV3ZXIgc2hlbGxzKQAAAAABBXZvcmJpcxJCQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBADIAAAYhiGH3knMkFOQSSYpVcw5CKH1DjnlFGTSUsaYYoxRzpBTDDEFMYbQKYUQ1E45pQwiCENInWTOIEs96OBi5zgQGrIiAIgCAACMQYwhxpBzDEoGIXKOScggRM45KZ2UTEoorbSWSQktldYi55yUTkompbQWUsuklNZCKwUAAAQ4AAAEWAiFhqwIAKIAABCDkFJIKcSUYk4xh5RSjinHkFLMOcWYcowx6CBUzDHIHIRIKcUYc0455iBkDCrmHIQMMgEAAAEOAAABFkKhISsCgDgBAIMkaZqlaaJoaZooeqaoqqIoqqrleabpmaaqeqKpqqaquq6pqq5seZ5peqaoqp4pqqqpqq5rqqrriqpqy6ar2rbpqrbsyrJuu7Ks256qyrapurJuqq5tu7Js664s27rkearqmabreqbpuqrr2rLqurLtmabriqor26bryrLryratyrKua6bpuqKr2q6purLtyq5tu7Ks+6br6rbqyrquyrLu27au+7KtC7vourauyq6uq7Ks67It67Zs20LJ81TVM03X9UzTdVXXtW3VdW1bM03XNV1XlkXVdWXVlXVddWVb90zTdU1XlWXTVWVZlWXddmVXl0XXtW1Vln1ddWVfl23d92VZ133TdXVblWXbV2VZ92Vd94VZt33dU1VbN11X103X1X1b131htm3fF11X11XZ1oVVlnXf1n1lmHWdMLqurqu27OuqLOu+ruvGMOu6MKy6bfyurQvDq+vGseu+rty+j2rbvvDqtjG8um4cu7Abv+37xrGpqm2brqvrpivrumzrvm/runGMrqvrqiz7uurKvm/ruvDrvi8Mo+vquirLurDasq/Lui4Mu64bw2rbwu7aunDMsi4Mt+8rx68LQ9W2heHVdaOr28ZvC8PSN3a+AACAAQcAgAATykChISsCgDgBAAYhCBVjECrGIIQQUgohpFQxBiFjDkrGHJQQSkkhlNIqxiBkjknIHJMQSmiplNBKKKWlUEpLoZTWUmotptRaDKG0FEpprZTSWmopttRSbBVjEDLnpGSOSSiltFZKaSlzTErGoKQOQiqlpNJKSa1lzknJoKPSOUippNJSSam1UEproZTWSkqxpdJKba3FGkppLaTSWkmptdRSba21WiPGIGSMQcmck1JKSamU0lrmnJQOOiqZg5JKKamVklKsmJPSQSglg4xKSaW1kkoroZTWSkqxhVJaa63VmFJLNZSSWkmpxVBKa621GlMrNYVQUgultBZKaa21VmtqLbZQQmuhpBZLKjG1FmNtrcUYSmmtpBJbKanFFluNrbVYU0s1lpJibK3V2EotOdZaa0ot1tJSjK21mFtMucVYaw0ltBZKaa2U0lpKrcXWWq2hlNZKKrGVklpsrdXYWow1lNJiKSm1kEpsrbVYW2w1ppZibLHVWFKLMcZYc0u11ZRai621WEsrNcYYa2415VIAAMCAAwBAgAlloNCQlQBAFAAAYAxjjEFoFHLMOSmNUs45JyVzDkIIKWXOQQghpc45CKW01DkHoZSUQikppRRbKCWl1losAACgwAEAIMAGTYnFAQoNWQkARAEAIMYoxRiExiClGIPQGKMUYxAqpRhzDkKlFGPOQcgYc85BKRljzkEnJYQQQimlhBBCKKWUAgAAChwAAAJs0JRYHKDQkBUBQBQAAGAMYgwxhiB0UjopEYRMSielkRJaCylllkqKJcbMWomtxNhICa2F1jJrJcbSYkatxFhiKgAA7MABAOzAQig0ZCUAkAcAQBijFGPOOWcQYsw5CCE0CDHmHIQQKsaccw5CCBVjzjkHIYTOOecghBBC55xzEEIIoYMQQgillNJBCCGEUkrpIIQQQimldBBCCKGUUgoAACpwAAAIsFFkc4KRoEJDVgIAeQAAgDFKOSclpUYpxiCkFFujFGMQUmqtYgxCSq3FWDEGIaXWYuwgpNRajLV2EFJqLcZaQ0qtxVhrziGl1mKsNdfUWoy15tx7ai3GWnPOuQAA3AUHALADG0U2JxgJKjRkJQCQBwBAIKQUY4w5h5RijDHnnENKMcaYc84pxhhzzjnnFGOMOeecc4wx55xzzjnGmHPOOeecc84556CDkDnnnHPQQeicc845CCF0zjnnHIQQCgAAKnAAAAiwUWRzgpGgQkNWAgDhAACAMZRSSimllFJKqKOUUkoppZRSAiGllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimVUkoppZRSSimllFJKKaUAIN8KBwD/BxtnWEk6KxwNLjRkJQAQDgAAGMMYhIw5JyWlhjEIpXROSkklNYxBKKVzElJKKYPQWmqlpNJSShmElGILIZWUWgqltFZrKam1lFIoKcUaS0qppdYy5ySkklpLrbaYOQelpNZaaq3FEEJKsbXWUmuxdVJSSa211lptLaSUWmstxtZibCWlllprqcXWWkyptRZbSy3G1mJLrcXYYosxxhoLAOBucACASLBxhpWks8LR4EJDVgIAIQEABDJKOeecgxBCCCFSijHnoIMQQgghREox5pyDEEIIIYSMMecghBBCCKGUkDHmHIQQQgghhFI65yCEUEoJpZRSSucchBBCCKWUUkoJIYQQQiillFJKKSGEEEoppZRSSiklhBBCKKWUUkoppYQQQiillFJKKaWUEEIopZRSSimllBJCCKGUUkoppZRSQgillFJKKaWUUkooIYRSSimllFJKCSWUUkoppZRSSikhlFJKKaWUUkoppQAAgAMHAIAAI+gko8oibDThwgMQAAAAAgACTACBAYKCUQgChBEIAAAAAAAIAPgAAEgKgIiIaOYMDhASFBYYGhweICIkAAAAAAAAAAAAAAAABE9nZ1MABKAGAAAAAAAAFe5wcgIAAAALXk4lCEVHSUZISUpEquAmnc28AHTgUvKKp6/pj4PehCkqreIhGZ1Y55Nfi6+6zQOPdzl2uyzCv96t42t/7qgsgEj8dEupw0kru5/d/KSLx0sAnuH2FD6aLwEAIJWk2lyUmU/abqKlmJCyk98m4y5U9LFpSL7XbU7loe2mSj70vJpo55WRXQet1nrnbuqbVIN7/jNAXBEUCQCiHjbRwsU6EMjIzY4/t5X3ld7ZpeaWqTwYEB7EjEEiJVEuL3IqJWxjaTqOerfZ0TaNPKKX2/wWx2C7yhIs+4RAJuWtvu7H624RnqCkpl2ooaAAj4Sm1sYmsv9Z8F7QCP73so4m++Hk5h9kVFsPXPAzpnszHWc6znRfHvOTDoxkJECPUjCUZjYvkuqeJi23A5pcL2OPToYS0ADjSAAI7G8I1y3svwKWXBJuAmQBz+BWgTESf1qb3r7WakkN7h8FRt3WsMI8HpygG9t5uRSadJ8qA3fi417jAJ5cvrLGQwWQkR8w3J7d5l/mSOhSRVUM0/FQe3//3JxvWEupnpHYsMKhZhindHBSITe6ajyNWnFgcYNIZoLLal1w7yx628zmNQGW2n5KmWHgCYDIQp5uOj+pMDntQnU5NCKZ7sVLwwFZFdbhFv/94tgiHrggy225NCz0aNooWmqayRrdV4aSZYbMWw7PfP9a001PBIrTrg8ZAJFKxScn7399XMdJzZm8pkQfkIAINznQdEe8PyLwttQ7ftI052WoLotwf8DpRWA0xkgE7CORQYmiP5B4TxkA";
var imgduck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAVklEQVQoz6WRSw6AMAhEH5yiR+5Re4txIwka1LbOik8eGQA2ZDlpQhEPu/ZKKAMzIADqSB2dsKohUfMAbk2egE97lYZhPu0/yVdOHYP995/edluxX+oAarQf4d+S0rQAAAAASUVORK5CYII=";
var imgduckopen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAWUlEQVQoz5WRwQ3AIAwDz0zRkRmVLdxPI1VpoHAvBDrLFuLFZRznIcQEVcKOCIA7dseP7CokaCGkmiURpNlDrhf3Q2i5qWIIte3RedMuEXwkff7pb9tJ/ZIbxb4jzL1bE3wAAAAASUVORK5CYII=";

function cssAddClass( foo ) {
	// Check if style element exists. If not, create one.
	if( document.getElementsByTagName('style')[0] ) {

	document.getElementsByTagName('style')[0].innerHTML += "\n" + foo;

	} else {

	var style = document.createElement('style');
	style.innerHTML = foo;

	var head = document.getElementsByTagName('head')[0];
	head.appendChild(style);

	}

}

function duckAnim () {
	// TODO: Should be user-adjustable.
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

var ducksound = new Audio(oggduck);


window.onload = function() {
	duck.className = "duck";
	
	// Get div from DOM.
	let duckdiv = document.getElementById('duckjs');
	var ducktext = duckdiv.innerHTML;
	duckdiv.innerHTML = "";

	cssAddClass('.duckbutton { display:block; position:fixed; bottom:10px; right:10px; background-color: yellow; padding:10px; border-radius: 25px; border:none; }');

	let duckbutton = document.createElement('button');
	duckbutton.className = "duckbutton";

	if (ducktext == "") {
	duckbutton.innerHTML = "click me<br>for duck"
	} else {
	duckbutton.innerHTML = ducktext;
	}
	
	duckbutton.onclick = function(){	
		if(!backwards || !forwards){
		duckAnim();
		setTimeout(function(){backwards = null; forwards = null;},2500)
		}
	};

	duckdiv.appendChild(duckbutton); duckdiv.appendChild(duck);
	
	cssAddClass('.duck { image-rendering:pixelated; width:130px; display:block; right:-130px; position:fixed; overflow:none; bottom:' + String(parseInt(duckbutton.clientHeight) + 20) + 'px }');
}
