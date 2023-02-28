let nav = document.querySelector('.navbar');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('change')
    } else {
        nav.classList.remove('change');
    }
}

AOS.init({
    offset: 150,
    duration: 1000,
});


//$(document).ready(function(){
//    $("#show_hide_bt").click(function(event) {
//    $(this).find('i').toggleClass('fa fa-times');
//});
//})
//
//$(document).ready(function(){
//    $("#show_hide_bt1").click(function(event) {
//    $(this).find('i').toggleClass('fa fa-times');
//});
//})
//
//$(document).ready(function(){
//    $("#show_hide_bt2").click(function(event) {
//    $(this).find('i').toggleClass('fa fa-times');
//});
//})
//
//$(document).ready(function(){
//    $("#show_hide_bt3").click(function(event) {
//    $(this).find('i').toggleClass('fa fa-times');
//});
//})

function myFunction(x) {
  x.classList.toggle("fa-minus");
}

