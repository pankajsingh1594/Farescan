// LOADING THE DOCUMENT
$(document).ready(function(){

    // ADDING CALENDER
    $(document).ready(function(){
        $(".booking_date").datepicker();
      });

    // BACK TO TOP BUTTON
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
          $(".fa-arrow-up").fadeIn();
        } else{
          $(".fa-arrow-up").fadeOut();
        }
    });
    
    $(".fa-arrow-up").on("click",function(){
        $("html , body").animate({scrollTop: 0},1000);
    });

    AOS.init({});
})