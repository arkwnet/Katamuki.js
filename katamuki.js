/*
Katamuki.js Ver.1.2
(c)2015-2018 Sora Arakawa all rights reserved.
Released under the MIT license

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.onload=function(){
	var image_list = document.getElementsByTagName("img");
	if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1 && window.navigator.userAgent.toLowerCase().indexOf("edge")==-1){
		document.body.style.transform="rotate(0.05deg)";
		document.getElementsByTagName("img").style.transform="rotate(-0.05deg)";
		for (var i=0; i<image_list.length; i++){
			image_list[i].style.transform="rotate(-0.05deg)";
		}
	}else{
		document.body.style.transform="rotate(0.001deg)";
		for (var i=0; i<image_list.length; i++){
			image_list[i].style.transform="rotate(-0.001deg)";
		}
	}
}