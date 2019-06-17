/*window.onload = colorChange;*/



$(document).ready(function() {

  console.log("JS is ON\n");


  $("#c1").hover(function(){
    $("#f1").toggleClass("myFooterHover");
    console.log("myFooter was hovered");       
    $("#cht1").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l1").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");        
  });
  $("#c2").hover(function(){
    $("#f2").toggleClass("myFooterHover");
    console.log("myFooter was hovered");       
    $("#cht2").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l2").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");     
  });
  $("#c3").hover(function(){
    $("#f3").toggleClass("myFooterHover");
    console.log("myFooter was hovered");      
    $("#cht3").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l3").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");     
  });
  $("#c4").hover(function(){
    $("#f4").toggleClass("myFooterHover");
    console.log("myFooter was hovered");       
    $("#cht4").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l4").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");     
  });
  $("#c5").hover(function(){
    $("#f5").toggleClass("myFooterHover");
    console.log("myFooter was hovered");     
    $("#cht5").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l5").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");     
  });
  $("#c6").hover(function(){
    $("#f6").toggleClass("myFooterHover");
    console.log("myFooter was hovered");  
    $("#cht6").toggleClass("clickHereTextHover");
    console.log("clickHereText2 was hovered");
    $("#l6").toggleClass("testimonialsLineHover");
    console.log("testimonialsLineHover was hovered");     
  });
  $("#myCardUE_1").hover(function(){
    $("#l1_UE").toggleClass("UEsmallLineHover");
    console.log("l1_UE was hovered"); 
  });
  $("#myCardUE_2").hover(function(){
    $("#l2_UE").toggleClass("UEsmallLineHover");
    console.log("l2_UE was hovered");
  });
  $("#myCardUE_3").hover(function(){
    $("#l3_UE").toggleClass("UEsmallLineHover");
    console.log("l3_UE was hovered"); 
  });

  $("#bigBox1").hover(function() {
    $('#bigBox1').addClass('transition');
  }, function() {
    $('#bigBox1').removeClass('transition');
  });
  $("#bigBox2").hover(function() {
    $('#bigBox2').addClass('transition');
  }, function() {
    $('#bigBox2').removeClass('transition');
  });
  $("#bigBox3").hover(function() {
    $('#bigBox3').addClass('transition');
  }, function() {
    $('#bigBox3').removeClass('transition');
  });
  /* $("#sTitle1").hover(function() {
        $('#sTitle1').addClass('transition2');
    }, function() {
        $('#sTitle1').removeClass('transition2');
    });*/

  $(".serviceBG").hover(function() {
    $('#TitleTranslate1').addClass('transition2');       
    $('#line1').addClass('shadow');
  }, function() {
    $('#TitleTranslate2').removeClass('transition2');       
    $('#line2').removeClass('shadow');
    $('#TitleTranslate3').removeClass('transition2');       
    $('#line3').removeClass('shadow');

  });

  $(".SPC_Testimonials").hover(function() {
    $('#TitleTranslate2').addClass('transition2');       
    $('#line2').addClass('shadow');
  }, function() {
    $('#TitleTranslate1').removeClass('transition2');       
    $('#line1').removeClass('shadow');
    $('#TitleTranslate3').removeClass('transition2');       
    $('#line3').removeClass('shadow');
  });

  $(".SPCUpcomingEvents").hover(function() {
    $('#TitleTranslate3').addClass('transition2');       
    $('#line3').addClass('shadow');
  }, function() {
    $('#TitleTranslate2').removeClass('transition2');       
    $('#line2').removeClass('shadow');
    $('#TitleTranslate1').removeClass('transition2');       
    $('#line1').removeClass('shadow');
  });
  
    var pathname = window.location.pathname;
	$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');



});