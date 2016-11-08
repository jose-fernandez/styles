function changeCSS(){
	document.getElementById("temaNormal").addEventListener("click", function(x){
		document.getElementById("css").href="temanormal.css";
	});
	document.getElementById("temaMinimalista").addEventListener("click", function(y){
		document.getElementById("css").href="temaminimalista.css";
	});
}

window.onload=function(){
	changeCSS();
}