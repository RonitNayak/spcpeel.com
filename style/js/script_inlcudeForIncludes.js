$(document).ready(function() {
    
    console.log("script_includeForIncludes is ON\n");

    $(function(){
        $("#navbar").load("navbar_include.html"); 
    });
    $(function(){
        $("#footer").load("footer_include.html"); 
    });
});
/*
$(document).ready(function() {
    
    console.log("script_includeForIncludes is ON\n");

    $(function(){
        $("#navbar").load("navbar.html"); 
    });
    $(function(){
        $("#footer").load("footer.html"); 
    });
});*/

