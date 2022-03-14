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

  // 탑바 스크롤 배경색 변경 시작
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".top-bar-wrap").css("background" , "black");
      }
      else{
        $(".top-bar-wrap").css("background" , "none");   
      }
    })
  })
// 탑바 스크롤 배경색 변경 끝

// 추천메뉴 클릭시 변경 시작
const tabList = document.querySelectorAll('.sec01-menu-wrap .list li');
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
};
// 추천메뉴 클릭시 변경 끝