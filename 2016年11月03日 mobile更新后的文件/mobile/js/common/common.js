//以下为公共调用区域，用不上的，请删除(顺便删除最底下效果功能块)
$(function(){

		//算高度-全页
		$(".H_main").css("height",$(window).height()); 
		
		//算高度-有顶部
		$(".H_top").css("height",$(window).height()-40); 
		$(".H_title").css("height",$(window).height()-48); 
		$(".H_top_gps").css("height",$(window).height()-120);
		$(".H_banner_gd").css("height",$(window).height()-192);
		$(".H_qbzs").css("height",$(window).height()-155);
		$(".H_bdxq").css("height",$(window).height()-42);//22_bdmx
		//算高度-有顶部-有底部
		$(".H_top_bot").css("height",$(window).height()-90); 
		$(".H_top_qh").css("height",$(window).height()-222); 
		
		var ih = $("#img_h").height();
		$(".H_lqzs").css("height",($(window).height()-ih));
		$(".H_sjbd").css("height",($(window).height()-ih)-25);
		
		
		var toph = $("#index_top").height();
		$(".H_index").css("height",($(window).height()-toph)-50);
		
		var wdmp = $("#wdmp_top").height() + $(".index_05_foot_div").height();
		$(".H_yjmx").css("height",($(window).height()-wdmp)-28);
		$(".H_wdmp").css("height",($(window).height()-wdmp)-5);
		$(".H_yjyjs").css("height",($(window).height()-wdmp)-31);
		$(".H_bdlb").css("height",($(window).height()-wdmp)+2);
		$(".H_falb").css("height",($(window).height()-wdmp)-2);
		$(".H_grxx").css("height",($(window).height()-wdmp)-70);
		$(".H_hdjs").css("height",($(window).height()-wdmp)-64);
		$(".H_wckh").css("height",($(window).height()-wdmp)-7);
		$(".H_bdcx").css("height",($(window).height()-wdmp)-43);
		$(".company").css("height",($(window).height()-wdmp)-6);
		$(".scheme_Detail").css("height",($(window).height()-wdmp)-2);

		
		//禁止页面滑动
		//$("body").on('touchmove',function(){event.preventDefault()});
		
		//禁止TD里的按钮冒泡
		//$(".table_list tr td span").on('click',function(e){event.stopPropagation();});
		
		//高度=宽度
		$(".bdcg_top_tx").height($(".bdcg_top_tx").width());
		$(".wdmp_08_con_photo").height($(".wdmp_08_con_photo").width());
		$(".img_div").height($(".img_div").width());
		$(".img_h_w").height($(".img_h_w").width());
		$(".faleib_13_faleib_table2").width($(".faleib_13_faleib_table").width());
		$(".p_37img").height($(".p_37img").width());
		  //复选调用
		$(".check_blo").chkAll();
		$(".check_blo2").chkAll2();
		 
		 //单选调用
		$(".radio_blo").radioAll();
		$(".radio_blo_m").radioAll2();
		$(".radio_blo_small").radioAll3();
		$(".radio_blo_yjyjs").radioAll4();
		 
 		//切换块调用--一页多个复制添加
		initDivHide("divHide","tab_style","divTab","tab_normal","tab_cur");
		initDivHide("divHide","lqzs_14_top_tab","divTab","","span_cur");
//		initDivHide("divHide","fafl_top_tab","divTab","","span_gs_cur");
		//initDivHide("divHide","qbzs_top_tab","divTab","","span_zx_cur");
		
		
		generatePhoto("photo1","divpt");
 	    $(window).resize(function(){
 		generatePhoto("photo1");
 	    });
		 
		  
});

 
/*复选以及全选*/
$.fn.chkAll=function(){
			
		 var findmain = $(this).find('span')
		 
		 $(findmain).click(function(){
 				 if($(this).is(".check_no")){
						$(this).addClass('check_yes')
						$(this).removeClass('check_no')
					 }else{
						 $(this).addClass('check_no')
						 $(this).removeClass('check_yes')
					 }
 	  		})
	
		 $(".chk_all").toggle(
					function(){$(this).parent().find("span").attr("class","check_yes")},
					function(){$(this).parent().find("span").attr("class","check_no")}
			);
		
}

$.fn.chkAll2=function(){
			
		 var findmain = $(this).find('span')
		 
		 $(findmain).click(function(){
 				 if($(this).is(".check_no2")){
						$(this).addClass('check_yes2')
						$(this).removeClass('check_no2')
					 }else{
						 $(this).addClass('check_no2')
						 $(this).removeClass('check_yes2')
					 }
 	  		})
	
		 $(".chk_all2").toggle(
					function(){$(this).parent().find("span").attr("class","check_yes2")},
					function(){$(this).parent().find("span").attr("class","check_no2")}
			);
		
}



/*单选*/
$.fn.radioAll=function(){
 			 
		 var radioChild = $(this).find('span')
 
		 $(radioChild).click(function(){
  				 if($(this).hasClass("radio_no")){
					 
 					 $(this).parent().find("span").attr("class","radio_no")
					 $(this).attr("class","radio_yes") 
 						 
 					 }  
 	  		})
 		
}

$.fn.radioAll2=function(){
 			 
		 var radioChild = $(this).find('span')
 
		 $(radioChild).click(function(){
  				 if($(this).hasClass("span_m_no")){
					 
 					 $(this).parent().find("span").attr("class","span_m_no")
					 $(this).attr("class","span_m_cur") 
 						 
 					 }  
 	  		})
 		
}

$.fn.radioAll3=function(){
 			 
		 var radioChild = $(this).find('span')
 
		 $(radioChild).click(function(){
  				 if($(this).hasClass("span2_no")){
					 
 					 $(this).parent().find("span").attr("class","span2_no")
					 $(this).attr("class","span2_cur") 
 						 
 					 }  
 	  		})
 		
}

$.fn.radioAll4=function(){
 			 
		 var radioChild = $(this).find('p')
 
		 $(radioChild).click(function(){
  				 if($(this).hasClass("")){
					 
 					 $(this).parent().find("p").attr("class","")
					 $(this).attr("class","p_dx_cur") 
 						 
 					 }  
 	  		})
 		
}
  

  
//隐藏遮罩层
function createBg(){
	if($("#lock_click_bg").is(".lock_click_bg")){
		$("#lock_click_bg").show();
	}else{
		$("body").append("<div id='lock_click_bg' class='lock_click_bg' style='position:absolute;left: 0px; top: 0px;display:none'></div>");
		$("#lock_click_bg").show();
		var lock = $("#lock_click_bg");
		var height = $(document).height();
		var width = $(document).width();
		lock.css("height", height);
		lock.css("width", width);
		//lock.css("background","url(../img/bg_fix.png)"); 
		lock.css("z-index",100);
	}
}

//弹出小框
function showBlock(id){
	$("#"+id).css({"display":"block","z-index":101});
	createBg();
	$("#lock_click_bg").unbind();
	$("#lock_click_bg").bind("click",function(){$("#lock_click_bg").hide();$("#"+id).hide()});
}

 

//弹出层调用
function showDiv(id,e){
$.openPopupLayer({
	  name: id,
	  target: id
  }); 
  //弹出层里下拉框显示$(".open_block select").css({visibility : "visible"});
    myScroll.refresh(); 
}

function closeDiv(id){
$.closePopupLayer(id);
}
 
//顶部banner图片自伸缩
function generatePhoto(id,div){
	var obj = $("#"+id);
	var w = obj.width();
	var h = obj.height();
	var ww
	if(div)
		ww = $("#"+div).width();
	else
		ww = $(window).width();
	var wh = h*(ww/w);
	obj.css({"width":ww,"height":wh});
} 
  

//tab切换块1		
function initDivHide(c1,c2,c3,c4,c5){
	$("."+c1).not("."+c1+":first").hide();
	$("."+c2).find("span").click(function(){
		$("."+c2).find("span").attr("class",c4);
		$(this).attr("class",c5);
		$("."+c1).hide();
		$("#"+c3+$(this).attr("id").charAt(0)).show();
		myScroll.refresh(); 
 	});
}


// 多块展开收缩块公用
function autotoggle(flagid,divid,upclass,downclass,total){
	 if(total){
		for(var i=1;i<=total*1;i++){
			$("#"+flagid+""+i).addClass("flag_id_cla");
		}
	 }
	$(".flag_id_cla").click(function(){
		if($(this).is("."+upclass)){
			$(this).removeClass(upclass);
			$(this).addClass(downclass);
			var id = $(this).attr("id");
			id = id.substring(flagid.length);
			$("#"+divid+id).slideToggle();
		}else{
			var id = $("."+upclass).attr("id");
			if(id){
				id = id.substring(flagid.length);
				var obj = $("."+upclass);
				obj.removeClass(upclass);
				obj.addClass(downclass);
				$("#"+divid+id).hide();
			}
			$(this).removeClass(downclass);
			$(this).addClass(upclass);
			id = $(this).attr("id");
			id = id.substring(flagid.length);
			$("#"+divid+id).slideToggle(/*function(){myScroll.refresh();}*/);
		}
	});
 }

//超出滚动 
var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false});
}
window.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);

//超出滚动 
var myScroll1;
function loaded1() {
	myScroll1 = new iScroll('wrapper1',{ hScrollbar: false, vScrollbar: false});
}
window.addEventListener('DOMContentLoaded', function () { setTimeout(loaded1, 200); }, false);

//超出滚动 
var myScroll2;
function loaded2() {
	myScroll2 = new iScroll('wrapper2',{ hScrollbar: false, vScrollbar: false});
}
window.addEventListener('DOMContentLoaded', function () { setTimeout(loaded2, 200); }, false);
	
 