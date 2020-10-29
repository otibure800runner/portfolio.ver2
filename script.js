$(function(){
  //トップの画像切り替え
  setInterval(changeImg, 500);//0.5秒間隔
  function changeImg(){
    var imgNum = Math.floor(Math.random() * 17) + 1;
    $(".top").find("img").attr("src","image/" + imgNum + ".jpg");
  }

  //トップの文字切り替え
  // Aの文字コードを代入
  const c = 'A'.charCodeAt(0);
  // 新規配列を作りどこにも影響させず26の入れ物を用意しvという関数(下記)にインデックスiを用いて新規配列生成
  const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    // ()内の文字コードの文字を返す
    return String.fromCharCode(c + i);
  });
  const topText = ["P","O","R","T","F","O","L","I","O"];
  // top-textクラスに上記配列を間の文字なしでくっつけて表示
  const showText = () =>{
    $(".top-text").text(topText.join(""));
  }
  showText()
  setInterval(setTime, 5000);
  function setTime() {
    if ($(".top").find(".top-text").hasClass("not-changed")) {
      //１文字目
      // ランダムのアルファベットを０.１秒ごとに表示
      const set1 = setInterval(() => {
        // randAlphに上記アルファベットの配列をランダムで代入
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        // PORTFOLIOの１文字目に上記文字を代入
        topText[0] = randAlph;
        showText()
      }, 100);
      // 2秒後にランダム表示を止めてMを表示
      setTimeout(function() {
        clearInterval(set1);
        topText[0] = "M";
        showText()
      },2000)
      //２文字目
      const set2 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[1] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set2);
        topText[1] = "I";
        showText()
      },2200)
      //3文字目
      const set3 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[2] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set3);
        topText[2] = "U";
        showText()
      },2400)
      //4文字目
      const set4 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[3] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set4);
        topText[3] = "R";
        showText()
      },2600)
      //5文字目
      const set5 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[4] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set5);
        topText[4] = "A";
        showText()
      },2800)
      //6文字目
      const set6 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[5] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set6);
        topText[5] = "Y";
        showText()
      },3000)
      //7文字目
      const set7 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[6] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set7);
        topText[6] = "U";
        showText()
      },3200)
      //8文字目
      const set8 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[7] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set8);
        topText[7] = "Y";
        showText()
      },3400)
      //9文字目
      const set9 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[8] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set9);
        topText[8] = "A";
        showText()
      },3600)
      setTimeout(function(){
        $(".top").find(".top-text").removeClass("not-changed").addClass("changed");
      },3601);
    }else if ($(".top").find(".top-text").hasClass("changed")){
      //１文字目
      const set1 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[0] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set1);
        topText[0] = "P";
        showText()
      },2000)
      //２文字目
      const set2 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[1] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set2);
        topText[1] = "O";
        showText()
      },2200)
      //3文字目
      const set3 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[2] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set3);
        topText[2] = "R";
        showText()
      },2400)
      //4文字目
      const set4 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[3] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set4);
        topText[3] = "T";
        showText()
      },2600)
      //5文字目
      const set5 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[4] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set5);
        topText[4] = "F";
        showText()
      },2800)
      //6文字目
      const set6 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[5] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set6);
        topText[5] = "O";
        showText()
      },3000)
      //7文字目
      const set7 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[6] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set7);
        topText[6] = "L";
        showText()
      },3200)
      //8文字目
      const set8 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[7] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set8);
        topText[7] = "I";
        showText()
      },3400)
      //9文字目
      const set9 = setInterval(() => {
        const randAlph = alphabets[Math.floor(Math.random() * 26)];
        topText[8] = randAlph;
        showText()
      }, 100);
      setTimeout(function() {
        clearInterval(set9);
        topText[8] = "O";
        showText()
      },3600)
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
     $(".top-sub img").hide();
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

  //アイコン拡大表示
  $(".mini-image img").click(function(){
    $(".hide-image").fadeIn(1000);
    $(".fullcolor").addClass("active");
  });
  $(".fullcolor,.hide-image").click(function(){
    $(".hide-image").fadeOut(200);
    $(".fullcolor").toggleClass("active");
  });

  //キャラ拡大表示
  $(".mini-img").click(function(){
    //ページ遷移一旦中止
    event.preventDefault();
    //クリックした画像の取得
    var src = $(this).attr("src").slice(0,-5);
    var srcClass = src.slice(-2);
    //トップのimgのsrcを変更
    $(this).attr("src",src + "2.png");
    // 下記functionで呼び出せるように拡大したい画像を指定
    var srcClass = $(this).next(".hide-img")
    //0.3秒後に発動する関数
    function action() {
      //隠していた画像と背景の表示
      srcClass.fadeIn(1000);
      $(".fullcolor").addClass("active");
    }
    //0.3秒後にaction関数を起動
    setTimeout(action,300);
  });
  $(".hide-img").click(function(){
    if ($(".hide-img").show()) {
      //クリックしたhide-imgに対応したサムネを元に戻す
      var src = $(this).prev("img").attr("src").slice(0,-5);
      $(this).prev("img").attr("src",src + "1.png");
      $(this).hide();
      //クリックしたhide-imgを含め全てのhide-imgを隠す
      //(なぜかクリックしてない方が表示されるので)
      $(this).siblings(".hide-img").hide();
      $(".fullcolor").removeClass("active");
    }
  });
  // なぜかfullcolorを押すとactiveクラスが消えるので再付与
  $(".fullcolor").click(function(){
    $(this).addClass("active");
  });

});
