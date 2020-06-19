$(function(){
  //トップの画像切り替え
  setInterval(changeImg, 500);//0.5秒間隔
    i = 1;
    function changeImg(){
        $(".top").find("img").attr("src","image/" + i + ".jpg");
        if(i < 17){//17枚の画像を順に切り替え
            i++;
        }
        else{
            i = 1;
        }
    }

  //トップの文字切り替え
  setInterval(setTime, 5000);
    function setTime(){
    if ($(".top").find(".top-text").hasClass("not-changed")) {
      setTimeout(function(){
        $(".top").find(".top-text").text("MORTFOLIO");
      },2000);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIRTFOLIO");
      },2200);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIUTFOLIO");
      },2400);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURFOLIO");
      },2600);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURAOLIO");
      },2800);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURAYLIO");
      },3000);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURAYUIO");
      },3200);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURAYUYO");
      },3400);
      setTimeout(function(){
        $(".top").find(".top-text").text("MIURAYUYA");
      },3600);
      setTimeout(function(){
        $(".top").find(".top-text").removeClass("not-changed").addClass("changed");
      },3601);
    }else if ($(".top").find(".top-text").hasClass("changed")){
      setTimeout(function(){
        $(".top").find(".top-text").text("PIURAYUYA");
      },2000);
      setTimeout(function(){
        $(".top").find(".top-text").text("POURAYUYA");
      },2200);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORRAYUYA");
      },2400);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTAYUYA");
      },2600);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTFYUYA");
      },2800);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTFOUYA");
      },3000);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTFOLYA");
      },3200);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTFOLIA");
      },3400);
      setTimeout(function(){
        $(".top").find(".top-text").text("PORTFOLIO");
      },3600);
      setTimeout(function(){
        $(".top").find(".top-text").removeClass("changed").addClass("not-changed");
      },3601);
    }
  }

  //サムネホバーでトップの画像切り替え
  $(".main img").hover(
    function(){
      var src = $(this).attr("src").slice(6)
      $(".top-sub img").css("display","block").attr("src","image/大" + src);
    },
    function(){
      $(".top-sub img").css("display","none");
    }
  );

  //クリックでトップ画像拡大＆ページ遷移
  $(".main a").click(function(){
    //ページ遷移一旦中止
    event.preventDefault();
    //クリックしたURLの取得
    var linkUrl = $(this).attr("href");
    //クリックしたものの子要素のimgのsrcの後ろを取得
    var src = $(this).find("img").attr("src").slice(6)
    //トップのimgのURL（src）を変更、クラスの追加（画像の全体表示）
    $(".top-sub img").attr("src","image/大" + src).toggleClass("big-thumb");
    //１秒後に発動する関数
    function action() {
      //さっき取得したURLへ遷移
     location.href = linkUrl;
     //拡大した画像を元に戻す
     $(".top-sub img").removeClass("big-thumb");
   }
   //１秒後にaction関数を起動
   setTimeout(action,1000);
  });

  //スクロールすると現れるPAGE TOPボタン
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  //ハンバーガーメニュー
  //id#btnをクリックしたとき
  $("#btn").on("click",function(){
    //id#navのリストがスライドする
    $("#nav").slideToggle();
    //class.menu-triggerのCSSに書いた情報が適用される
    $(".menu-trigger").toggleClass("active");
    //ページ更新しない
    return false;
  });
  //ハンバーガーメニューここまで
  //スクロールすると現れるハンバーガーメニュー
  var menuBtn = $('#btn');
  menuBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          menuBtn.fadeIn();
      } else if ($(this).scrollTop() < 100 && $(".menu-trigger").hasClass("active")) {
        $(".menu-trigger").removeClass("active");
      }else {
          menuBtn.fadeOut();
          $("#nav").fadeOut();
      }
  });
});
