$(document).ready(function() {
    
    console.log("script_include is ON\n");

    $(function(){
        $("#navbar").load("include/navbar.html"); 
    });
    $(function(){
        $("#footer").load("include/footer.html"); 
    });
});
