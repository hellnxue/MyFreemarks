var bindCardBeforeFlag="";	
var authentication_02='authentication_02';	//身份验证信息page
var linkman='linkman';						//联系人page
var zhimaxinyong='zhimaxinyong';			//芝麻信用page

var operator_01="operator_01";  //运营商
var credit_03="credit_03";		//征信验证

$(document).ready(function() {
	
		sessionStorage.promoteQuota=promoteQuota;
		sessionStorage.processCode=processCode;
		sessionStorage.credit=credit;
		sessionStorage.card=card;
	 
		setDateInfo();
		
		setNewsInfo(newInfo);
		
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
				
				if(bindCardBeforeFlag){
					window.location=bindCardBeforeFlag;
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

	
	/*借款、绑定银行卡*/
	$("[data-href]").on("click",function(e){
		
		e.preventDefault();
		var proSel=$(this).data("href");
		var cardHref=$(this).data("cardHref");
		
		if(bindCardBeforeFlag){
			
			MessageWin("请先申请额度！", function(){
				
				location.assign(bindCardBeforeFlag);
				
			});
			
		}else{
			if(credit==1&&card==1){//借钱还信用卡
				
				window.location.href=proSel;
				
			}else{ //银行卡绑定
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
	 
 
  
  /**
   * 日期
   */
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
  
  
  /**
   * 最新活动
   */
  function setNewsInfo(newsItem){
	  
	  if(newsItem.indexOf("|")){
		  var newsAry=newsItem.split("|");
		  $("a[data-scroll]").empty();
		  $.map(newsAry,function(item,index){
			  $("a[data-scroll]").append(' <span class="news_span">'+item+'</span>');
		  });
		  
		  scrollNewsInfo({
			 	height:0.8, 
			 	scrollDom:$("a[data-scroll]")[0]
			 });
		  
	  }
	  
	  
  }

