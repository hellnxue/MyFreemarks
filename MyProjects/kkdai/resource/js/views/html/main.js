var bindCardBeforeFlag="";	
var authentication_02='authentication_02';	//身份验证信息page
var linkman='linkman';						//联系人page
var zhimaxinyong='zhimaxinyong';			//芝麻信用page

var operator_01="operator_01";  //运营商
var credit_03="credit_03";		//征信验证

$(document).ready(function() {
	 
	 setDateInfo()
		if(promoteQuota==0){ 
			
			$("a[data-dwte]").show().find("span").html("申请额度");
			
			if(processCode == '00' || processCode == ""){
				
				bindCardBeforeFlag=authentication_02;
				
			}else if(processCode == '10'){
			
				bindCardBeforeFlag=linkman;
				
			}else if (processCode == '20'){
				
				bindCardBeforeFlag=zhimaxinyong;
			}

		}else if(promoteQuota==1){
			$("a[data-dwte]").show().find("span").html("点我提额");		 

		} else if(promoteQuota==2){
			$("a[data-dwte]").hide();
			//$("a[data-dwte]").find("span").html("立即还款");
			 
		}
		
		//还款提示
		$("#tips").html(repayRem );

		 
		$("a[data-dwte]").bind("click", function(){


			if(promoteQuota==0){ 
				 
				if(processCode == '00' || processCode == ""){
					window.location.href=authentication_02;
					bindCardBeforeFlag=authentication_02;
				}else if(processCode == '10'){
					window.location.href=linkman;			
					bindCardBeforeFlag=linkman;
				}else if (processCode == '20'){
					window.location.href=zhimaxinyong;	
					bindCardBeforeFlag=zhimaxinyong;
				}

			}else if(promoteQuota==1){
				 
//				if(processCode == '30'){
//				    window.location.href='operator_01';
//				}else if(processCode == '40'){
//					window.location.href='credit_03';
//				}
				location.assign("withdraw_cash");

			}
//			else if(promoteQuota==2){
//				 
//				//window.location.href='productList';
//			}

			});

	 //最新消息	
	 scrollNewsInfo({
	 	height:0.8, 
	 	scrollDom:$("a[data-scroll]")[0]
	 });

	//最新动态
	scrollNewsInfo({
	 	height:0.8,
	 	scrollDom:$("a[data-scroll]")[1]
	 });
	
	/*借款*/
	$("div[data-href]").on("click",function(){
		var proSel=$(this).data("href");
		var cardHref=$(this).data("cardHref");
		
		console.log(bindCardBeforeFlag);
		if(bindCardBeforeFlag){
			
			MessageWin("请先申请额度！", function(){
				
				location.assign(bindCardBeforeFlag);
				
			});
			
		}else{
			if(credit==1&&card==1){
				window.location.href=proSel;
			}else{
				if(credit==0&&card==0){
					$("#cardType").val("J");
				}else if(credit==1&&card==0){
					$("#cardType").val("J");
				}else if(credit==0&&card==1){
					$("#cardType").val("X");
				}
				$("#cardForm").attr("action",cardHref).submit();
			}
			
		}
		
		
		
	});

	});
	 
  /*文字滚动提示*/
  function scrollNewsInfo(obj){

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


	  var height=Math.round(obj.height*num);


	  var box=obj.scrollDom,can=true;
	  box.innerHTML+=box.innerHTML;
	  
	 (function(){
	   var stop=box.scrollTop%height==0&&!can;
	   if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
	   setTimeout(arguments.callee,box.scrollTop%height?20:2000);
	  })();

  }
  
  
  function setDateInfo(){
	  var weekAry=["周日","周一","周二","周三","周四","周五","周六"];
	  var date=new Date(), 
	  dateStr=date.toString(),
	  monthEn=dateStr.substring(dateStr.indexOf(" ",0)+1,dateStr.indexOf(" ",dateStr.indexOf(" ",0)+1)),
	  day=date.getDate(),
	  week=date.getDay(),
	  hour=date.getHours(),
	  todayWeek=weekAry[week];
	  var dHTML=' <span>'+day+'</span>.<span>'+monthEn+'</span>.<span>'+todayWeek+'</span>';
	  
	  if(hour>=6&&hour<=18){
		  
		   dHTML='<img class="day" src="'+path+'/resource/images/main/v1/sunny-@2x.png">'+dHTML;
		  
		}else{
			  dHTML='<img class="night" src="'+path+'/resource/images/main/v1/night@2x.png">'+dHTML;
			  
		}
	  
	  $("div[data-date]").html(dHTML);
	  
	  
	  
	   
  }

