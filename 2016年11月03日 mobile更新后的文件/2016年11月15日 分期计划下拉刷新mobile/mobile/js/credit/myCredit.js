$(function(){
//	$("select.change").each(function(index,element){
//		$(this).siblings("h4").html($(this).find("option:first-child").text());
//	});
	
    $("select.change").on("change",function(){
	   
	   if($(this).find("option:selected").index()!=0){
		   $(this).siblings("h4").html($(this).find("option:selected").text());
		   $(this).siblings("h4").css("opacity","1");
	   }
	   
	   
    });
	  
});