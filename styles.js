function changeCSS(){
	//THEMES
	document.getElementById("temaNormal").addEventListener("click", function(x){
		document.getElementById("css").href="temanormal.css";
	});
	document.getElementById("temaMinimalista").addEventListener("click", function(y){
		document.getElementById("css").href="temaminimalista.css";
	});
	var cont=16;
	//BUTTONS
	document.getElementById("+").addEventListener("click", function(y){
		cont++;
		document.body.style.fontSize=cont;
	});

	document.getElementById("-").addEventListener("click", function(y){
		cont--;
		console.log(document.getElementsByTagName('body'));
		document.body.style.fontSize=cont;
	});

	document.getElementById("justify").addEventListener("click", function(y){
		document.body.style.textAlign="justify";
	});

	document.getElementById("normal").addEventListener("click", function(y){
		document.body.style.textAlign="left";
	});
}


window.onload=function(){
	changeCSS();
};
