window.onload=function(){
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