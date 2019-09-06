var menuOpen=false;
elem('menu').style.height=0;
addEvent(window,"resize",windowSizeChanged);
addEvent(elem('menu-toggle'),"mousedown",toggleMenu);
checkMenu();

/* WINDOW WAS RESIZED EVENT */
function windowSizeChanged(){
	TweenMax.killAll();
	checkMenu();
	startSlider();
}
/* CHECK MENU */
function checkMenu(){
	if(getWidth()<640){elem('menu-toggle').style.display='block'; menuOpen=true; toggleMenu();}
	else{elem('menu-toggle').style.display='none'; menuOpen=false; toggleMenu();}
}
/* GET WINDOW WIDTH */
function getWidth(){var w=window, d=document, e=d.documentElement, g=d.getElementsByTagName('body')[0], x=w.innerWidth||e.clientWidth||g.clientWidth; return x;}
/* GET DOM ELEMENT BY ID */
function elem(elemName){var getElem=document.getElementById(elemName); return getElem;}
/* TOGGLE MENU */
function toggleMenu(){
	if(menuOpen){menuOpen=false; elem('menu').style.height='0px'; elem('close-menu').style.display='none'; elem('open-menu').style.display='block';}
	else{menuOpen=true; elem('menu').style.height='188px'; elem('close-menu').style.display='block'; elem('open-menu').style.display='none';}
}
/* TOGGLE FAQ */
function toggleAnswer(thisFAQ){
	if(elem(thisFAQ).style.maxHeight=='500px'){elem(thisFAQ).style.maxHeight='0px'; elem(thisFAQ+"close").style.display='none'; elem(thisFAQ+"open").style.display='block';}
	else{elem(thisFAQ).style.maxHeight='500px'; elem(thisFAQ+"close").style.display='block'; elem(thisFAQ+"open").style.display='none';}
}
/* ADD EVENT LISTENERS */
function addEvent(elem,type,eventHandle){
	if(elem==null||typeof(elem)=='undefined') return;
	if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type, eventHandle);}else{elem["on"+type]=eventHandle;}
}
/* TOGGLE DIV */
function toggleVisible(divName){
	if(elem(divName).style.display=='none'){elem(divName).style.display='block';}else{elem(divName).style.display='none';}
}
