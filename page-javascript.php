<?php get_header(); ?>
<!-- for Meta -->
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/common.css">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/studyjs.css">


<!-- for Page -->
</head>

<body>
<?php get_template_part('parts_header'); ?>

<div class="tit_wrap">
  <h1 class="section_title">
    <span>JavaScript</span>
    <div>JavaScript</div>
  </h1>
</div>


<ul class="study_menu">
  <li><a href="#js_1">学習レッスン1</a></li>
  <li><a href="#js_2">学習レッスン2</a></li>
  <li><a href="#js_3">学習レッスン3</a></li>
  <li><a href="#js_4">学習レッスン4</a></li>
  <li><a href="#js_6">学習レッスン6</a></li>
</ul>


<div class="study">

  <div id ="js_1">
    <h2>学習レッスン1</h2>
    <section>
      <h3>
        <ul>
          <li>1 章：文字列と数値</li>
          <li>2 章：変数・定数</li>
          <li>3 章：条件分岐</li>
        </ul>
      </h3>
      <div>コンソール側に色々出力</div>
    </section>
  </div>

  <div id ="js_2">
    <h2>学習レッスン2</h2>
    <section>
      <h3>
        <ul>
          <li>1 章：繰り返し処理</li>
          <li>2 章：配列</li>
          <li>3 章：オブジェクト</li>
          <li>4 章：undefined</li>
          <li>5 章：総合演習</li>
        </ul>
      </h3>
      <div>コンソール側に色々出力</div>
    </section>
  </div>

  <div id ="js_3">
    <h2>学習レッスン3</h2>
    <section>
      <h3>
        <ul>
          <li>1 章：関数を学ぼう</li>
        </ul>
      </h3>
      <div>コンソール側に色々出力</div>
    </section>
  </div>


  <div id ="js_4">
    <h2>学習レッスン4</h2>
    <section>
      <h3>
        <ul>
        <li>クラスの基本</li>
        <li>クラスの継承</li>
        </ul>
      </h3>
      <div>コンソール側に色々出力</div>
    </section>
  </div>

  <div id ="js_6">
    <h2>学習レッスン6</h2>
    <section>
      <h3>
        <ul>
        <li>配列を操作するメソッドを学ぼう</li>
        </ul>
      </h3>
      <div>コンソール側に色々出力</div>
    </section>
  </div>

  
</div>



<?php get_template_part('parts_footer'); ?>
<?php get_footer(); ?>