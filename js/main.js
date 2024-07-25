$(function () {

  // GNB
  // $("#header .depth2").hide();
  // $("#header .gnb > li").mouseenter(function(){
  //  $(this).find(".depth2").stop().show();
  // });
  // $("#header .gnb > li").addClass("actice");
  // $("#header .gnb > li").mouseleave(function(){
  //  $(this).find(".depth2").stop().hide();
  // });

  //happc
  $('#haccp ul li:nth-child(1)').addClass("active");
  $('#haccp ul li').mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //tap-menu btn
  $("#menu .con").not(":first").hide()
  $("#menu .tab-btn li").click(function () {
    $(this).stop().addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".tab-wrap .con").eq(num).show(0).siblings().hide(0);
  });

  // 전체메뉴
  $(".mgnb_wrap").hide();
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });


  $(window).on("resize", mobileMenu);
  function mobileMenu() {
    const mgnbWidth = $(".mgnb_wrap").width();
    if (mgnbWidth < 768) {
      $(".mdepth2_wrap").removeClass("open").addClass("close");
    } else {
      $(".mdepth2_wrap").removeClass("close").addClass("open");
    }
  }

  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2_wrap.close").slideToggle();
  });


  //tap-menu swiper
  var swiper = new Swiper(".tap-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    autoplay: {
      delay: 5000,
      disableOnInteractio: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observeParents: true,
    observer: true,
  });

  //모바일배너
  var swiper = new Swiper(".m-banner", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteractio: false,
    },
  });




























}); //문서 종료




