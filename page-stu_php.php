<?php get_header(); ?>

<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/common.css">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/studyjs.css">


</head>

<body>
<?php get_template_part('parts_header'); ?>

<div class="tit_wrap">
  <h1 class="section_title">
    <span>PHP</span>
    <div>PHP</div>
  </h1>
</div>


<ul class="study_menu">
  <li><a href="#php_1">PHPとは？</a></li>
  <li><a href="#php_2">PHPの基礎を学ぼう</a></li>
  <li><a href="#php_3">条件分岐</a></li>
</ul>


<div class="study">

  <div id ="php_1">
    <h2>PHPとは？</h2>
    <section>
      <h3>1. echo</h3>
      <div>
        <?php
          // 'Hello, world!'をechoしてください
          echo 'Hello, world!';
        ?>
        
        <br>

        <?php
          // 7 * 2をechoしてください
              echo 7 * 2;
        ?>

        <br>

        <?php
          // 8 % 3をechoしてください
                  echo  8 % 3;
        ?>
      </div>
    </section>
  </div>

  <div id ="php_2">
    <h2>PHPの基礎を学ぼう</h2>
    <section>
      <h3>2. データの種類</h3>
      <div>
        <!-- この下で5 + 7を出力しましょう -->
        <?php
          echo 5 + 7;
        ?>

        <br>

        <!-- この下で'5 + 7'を出力しましょう -->
        <?php
          echo '5 + 7';
        ?>
      </div>
    </section>

    <section>
      <h3>3. 変数</h3>
      <div>
        <!-- この下に変数$fruitを書いていきましょう！ -->
        <?php
          $fruit = 'りんご';
          echo $fruit;
        ?>

        <br>

        <!-- この下に変数$sumを書いていきましょう！ -->
        <?php
          $sum = 8+9;
          echo $sum;
        ?>
      </div>
    </section>

    <section>
      <h3>4. 変数の値を更新する</h3>
      <div>

        <?php
        $x = 5;
        $y = 2;
        $a = 8;
        $b = 4;
        ?>

        <!-- この下で$xの計算をしていきましょう -->
        <?php
        $x = $x + 10;
        echo $x;
        ?>

        <br>

        <!-- この下で$yの計算をしていきましょう -->
        <?php
        $y = $y * 5;
        echo $y;
        ?>

        <br>

        <!-- この下で$aの計算をしていきましょう -->
        <?php
        $a ++;
        echo $a;    
        ?>

        <br>

        <!-- この下で$bの計算をしていきましょう -->
        <?php
        $b --;
        echo $b;
        ?>

      </div>
    </section>

    <section>
      <h3>5. 文字列の連結</h3>
      <div>

      <?php
        $name = 'にんじゃわんこ';
        // 'こんにちは！'という文字列と$nameを連結してechoしてください
        echo "こんにちは！{$name}"
        
      ?>

      </div>
    </section>
  </div>

  <div id ="php_3">
    <h2>条件分岐</h2>
    <section>
      <h3>6. if文</h3>
      <div>

      <?php
        $x = 99 * 99;
        $y = 77 * 77;

        // ここにif文を書いていきましょう
        if($x > 9800){
        echo('変数xは9800より大きいです。');
        }

        if($y > 6000){
        echo('変数yは6000より大きいです。');
        }
      ?>

      </div>
    </section>

    <section>
      <h3>7. else, elseif文</h3>
      <div>

      <?php
        // $ageという変数に自分の年齢を代入してください
        $age = 41;
        if ( $age >= 30){
          echo ('あなたは30歳以上です。');
        } else{
          echo ('あなたは30歳未満です。');
        }
      ?>

      </div>
    </section>

    <section>
      <h3>8. &&, ||</h3>
      <div>

      <?php
  
        $x = 1071;

        // 以下にif-elseif-else文を書いてください
        if( $x%3==0 && $x%3==0 ){
          echo('xは3の倍数かつ7の倍数です。');
        }elseif( $x%3==0 ){
        echo('xは3の倍数ですが7の倍数ではありません。');
        }elseif( $x%7==0 ){
        echo('xは7の倍数ですが3の倍数ではありません。');
        }else{
          echo('xは7の倍数でも3の倍数でもありません。');
        }
        
      ?>

      </div>
    </section>

    <section>
      <h3>9. switch文</h3>
      <div>

      <?php

        // 変数$numを定義し、好きな数字を代入してください
        $num = 1000;
        // 変数$remainderを定義し、変数$numを3で割った時の余りを代入してください
        $remainder = $num % 3;


        // switch文を用いてください
        switch($remainder){
        case 0:
          echo('大吉です。');
          break;
          case 1:
          echo('中吉です。');
          break;
          case 2:
          echo('小吉です。');
          break;
          default:
          echo('凶です。');
        }

        ?>

      </div>
    </section>


    <section>
      <h3>10. 配列</h3>
      <div>

      <?php
        // この下に配列を作ってください
        $colors = array('赤','青','黄');
        echo $colors[0];
        $colors[] = '白';
        echo $colors[3];
      ?>

      </div>
    </section>



  </div>
</div>



<?php get_template_part('parts_footer'); ?>
<?php get_footer(); ?>