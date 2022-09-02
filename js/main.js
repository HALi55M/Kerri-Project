// Global Variables Foll All Functions
let logoOne = document.querySelector('#logoOne');
let logoTwo = document.querySelector('#logoTwo');
let devWidth = $("#colors-box").innerWidth();
let aboutScroll = $('#about').offset().top; 
$('#options').animate({left:`-${devWidth}`});
$('.nav-link').css('color','#fff');
// effact cahange background navbar
$(window).scroll(function(){                         
 let wScroll = $(window).scrollTop();                  // now i'm use as a geter
 if( wScroll > aboutScroll -70 )
 {
    $('#changBgNav').css('backgroundColor','rgb(219,214,214,1)');
    $('#changBgNav').css('padding', ' 15px 30px 15px 50px');
    $('#btnUp').fadeIn(500);                         // BtnUp 
    $('.nav-link').css('color','#000');
    logoTwo.classList.replace('d-none','d-inline-block');           // logo image
    logoOne.classList.add('d-none');                                // logo image
 }
 else{
    $('#changBgNav').css('backgroundColor','transparent');
    $('#changBgNav').css('padding','10px 0px');
    $('#btnUp').fadeOut(500);                       // BtnUp
    $('.nav-link').css('color','#fff');
    logoOne.classList.replace('d-none','d-inline-block');             // logo image
    logoTwo.classList.add('d-none');                                  // logo image
 }
});
// Scroll By BtnUp
$('#btnUp').click(function() {   
   // $(window).scrollTop(0);                                          
   $("html,body").animate({scrollTop:0} , 1000);
})                       
// smooth scroll for sections when we press navbar links
$("a[href^='#']").click(function(e) {
   let navHrefLinks = $(e.target).attr("href");
   let scrollForSection = $(navHrefLinks).offset().top;
   $("html,body").animate({scrollTop:scrollForSection} , 1000);
   $(e.target).parent().css('border-bottom','3px solid #fff');
   $(e.target).parent().siblings().css('border-bottom','none');
}) 
// loading WebSite
$(document).ready(function(){
   $("#loading .lds-spinner").fadeOut(500 , function(){         //Call Back
      $("#loading").fadeOut(500 , function(){                   // Call Back
         $("#loading").remove();
         $('body').css("overflow-y","auto");
      })
   });
})
// List Side For Change Colors
let items = $('.color-item');                  //It is better to store these effects in a variable so that the performance is good
    items.eq(0).css('background-color','pink');
    items.eq(1).css('background-color','green');
    items.eq(2).css('background-color','white');
    items.eq(3).css('background-color','red');
    items.eq(4).css('background-color','teal');

items.click(function (e) {
   let bgChange = $(e.target).css('background-color');
   $('.change').css('color' , bgChange);                     // 'Change' is a class, I use it to change the colors of the elements               
    })
$("#options .icon").click(function () {
      devWidth = $("#colors-box").innerWidth();
       if($('#options').css("left") == "0px")
       { 
         $('#options').animate({left:`-${devWidth}`} , 1000);
       }
       else
       {
         $('#options').animate({left:`0px`} , 1000);
       }
    })

