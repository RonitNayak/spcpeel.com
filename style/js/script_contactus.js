$(document).ready(function() {

    console.log("script_contactus is ON\n");

    function myMap() {
        var myCenter = new google.maps.LatLng(51.508742,-0.120850);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 5};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: "Hello World!"
        });
        infowindow.open(map,marker);
    }
    
    
    $("#SM_icon1").hover(function() {
        $('#SM_icon1').addClass('transition');
         console.log("SM_icon1 was hovered\n");
    }, function() {
        $('#SM_icon1').removeClass('transition');
    });
    $("#SM_icon2").hover(function() {
        $('#SM_icon2').addClass('transition');
    }, function() {
        $('#SM_icon2').removeClass('transition');
    });
    $("#SM_icon3").hover(function() {
        $('#SM_icon3').addClass('transition');
    }, function() {
        $('#SM_icon3').removeClass('transition');
    });
    $("#SM_icon4").hover(function() {
        $('#SM_icon4').addClass('transition');
    }, function() {
        $('#SM_icon4').removeClass('transition');
    });
    $("#SM_icon5").hover(function() {
        $('#SM_icon5').addClass('transition');
    }, function() {
        $('#SM_icon5').removeClass('transition');
    });
    $("#SM_icon6").hover(function() {
        $('#SM_icon6').addClass('transition');
    }, function() {
        $('#SM_icon6').removeClass('transition');
    });

});