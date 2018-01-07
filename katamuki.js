/*
Katamuki.js Ver.1.1
(c)2015-2018 Sora Arakawa all rights reserved.
*/

window.onload=function(){
	var image_list = document.getElementsByTagName("img");
	if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1){
		document.body.style.transform="rotate(0.05deg)";
		document.getElementsByTagName("img").style.transform="rotate(-0.05deg)";
		for (var i=0; i<=image_list.length; i++){
			image_list[i].style.transform="rotate(-0.05deg)";
		}
	}else{
		document.body.style.transform="rotate(0.001deg)";
		for (var i=0; i<=image_list.length; i++){
			image_list[i].style.transform="rotate(-0.001deg)";
		}
	}
}