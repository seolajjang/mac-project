$(document).ready(function(){
    $(".main-slide-wrap").slick({
      slide: "div",
      infinite: true ,
      centerMode: false ,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed : 1000 ,
      dots: false,
      arrows: true ,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000 ,
      pauseOnHover: true,
      prevArrow : "<i class='prev-arrow fas fa-chevron-left'></i>",
      nextArrow : "<i class='next-arrow fas fa-chevron-right'></i>" ,
    });
    
  });