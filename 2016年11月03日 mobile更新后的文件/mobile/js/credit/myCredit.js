$(function(){
     /* $("select option").on("click",function(){
	       
		  $(this).parent("select").siblings("h4").html($(this).text());
		  
	  });*/
	  
	  $("select.change").on("change",function(){
		   $(this).siblings("h4").html($(this).find("option:selected").text());
		   $(this).siblings("h4").css("opacity","1");
	  });
	  
});