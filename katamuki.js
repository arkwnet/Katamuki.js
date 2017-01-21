/*
Katamuki.js Ver.1.0
(c)2015-2017 Sora Arakawa all rights reserved.
*/

window.onload=function(){
	if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1){
		document.body.style.transform="rotate(0.05deg)";
	}else{
		document.body.style.transform="rotate(0.001deg)";
	}
}