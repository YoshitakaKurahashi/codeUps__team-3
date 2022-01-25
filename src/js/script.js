
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // buger-menu
  $(function () {
    $('.p-burger__btn').on('click',function(){
      $('.p-burger__btn').toggleClass('close');
      $('.p-header__burger-menu').toggleClass('fade');
      $('body').toggleClass('noscroll'); // 追記
    });
  });

  // header固定
  var _window = $(window),
    _header = $('.p-top-header'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.mainvisual').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');


//メインビジュアル画像ズーム

var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: 'fade',
  effect: "fade", //フェードの指定
autoplay: {
  delay: 4000, //４秒後に次のスライドへ
  disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
},
speed: 2000, //２秒かけてフェードで切り替わる
allowTouchMove: false,//マウスでのスワイプを禁止
  
});

});
