
        var  liObj = document.getElementById('ulObj').children; //方法一
        // var  liObj = document.getElementById('ulObj').getElementsByTagName('li');//方法二
        var  divObj = document.getElementById('box');  
        var  arrowObj = document.getElementsByClassName('w'); 
        var  imgObj = document.getElementById('box').getElementsByTagName('img'); 
        var  timeBox = null;  
        var  sum = 0; 

          for (var i = 0; i < liObj.length; i++)
          {
                 liObj[i].setAttribute('index',i); 
                liObj[i].onmouseover = function(){
                    var index = this.getAttribute('index'); 
                    sum = index;
                    for (var j = 0; j < liObj.length;j++) {
                        liObj[j].className = ''
                    }
                    for (var k = 0; k < imgObj.length; k++) {
                      imgObj[k].className = '';
                    }
                    imgObj[index].className = 'show';
                    this.className ='on';
                }
          }
        divObj.onmouseover = function(){
            for(var i=0;i<arrowObj.length;i++){
                arrowObj[i].style.display= 'block';
            }
            clearInterval(timeBox);
        }
        divObj.onmouseout = function(){
          for(var i=0;i<arrowObj.length;i++){
              arrowObj[i].style.display= 'none';
          }
          timeBox = setInterval(function(){
               clock();
          },1000);
        }
        function clock(){
          if(sum==liObj.length){
                sum = 0;
          }
           for (var j = 0; j < liObj.length;j++) {
               liObj[j].className = ''
           }
           for (var k = 0; k < imgObj.length; k++) {
             imgObj[k].className = '';
           }
           imgObj[sum].className = 'show';
          liObj[sum].className = 'on';
          sum++;
        }
       	arrowObj[1].onclick=function(right1){
           if(sum==liObj.length){
                sum = 0;
          }
           //先循环把小球的class名清空，就是小球变白色
           for (var j = 0; j < liObj.length;j++) {
               liObj[j].className = ''
           }
           for (var k = 0; k < imgObj.length; k++) {
             imgObj[k].className = '';
           }
           imgObj[sum].className = 'show';

          liObj[sum].className = 'on';
          sum++;
        }
       	
       	arrowObj[0].onclick=function(left1){
           if(sum==0){
                sum =liObj.length-1;
          }else{sum--;}
           for (var j = 0; j < liObj.length;j++) {
               liObj[j].className = ''
           }
           for (var k = 0; k < imgObj.length; k++) {
             imgObj[k].className = '';			
           }
           imgObj[sum].className = 'show';
           liObj[sum].className = 'on';
        }

	var fm = document.getElementsByClassName('first-menu');	
	var nl = document.getElementsByClassName('next-level');
	
	for(var i=0;i<fm.length;i++){
		
		fm[i].setAttribute('index',i);
		fm[i].onmouseover=function(){
		var index = this.getAttribute('index');
		nl[index].style.display='block';
			if(index>=1){
				nl[index].style.top =(index * 30 + 15) * -1  +'px'; 
			}else{
				nl[index].style.top = 15 * -1 +'px';
			}
		
		}
		
		fm[i].onmouseout=function(){
			var index = this.getAttribute('index');
			nl[index].style.display='none';
		}
	}
	
	var nf = document.getElementsByClassName('nf');
	
	for(var i=0;i<nf.length;i++){
	nf[i].setAttribute('index',i);
	nf[i].onmouseover=function(){
		var index =this.getAttribute('index');
		
		var img = this.getElementsByTagName('img');
		console.log(index);
//		img.style.top = -5 +'px';
	}
  }
