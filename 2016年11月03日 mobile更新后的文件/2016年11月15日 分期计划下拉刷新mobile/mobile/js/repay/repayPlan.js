//var pageIndex=1,total=5,myScroll,pageSize=3;
//var i=0;
//$(function(){
//	 
//		if (myScroll){
//		  myScroll.destory();
//		}
//		
//	myScroll = new iScroll('wrappers',{ hScrollbar: false, vScrollbar: false,onScrollEnd:pullTo});
//	
//	// 保单信息
//	// 默认第一页
//	 policyInfo();
//});

 

var myScroll,pullDownEl, pullDownOffset,pullUpEl, pullUpOffset,generatedCount = 0;  

function loaded() {  
    //动画部分  
    pullDownEl = document.getElementById('pullDown');  
    pullDownOffset = pullDownEl.offsetHeight;  
    pullUpEl = document.getElementById('pullUp');     
    pullUpOffset = pullUpEl.offsetHeight;  
    myScroll = new iScroll('wrappers', {  
        useTransition: true,  
        topOffset: pullDownOffset,  
        onRefresh: function () {  
            if (pullDownEl.className.match('loading')) {  
                pullDownEl.className = '';  
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';  
            } else if (pullUpEl.className.match('loading')) {  
                pullUpEl.className = '';  
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';  
            }  
        },  
        onScrollMove: function () {  
          
            if (this.y > 5 && !pullDownEl.className.match('flip')) {  
                pullDownEl.className = 'flip';  
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';  
                this.minScrollY = 0;  
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {  
                pullDownEl.className = '';  
                pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';  
                this.minScrollY = -pullDownOffset;  
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {  
                pullUpEl.className = 'flip';  
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';  
                this.maxScrollY = this.maxScrollY;  
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {  
                pullUpEl.className = '';  
                pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';  
                this.maxScrollY = pullUpOffset;  
            }  
        },  
        onScrollEnd: function () {  
            if (pullDownEl.className.match('flip')) {  
                pullDownEl.className = 'loading';  
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';                 
                pullDownAction();   // Execute custom function (ajax call?)  
            } else if (pullUpEl.className.match('flip')) {  
                pullUpEl.className = 'loading';  
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';                 
                pullUpAction(); // Execute custom function (ajax call?)  
            }  
        }  
    });  
      
    loadAction();  
}  
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);//阻止冒泡  
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 0); }, false);  
  
//初始状态，加载数据  
function loadAction(){  
    /*var el, li;  
    el = document.getElementById('thelist');  
    for (i=0; i<10; i++) {  
        li = document.createElement('li');  
        li.innerText = '初始数据--' + (++generatedCount);  
        el.appendChild(li, el.childNodes[0]);  
    }  
    myScroll.refresh();  */
}  
  
//下拉刷新当前数据  
function pullDownAction () {  
    setTimeout(function () {  
        //这里执行刷新操作  
          
        myScroll.refresh();   
    }, 400);  
}  
  
//上拉加载更多数据  
function pullUpAction () {  
    setTimeout(function () {  
    	
    	var  html;
  		html='<div class="list"> <div class="row"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-t">'
  			+
  			'<span class="pull-left m-l ctColor">还款期数&nbsp;&nbsp;3/20</span> <span class="pull-right m-r mdSpan spanBlue"><b>未还款</b></span></div></div>'
  			+
  				'<div class="row"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <hr class="myHr"> </div>'
  			+	'</div> <div class="row sdSpan">'
  			+		'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-sm">'
  			+			'<span class="pull-left m-l-lg ctColor"><b>应还金额</b></span> <span class="pull-left m-l-sm spanBlue"><b>300.00</b></span> <span'
  			+				'class="pull-right m-r ctColor">2016.12.12</span> <span'
  			+				'class="pull-right ctColor">应还日期:</span> </div>'
  			
  			+		'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-sm">'
  			
  			+			'<span class="pull-left m-l-lg  ctColor">应还本金</span> <span'
  			+				'class="pull-left m-l-sm  spanBlue">300.00</span></div>'
  			
  			+		'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-sm">'
  			
  			+			'<span class="pull-left m-l-lg  ctColor">应还利息</span> <span class="pull-left m-l-sm  spanBlue">1000.00</span> </div> </div>'
  							 
  						 
  			$("#thelist").append(html);
  			myScroll.refresh();  
    }, 400);  
} 