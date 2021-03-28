(function() {
    $('#header .gnb').on('mouseenter', function() {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });

    // ******* 검색팝업창 *****
    $('#header .btn_search1').on('click',function(){
        $(this).toggleClass('on');

        if($(this).hasClass('on')) {
            $('#header .search_wrap').stop().slideDown();
            $('#header .gnb').off('mouseenter');
            $('#dimm').stop().fadeIn();
        } else {
            $('#header .search_wrap').stop().slideUp();
            $('#header .gnb').on('mouseenter',function() {
                $('#header').addClass('on');
            }).on('mouseleave', function() {
                $('#header').removeClass('on');
            });
            $('#dimm').hide();
        }
    });

    // ******* 메인 슬라이더 *********
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        speed: 1000,
        
        simulateTouch: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type : 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
              },
        },
    });
    $('.main_slider .swiper-pagination span:first').removeClass('swiper-pagination-bullet-active');
    setTimeout(function() {
        $('.main_slider .swiper-pagination span:first').addClass('swiper-pagination-bullet-active');
    },0);
    
    // *** 메인 하이라이트 섹션 슬라이더

    var hightSlider = new Swiper('.high_slider', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
    });

    // *** top 버튼 애니메이션 ***
    $(window).scroll(function () {
        var btnTop = $(window).scrollTop();

        if (btnTop > 0) {
            $('.btn_top').fadeIn(300);
        } else {
            $('.btn_top').fadeOut(200);
        }
    });

    $('.btn_top a').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            'scrollTop': 0
        });
    });

    // ***** news 섹션 스크롤 ******
    if($('#container .main_news').length) {
        var posY = $('#container .main_news').offset().top - 700;
        $(window).scroll(function() {
           var _scrollTop = $(this).scrollTop();
            
            if(_scrollTop >= posY) {
                $('#container .news_wrap').addClass('on');
            }
        }).trigger('scroll');
    };


    // lnb
    $('.sub_container .lnb li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        
        // lnb index값
        var idx = $(this).index();
        
        $('.sub_container .lnb').eq(idx).addClass('active').siblings().removeClass('active');
    }); 
        
    // 회사 소개 페이지
    // 인사말 섹션 애니메이션
    if($('.sub_container .intro_visual_wrap').length) {
        var introPos = $('.sub_container .intro_visual_wrap').offset().top - 2000;
        $(window).scroll(function() {
            var _scrollTop = $(this).scrollTop();
            if(_scrollTop >= introPos) {
                $('.sub_container .intro_txt_wrap').addClass('on');
                $('.sub_container .intro_visual').addClass('on');
            }
        }).trigger('scroll');
    };

    // mi 섹션 애니메이션
    if($('.sub_container .mi_wrap').length) {
        var miPos = $('.sub_container .mi_wrap').offset().top - 800;
        $(window).scroll(function() {
            miTop = $(this).scrollTop();
            if(miTop >= miPos) {
                $('.sub_container .mi_inner').addClass('on');
            }
        });
    };

    // 건축소개 섹션 애니메이션
    if($('.sub_container .build_wrap').length) {
        var buildPos1 = $('.sub_container .build_wrap').offset().top - 500;
        var buildPos2 = $('.sub_container .build_wrap').offset().top;
        var buildPos3 = $('.sub_container .build_wrap').offset().top + 700;

        $(window).scroll(function() {
            buildTop = $(this).scrollTop();

            if(buildTop > buildPos1) {
                $('.sub_container .build_visual1').addClass('on');
                $('.sub_container .first_txt_wrap').addClass('on');
            }
            if(buildTop > buildPos2 ) {
                $('.sub_container .build_visual2').addClass('on');
                $('.sub_container .second_txt_wrap').addClass('on');
            }
            if(buildTop > buildPos3) {
                $('.sub_container .build_visual3').addClass('on');
                $('.sub_container .third_txt_wrap').addClass('on');
            }
        });
    };

    // 공지사항페이지 테이블 하단 페이지네이션
    $(function(){
        var url = location.href;

        var pageArr0 = url.indexOf('');
        var pageArr1 = url.indexOf();
        if(pageArr0 != -1){
            $('.pagination .num:eq(0)').addClass('active')

        };
        if(pageArr1 != -1){
            $('.pagination .num:eq(1)').addClass('active')
        };
    });

    // footer 패밀리사이트
    $('#footer .btn_family').on('click', function() {
        $('#footer .list_family').slideToggle(500);
        $(this).toggleClass('on');
    });
})();
