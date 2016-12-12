	$(document).ready(function() {

		 


		if(promoteQuota==0){ 
			$("a[data-dwte]").find("span").html("申请额度");

		}else if(promoteQuota==1){
			$("a[data-dwte]").find("span").html("点我提额");		 

		}else if(promoteQuota==3){
			$("a[data-dwte]").find("span").html("立即还款");
			 
		}

		 
		$("a[data-dwte]").bind("click", function(){


			if(promoteQuota==0){ 
				 
				if(processCode == '00' || processCode == ""){
					window.location.href='authentication_02';
				}else if(processCode == '10'){
					window.location.href='linkman';
				}else if (processCode == '20'){
					window.location.href='zhimaxinyong';
				}

			}else if(promoteQuota==1){
				 
				if(processCode == '30'){
				    window.location.href='operator_01';
				}else if(processCode == '40'){
					window.location.href='credit_03';
				}

			}else if(promoteQuota==3){
				 
				window.location.href='productList';
			}

			});

	 scrollNews();



	});
	 
 /*文字滚动提示*/
  function scrollNews(){

  	var num;
    var docEl = document.documentElement;
	var clientWidth = docEl.clientWidth;
	if (!clientWidth){
		return
	}
		 
	 
	if (clientWidth >= 750) {
		num = 100;
	} else {
		num = 100 * (clientWidth / 750);
	}


  var height=Math.round(0.8*num);


  var box=$("a[data-scroll]")[0],can=true;
  box.innerHTML+=box.innerHTML;
  
 (function(){
   var stop=box.scrollTop%height==0&&!can;
   if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
   setTimeout(arguments.callee,box.scrollTop%height?20:2000);
  })();

  }

