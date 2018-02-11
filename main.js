$(document).ready(function(){
  $("div.page").hide();
  $("nav li:first").addClass("current").show();
  $("div.page#page1").show();
  
  $("nav li").click(function(){
    $("nav li").remove("current");
    $("div.page").hide();
    
    var activePage = $(this).find("a").attr("href");
    $(activePage).fadeIn();
  });
});
