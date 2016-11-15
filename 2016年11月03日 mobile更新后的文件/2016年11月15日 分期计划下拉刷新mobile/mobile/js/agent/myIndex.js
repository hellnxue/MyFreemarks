$(function(){

  $("#mySpanCur").click(function(){
    $(".index_05_con_ul li:first").stop().show();
    $(".index_05_con_ul li:last").stop().hide();
  });

   $("#mySpanNo").click(function(){
    $(".index_05_con_ul li:last").stop().show();
    $(".index_05_con_ul li:first").stop().hide();
  });



})

