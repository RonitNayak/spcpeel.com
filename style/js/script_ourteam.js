$(document).ready(function() {
  console.log('script_OurTeam loaded!');




  $(".SPC_Box").hover(function(){ 
    $(this).addClass('transition');
    $(this).children('a').children('h5').toggleClass('employeeInfoHover');
    $(this).children('a').children('p').toggleClass('employeeInfoHover')
  }, function() {
    $(this).removeClass('transition');
    $(this).children('a').children('h5').toggleClass('employeeInfoHover');
    $(this).children('a').children('p').toggleClass('employeeInfoHover');
  });

  /*
  $(".SPC_Box").hover(function(){  
    console.log("SPC_Box class was hovered"); 
    $(this).ready(function(){
      $("h5:nth-of-type(1)").toggleClass('employeeNameHover2');
    });*/
  // $(this).toggleClass('employeeNameHover2');
  //$(this).addClass('transition');
  /* }, function() {
          console.log("SPC_Box - removeClass"); 
        $(this).removeClass('transition');
          $(this).toggleClass("employeeNameHover2");
        console.log("n1 was hovered"); 
        $(this).toggleClass("employeeNameHover2");
  });*/



  /*
    $("#eBox2").hover(function(){  
        console.log("e1 was hovered");      
        $("#n2").toggleClass("employeeNameHover2");
        console.log("n1 was hovered"); 
        $("#t2").toggleClass("employeeNameHover2");
        console.log("t1 was hovered"); 
    });*/


/*
  $("#eBox2").hover(function() {
    $('#eBox2').addClass('transition');
  }, function() {
    $('#eBox2').removeClass('transition');
  });
  $("#eBox3").hover(function() {
    $('#eBox3').addClass('transition');
  }, function() {
    $('#eBox3').removeClass('transition');
  });
*/



  /* $("#e1").hover(function(){  
        console.log("e1 was hovered");      
        $("#n1").toggleClass("employeeNameHover");
        console.log("n1 was hovered"); 
        $("#t1").toggleClass("employeeNameHover");
        //console.log("t1 was hovered"); 
    });  */   

  $("#SM1").click(function(){
    console.log("SM1 was clicked\n");  
    $("#SM1").addClass("d-none");
    $("#SL2").removeClass("d-none");
    $("#SM2").removeClass("d-none");
  });

  $("#SM2").click(function(){
    console.log("SM2 was clicked\n");  
    $("#SM2").addClass("d-none");
    $("#SL3").removeClass("d-none");       
    $("#SL2").addClass("d-none");
    $("#SM3").removeClass("d-none");

  });
  $("#SL2").click(function(){
    console.log("SL2 was clicked\n"); 
    $("#SL2").addClass("d-none");
    $("#SM1").removeClass("d-none");
    $("#SM2").addClass("d-none");
  });


  $("#SM3").click(function(){
    console.log("SM3 was clicked\n");  
    $("#SM3").addClass("d-none");
    $("#SL4").removeClass("d-none");       
    $("#SL3").addClass("d-none");
    $("#SM4").removeClass("d-none");

    $("#SL6").removeClass("d-none");  
    $("#SM6").removeClass("d-none");
  });
  $("#SL3").click(function(){
    console.log("SL3 was clicked\n");  
    $("#SL3").addClass("d-none");
    $("#SM2").removeClass("d-none");
    $("#SL2").removeClass("d-none");
    $("#SM3").addClass("d-none");
  });

  $("#SM4").click(function(){
    console.log("mybtun was clicked\n");  
    $("#SM4").addClass("d-none");
    $("#SL5").removeClass("d-none");       
    $("#SL4").addClass("d-none");
    $("#SM5").removeClass("d-none");
  });
  $("#SL4").click(function(){
    console.log("SL4 was clicked\n");  
    $("#SL4").addClass("d-none");
    $("#SM3").removeClass("d-none");
    $("#SL3").removeClass("d-none");
    $("#SM4").addClass("d-none");
  });
  $("#SM5").click(function(){
    console.log("SM5 was clicked\n");  
    $("#SM5").addClass("d-none");
    $("#SL6").removeClass("d-none");       
    $("#SL5").addClass("d-none");
    $("#SM6").removeClass("d-none");
  });
  $("#SL5").click(function(){
    console.log("SL5 was clicked\n");  
    $("#SL5").addClass("d-none");
    $("#SM4").removeClass("d-none");
    $("#SL4").removeClass("d-none");
    $("#SM5").addClass("d-none");
  });
  $("#SL6").click(function(){
    console.log("SL6 was clicked\n");  
    $("#SL6").addClass("d-none");
    $("#SM3").removeClass("d-none");
    $("#SL3").removeClass("d-none");      

  });
});