window.onload = function() {
	//购物车
	var oBtn = document.getElementById('godiv1');
	var oDiv = document.getElementById('godiv2');

	oBtn.onmousemove = function(ev) {
		var oEvent = ev || event;

		oDiv.style.display = 'block';

		oEvent.cancelBubble = true;
	}
	document.onmousemove = function(ev) {
		oDiv.style.display = 'none';
	}
	
	
	
	//动态图边上
	var oDongdiv1=document.getElementById('dongdiv1');
	var oDongul=document.getElementById('dongul')[0];
	var aBtnli=document.getElementsByClassName('btnli');
	var oDongol=document.getElementsByClassName('dongol')
	
	
	for(var i=0;i<aBtnli.length;i++){
		aBtnli[i].setAttribute('index',i);
		
		aBtnli[i].onmouseover=function(){
			var index=this.getAttribute('index');
			oDongol[index].style.display='block';
			
		}
		aBtnli[i].onmouseout=function(){
			var index=this.getAttribute('index');
			oDongol[index].style.display='none';
		}
	}
	
	
	
	
	
}