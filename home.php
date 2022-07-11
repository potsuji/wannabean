<?php get_header(); ?>
<!-- for Meta -->
<meta name="description" content='POTSUJI 研究サイト'>
<meta name="keywords" content="POTSUJI,研究サイト,コーディング,プログラミング,イラスト,ラップ">
<!-- for Page -->
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/common.css">
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/home.css">
</head>

<body>
<?php get_template_part('parts_header'); ?>


<!--メイン画像-->
<div class="main_visual">
<h1><img class="change" src="<?php bloginfo('template_directory'); ?>/assets/images/top/mv_pc.png" alt="POTSUJI"></h1>
</div>



<ul class="study_menu">
  <li><a href="#jquery_1">初級編</a></li>
  <li><a href="#jquery_2">中級編</a></li>
  <li><a href="#jquery_3">中級編の道場</a></li>
  <li><a href="#jquery_4">上級編</a></li>
</ul>


<div class="study">

  <div id ="jquery_1">

    <h2>jQuery学習レッスン初級編</h2>

    <section>
    <h3>アニメーション付きで要素を表示</h3>
    <div class="po_red">まずはPと始まる合図から</div>
    <div class="po_up">俺はクリエーター</div>
    <div class="po_it">
    <img src="<?php bloginfo('template_directory'); ?>/assets/images/it.jpg" alt="">
    </div>
    </section>

    <section>
    <h3>clickイベント</h3>
    <div class="po_gold">GOLD LOOPを消す</div>
    <div class="po_old">OLD SCHOOL</div>
    </section>

    <section>
    <h3>cssメソッドで色を変えよう</h3>
    <div class="po_color">OLD SCHOOL</div>
    </section>

    <section>
    <h3>cssメソッドで要素を隠す、表示する</h3>
    <div id="delete_po">POTSUJIをけす</div>
    </section>

    <section>
    <h3>HTMLを変更する(1)- textメソッド</h3>
    <div class="po_normal">OTSUJからI繋がる</div>
    </section>

    <section>
    <h3>HTMLを変更する(2)-htmlメソッド</h3>
    <div class="po_image">
    <img src="<?php bloginfo('template_directory'); ?>/assets/images/og_image.jpg" alt="">
    </div>
    </section>

    <section>
    <h3>thisの使い方</h3>
    <ul class="po_ul">
      <li>リスト１</li>
      <li>リスト２</li>
      <li>リスト３</li>
    </ul>
    </section>

    <section>
    <h3>変数を使おう</h3>
    <div id="po_hen">お腹のサイズ</div>
    </section>

    <section>
    <h3>メソッドチェーンを使おう</h3>
    <div id="po_next">ライムが鳴る</div>
    </section>

    <section>
    <h3>子要素を取得しよう(1)-findメソッド</h3>
    <div id="po_parent">
      <a>あのジーパン</a>  
      <a>ラージサイズ</a>  
    </div>
    </section>

    <section>
    <h3>子要素を取得しよう(2)-childrenメソッド</h3>
    <div id="po_children">
      <a>二十歳の時に</a>
      <p><a>出てきた東京</a></p>
    </div>
    </section>

    <section>
    <h3>hoverイベント</h3>
    <div id="po_hover">
      <p>もっともっと作りてえな</p>
    </div>
    </section>

  </div>

  <div id ="jquery_2">

    <h2>jQuery学習レッスン中級編</h2>
    
    <section>
    <h3>モーダルをつくろう　モーダルを隠そう</h3>
    <div id="po_modal_show">モーダルを出す</div>
    <div id="po_modal">モーダルだよ</div>
    <div id="po_modal_hide">モーダルを隠す</div>
    </section>
    
    <section>
    <h3>hover機能をつくろう</h3>
    <div id="po_icon">
      <div class="lesson_hover">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon1.jpg" alt="">
        <p>これはナイトメア</p>
      </div>
      <div class="lesson_hover">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon2.jpg" alt="">
        <p>これはラッパー</p>
      </div>
      <div class="lesson_hover">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon3.jpg" alt="">
        <p>これはビッグフット</p>
      </div>
    </div>
    </section>


    <section>
    <h3>addClassメソッド removeClassメソッド</h3>
    <div id="po_icon">
      <div class="lesson_add">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon4.jpg" alt="">
        <p>ドラキュラです！</p>
        <span class="dont">血を吸います。</span>
      </div>
      <div class="lesson_add">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon5.jpg" alt="">
        <p>フェニックスです！</p>
        <span class="dont">不死鳥です。</span>
      </div>
      <div class="lesson_add">
        <img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/icon6.jpg" alt="">
        <p>マンドレイクです！</p>
        <span class="dont">鳴き声を聴くと危ないです。</span>
      </div>
    </div>
    </section>

    <section>
    <h3>アコーディオンのスライド操作</h3>
    <ul class="acordion">
      <li>
        <h4>ドラキュラの弱点は？</h4>
        <div class="answer">太陽です。</div>
      </li>
      <li>
        <h4>フェニックスは何の鳥ですか？</h4>
        <div class="answer">火の鳥です。</div>
      </li>
      <li>
        <h4>マンドレイクはどこにいますか？</h4>
        <div class="answer">土の中にいます</div>
      </li>
    </ul>

    </section>




  </div>

  <div id ="jquery_3">

    <h2>jQuery学習レッスン中級編の道場</h2>
    
    <section>
    <h3>モーダル</h3>
    </section>

    <section>
    <h3>ホバーでテキスト</h3>
    </section>

    <section>
    <h3>アコーディオン</h3>
    </section>


  </div>

  <div id ="jquery_4">

    <h2>jQuery学習レッスン上級編</h2>

    <section>
    <h3>eqメソッド</h3>
    <ul class="buddah">
      <li>デブラージ</li>
      <li>ニップス</li>
      <li>ＣＱ</li>
    </ul>
    </section>

    <section>
    <h3>スライドの仕組み</h3>
    <div class="change-btn-wrapper">
          <div class="change-btn prev-btn">← 前へ</div>
          <div class="change-btn next-btn">次へ →</div>
        </div>
        <ul class="slides">
          <li class="slide active">1枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide1.jpg" alt=""></li>
          <li class="slide">2枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide2.jpg" alt=""></li>
          <li class="slide">3枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide3.jpg" alt=""></li>
          <li class="slide">4枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide4.jpg" alt=""></li>
        </ul>
        <div class="index-btn-wrapper">
          <div class="index-btn">1</div>
          <div class="index-btn">2</div>
          <div class="index-btn">3</div>
          <div class="index-btn">4</div>  
        </div>
    </section>  

    <section>
    <h3>共通部分の関数化</h3>
    <div class="change-btn-wrapper2">
          <div class="change-btn2 prev-btn2">← 前へ</div>
          <div class="change-btn2 next-btn2">次へ →</div>
        </div>
        <ul class="slides">
          <li class="slide2 active2">1枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide5.jpg" alt=""></li>
          <li class="slide2">2枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide6.jpg" alt=""></li>
          <li class="slide2">3枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide7.jpg" alt=""></li>
          <li class="slide2">4枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide8.jpg" alt=""></li>
        </ul>
        <div class="index-btn-wrapper2">
          <div class="index-btn2">1</div>
          <div class="index-btn2">2</div>
          <div class="index-btn2">3</div>
          <div class="index-btn2">4</div>  
        </div>
    </section>  

    <section>
    <h3>6. 関数を使おう</h3>
    <div class="change-btn-wrapper3">
          <div class="change-btn3 prev-btn3">← 前へ</div>
          <div class="change-btn3 next-btn3">次へ →</div>
        </div>
        <ul class="slides">
          <li class="slide3 active3">1枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide5.jpg" alt=""></li>
          <li class="slide3">2枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide6.jpg" alt=""></li>
          <li class="slide3">3枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide7.jpg" alt=""></li>
          <li class="slide3">4枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide8.jpg" alt=""></li>
        </ul>
        <div class="index-btn-wrapper2">
          <div class="index-btn3">1</div>
          <div class="index-btn3">2</div>
          <div class="index-btn3">3</div>
          <div class="index-btn3">4</div>  
        </div>
    </section>
    
    <section>
    <h3>7. length</h3>
    <div class="change-btn-wrapper4">
          <div class="change-btn4 prev-btn4">← 前へ</div>
          <div class="change-btn4 next-btn4">次へ →</div>
        </div>
        <ul class="slides">
          <li class="slide4 active4">1枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide5.jpg" alt=""></li>
          <li class="slide4">2枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide6.jpg" alt=""></li>
          <li class="slide4">3枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide7.jpg" alt=""></li>
          <li class="slide4">4枚目<img src="<?php bloginfo('template_directory'); ?>/assets/images/top/study/slide8.jpg" alt=""></li>
        </ul>
        <div class="index-btn-wrapper4">
          <div class="index-btn4">1</div>
          <div class="index-btn4">2</div>
          <div class="index-btn4">3</div>
          <div class="index-btn4">4</div>
        </div>
      </div>
    </section>
    
    <section>
    <h3>8. 要素の値を取得しよう（１）</h3>

    <div class="container">
      <div class="section-title">
        <h3 id="title">にんじゃわんこについて</h3>
      </div>
      <div class="section-content">
        <p id="content">
          Progateで飼われている柴犬。
          忍者の格好をするのが趣味(可愛いさが際立つと思っている)。
          妖精によって深夜4時半頃に召喚され、それ以来Progateのサイトに居座るように。
          Progateでは、ユーザーの癒やしから、学習のサポートまでを担当。
          また、フィードバック番長も努め、ユーザーにフィードバックを返信しないと毎日22時に怒鳴ってくる。
        </p>
        <a href="https://prog-8.com" id="link">→ にんじゃわんこについてもっと詳しく</a>
      </div>
      <div class="output-wrapper">
        <h4>内容</h4>
        <div class="output-inner">
          <p class="output-item">タイトル：<span id="title-text"></span></p>
        </div>
      </div>
    </div>
    </section>

    <section>
    <h3>9. 要素の値を取得しよう（２）</h3>

    <div class="container">
      <div class="section-title">
        <h3 id="title">にんじゃわんこについて</h3>
      </div>
      <div class="section-content">
        <p id="content">
          Progateで飼われている柴犬。
          忍者の格好をするのが趣味(可愛いさが際立つと思っている)。
          妖精によって深夜4時半頃に召喚され、それ以来Progateのサイトに居座るように。
          Progateでは、ユーザーの癒やしから、学習のサポートまでを担当。
          また、フィードバック番長も努め、ユーザーにフィードバックを返信しないと毎日22時に怒鳴ってくる。
        </p>
        <a href="https://prog-8.com" id="link">→ にんじゃわんこについてもっと詳しく</a>
      </div>
      <div class="output-wrapper">
        <h4>内容</h4>
        <div class="output-inner">
          <p class="output-item">タイトル：<span id="title-text"></span></p>
          <p class="output-item">文章のid：<span id="content-id"></span></p>
          <p class="output-item">リンクのURL：<span id="link-href"></span></p>
        </div>
      </div>
    </div>
    </section>


    <section>
    <h3>13. 入力欄への自動入力</h3>
    <div class="container">
      <h3>キャラクター総選挙</h3>
      <p class="call-to-action">好きなキャラクターをクリック！</p>
      <div class="option-wrapper">
        <div class="option-group">
          <img class="option-image" src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/progate_baby_wanko.png">
          <div class="option-btn" data-option="1">1. ベイビーわんこ</div>
        </div>
        <div class="option-group">
          <img class="option-image" src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/progate_wanko.png">
          <div class="option-btn" data-option="2">2. にんじゃわんこ</div>
        </div>
        <div class="option-group">
          <img class="option-image" src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/progate_hitsuji.png">
          <div class="option-btn" data-option="3">3. ひつじ仙人</div>
        </div>
      </div>
      <form id="form" class="form">
        <div class="form-group">
          <div>キャラクター：</div>
          <select id="select-form" class="select-form">
            <option value="0">選択してください</option>
            <option value="1">1. ベイビーわんこ</option>
            <option value="2">2. にんじゃわんこ</option>
            <option value="3">3. ひつじ仙人</option>
          </select>  
        </div>
        <div class="form-group">
          <p id="error-message" class="error-message"></p>
          <div>理由：</div>
          <textarea id="text-form" class="text-form"></textarea>  
        </div>
        <button type="submit" class="btn btn-submit">送信</button>
      </form>
      <div class="output-wrapper">
        <h4>結果</h4>
        <div class="output-inner">
          <p class="output-item">好きなキャラクター：<span id="output-select"></span></p>
          <p class="output-item">理由：<span id="output-text"></span></p>  
        </div>
      </div>
    </div>
    </section>


    <section>
    <h3>18. ナビゲーションをつくろう</h3>
      <!-- ヘッダー -->
      <header>
      <div class="container">
        <div class="header-title">
          <div id="top-btn" class="header-logo">にんじゃわんこの部屋</div>
        </div>
        <div class="header-menu">
          <ul class="header-menu-right">
            <li>
              <a href="#stamps">LINEスタンプ</a>
            </li>
            <li>
              <a href="#interview">インタビュー</a>
            </li>
            <li>
              <a href="#contact">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- スライダー -->
    <div id="stamps" class="stamps-section">
      <div class="container">
        <div class="section-title">
          <h3>LINEスタンプ大好評発売中！</h3>
        </div>
        <div id="stamp-carousel" class="carousel slide" data-ride="carousel"> 
          <ol class="carousel-indicators">
            <li data-target="#stamp-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#stamp-carousel" data-slide-to="1" class=""></li>
            <li data-target="#stamp-carousel" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner">
            <div class="item stamp-box active">
              <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/LineStamp1.jpg" class="stamp-image">
              <h4>にんじゃわんこがLINEスタンプに登場！</h4>
            </div>
            <div class="item stamp-box">
              <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/LineStamp2.jpg" class="stamp-image">
              <h4>プログラミング関連のスタンプも！</h4>
            </div>
            <div class="item stamp-box">
              <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/LineStamp3.jpg" class="stamp-image">
              <h4>新キャラ・ベイビーわんこも！</h4>
            </div>
          </div> 
        </div> 
        <p>全40種類！使いやすく、可愛い！にんじゃわんこの日常を表現したスタンプです！<br>
          ご購入は<a class="stamp-link" href="https://store.line.me/stickershop/product/1132359/ja" target="_blank"> こちら</a>（LINE STORE）から！
        </p>
      </div>
    </div>

    <!-- インタビュー -->
    <div id="interview" class="interview-section">
      <div class="interview-section-top gray-section">
        <div class="container">
          <div class="section-title">
            <h3>特別インタビュー</h3>
          </div>
          <img class="interview-image" src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/interview_wanko.jpg">
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="contact-section gray-section">
      <div class="contact-section-inner">
        <div class="container">
          <div class="section-title">
            <h3>お問い合わせ</h3>
          </div>
          <div class="contact-form">
            <h4>メッセージを送る</h4>
            <form>
              <div class="error-message"></div>
              <input type="text" name="name" placeholder="お名前" class="contact-name">
              <div class="error-message"></div>
              <input type="text" name="email" placeholder="メールアドレス" class="contact-email">
              <div class="error-message"></div>
              <textarea name="message" placeholder="メッセージ内容"></textarea>
              <button type="submit" class="btn btn-contact">送信</button>
            </form>
          </div>
          <div class="contact-about">
            <h4>About Me</h4>
            <p>Progateで飼われている柴犬。忍者の格好をするのが趣味(可愛いさが際立つと思っている)。妖精によって深夜4時半頃に召喚され、それ以来Progateのサイトに居座るように。<br>
              Progateでは、ユーザーの癒やしから、学習のサポートまでを担当。また、フィードバック番長も努め、ユーザーにフィードバックを返信しないと毎日22時に怒鳴ってくる。
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>

  </div>
</div>



<?php get_template_part('parts_footer'); ?>
<?php get_footer(); ?>
