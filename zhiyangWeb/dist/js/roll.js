function roll(){
	var oDiv = document.getElementById('roll'),
		oUl = oDiv.getElementsByTagName('ul')[0],
		oLi = oUl.getElementsByTagName('li'),
		oBtn = oDiv.getElementsByTagName('a'),
		iSpeed = -1,
		timer;

	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = oLi[0].offsetWidth * oLi.length + 'px';

	oBtn[0].onclick = fLeft;
	oBtn[1].onclick = fRight;
	oUl.onmouseover = fStop;
	oUl.onmouseout = fRmove;
	timer = setInterval(fMove,30);

	function fMove(){
		var getOulLeftData = oUl.offsetLeft,
			getOulWidthData = oUl.offsetWidth;

		oUl.style.left = getOulLeftData + iSpeed + 'px';
		if(getOulLeftData < -getOulWidthData/2){
			oUl.style.left = '0px';
		}else if(getOulLeftData > 0){
			oUl.style.left = -getOulWidthData/2 + 'px';
		};
	};

	function fLeft(){
		iSpeed = -1;
	};
	function fRight(){
		iSpeed = 1;
	};
	function fRmove(){
		timer = setInterval(fMove,30);
	};
	function fStop(){
		clearInterval(timer);
	};
}
roll();