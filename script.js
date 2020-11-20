$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navigation_bar').addClass('sticky');
    } else {
      $('.navigation_bar').removeClass('sticky');
    }
  });
  // toggle menu bar script
  $('.menu-btn').click(function(){
      $('.navigation_bar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
});

console.log('script.js says "I\'m here"');
console.log(this.scrollY);

