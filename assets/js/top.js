
/****************************************
jQuery学習レッスン初級編
****************************************/

//アニメーション付きで要素を表示

$('.po_red').fadeOut(2000);
$('.po_up').slideUp(500);
$('.po_image').fadeIn('slow');
$('.po_it').slideDown('slow');

//clickイベント
$('.po_gold').click(function(){
  $('.po_old').hide();
});

//cssメソッドで色を変えよう
$('.po_color').css('color','#ffcccc');

//cssメソッドで要素を隠す、表示する
$('#delete_po').click(function(){
  $('.po_image').hide();
});

//HTMLを変更する(1)- textメソッド
$('.po_normal').text('やばいスーパーバリュー');

//HTMLを変更する(2)-htmlメソッド
$('.po_image').html('<span>倍うならすこのマイクがある</span>');

//thisの使い方
$('ul.po_ul li').click(function(){
  $(this).css('color','#ffcccc');
});

//変数を使おう
var $po_hen = $('#po_hen');
$po_hen.css('color','red')

//メソッドチェーンを使おう
$('#po_next').css('color','#ffcccc').css('padding','40px');

//子要素を取得しよう(1)-findメソッド
$('#po_parent').find('a').css('padding','40px');

//子要素を取得しよう(2)-childrenメソッド
$('#po_children').children('a').css('color','#ffcccc');

//hoverイベント
$('#po_hover').hover(
  function(){
    $(this).css('color','#ffcccc').css('font-weight','bold');
  },
  function(){
    $(this).css('font-weight','normal');
  }
);


/****************************************
jQuery学習レッスン中級編
****************************************/

//モーダルをつくろう
$('#po_modal_show').click(function(){
  $('#po_modal').fadeIn();
});

//モーダルを隠そう
$('#po_modal_hide').click(function(){
  $('#po_modal').fadeOut();
});

//hover機能をつくろう
$('.lesson_hover').hover(
  function(){
  $(this).children('p').fadeIn();
},
function(){
  $(this).children('p').fadeOut();
}
)

//addClassメソッド
$('.lesson_add').click(function(){
  $(this).children('p').addClass('look');
}
)

//removeClassメソッド
$('.lesson_add').click(function(){
  $(this).children('span').removeClass('dont');
}
)

//アコーディオンのスライド操作
$('ul.acordion').find('li').click(function(){
  var $answer = $(this).find('.answer')
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
  }else{
    $answer.addClass('open');
    $answer.slideDown();
  }
}
)

//eqメソッド
$('.buddah li').eq(2).css('color','red');



//スライドの仕組み
$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    var slideIndex = $('.slide').index($('.active'));
    
    // 3. change-btn要素を表示してください
    $('.change-btn').show();
    
    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    if(slideIndex == 0){
        $('.prev-btn').hide();
      }else if(slideIndex == 3){
        $('.next-btn').hide();
      }
   
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    
    // 「.index-btn」のクリックイベントと同様の処理を記述してください
    var slideIndex = $('.slide').index($('.active'));
        $('.change-btn').show();

        if(slideIndex == 0){
        $('.prev-btn').hide();
      }else if(slideIndex == 3){
        $('.next-btn').hide();
      }
  });
});



//共通部分の関数化
$(function() {
  $('.index-btn2').click(function() {
    $('.active2').removeClass('active2');
    var clickedIndex = $('.index-btn2').index($(this));
    $('.slide2').eq(clickedIndex).addClass('active2');
    
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    var slideIndex = $('.slide2').index($('.active2'));
    
    // 3. change-btn要素を表示してください
    $('.change-btn2').show();
    
    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    if(slideIndex == 0){
        $('.prev-btn2').hide();
      }else if(slideIndex == 3){
        $('.next-btn2').hide();
      }
   
  });
  
  $('.change-btn2').click(function() {
    var $displaySlide = $('.active2');
    $displaySlide.removeClass('active2');
    if ($(this).hasClass('next-btn2')) {
      $displaySlide.next().addClass('active2');
    } else {
      $displaySlide.prev().addClass('active2');
    }
    
    // 「.index-btn」のクリックイベントと同様の処理を記述してください
    var slideIndex = $('.slide2').index($('.active2'));
        $('.change-btn2').show();

        if(slideIndex == 0){
        $('.prev-btn2').hide();
      }else if(slideIndex == 3){
        $('.next-btn2').hide();
      }
  });
});




//6. 関数を使おう
$(function() {
  // toggleChangeBtn関数を定義してください
  function toggleChangeBtn(){
    // 以下をtoggleChangeBtn関数にまとめ、関数を呼び出すようにしてください
    var slideIndex3 = $('.slide3').index($('.active3'));
    $('.change-btn3').show();
    if (slideIndex == 0) {
      $('.prev-btn3').hide();
    } else if (slideIndex == 3) {
      $('.next-btn3').hide();
    }
  } 
  
  $('.index-btn3').click(function() {
    $('.active3').removeClass('active3');
    var clickedIndex = $('.index-btn3').index($(this));
    $('.slide3').eq(clickedIndex).addClass('active3');
    
    toggleChangeBtn();
  });
  
  $('.change-btn3').click(function() {
    var $displaySlide = $('.active3');
    $displaySlide.removeClass('active3');
    if ($(this).hasClass('next-btn3')) {
      $displaySlide.next().addClass('active3');
    } else {
      $displaySlide.prev().addClass('active3');
    }
    
    toggleChangeBtn();
  });
});





//7. length
$(function() {
  
  function toggleChangeBtn4() {
    var slideIndex4 = $('.slide4').index($('.active4'));
    $('.change-btn4').show();
    if (slideIndex4 == 0) {
      $('.prev-btn4').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex4 == $('.slide4').length - 1) {
      $('.next-btn4').hide();
    }
  }
  
  $('.index-btn4').click(function() {
    $('.active4').removeClass('active4');
    var clickedIndex4 = $('.index-btn4').index($(this));
    $('.slide4').eq(clickedIndex4).addClass('active4');
    toggleChangeBtn4();
  });
  
  $('.change-btn4').click(function() {
    var $displaySlide4 = $('.active4');
    $displaySlide4.removeClass('active4');
    if ($(this).hasClass('next-btn4')) {
      $displaySlide4.next().addClass('active4');
    } else {
      $displaySlide4.prev().addClass('active4');
    }
    toggleChangeBtn4();
  });
});

//8. 要素の値を取得しよう（１）
$(function() {
  // 変数titleに、「#title」要素のテキストを代入してください
  var title = $('#title').text();
  // textメソッドを用いて、「#title-text」要素のテキストを書き換えてください
  $('#title-text').text(title);
  
});



//9. 要素の値を取得しよう（２）
$(function() {
  var title = $('#title').text();
  // 2つの変数を定義してください
  var id = $('.section-content p').attr('id')
  var href = $('#link').attr('href')
  
  $('#title-text').text(title);
  // textメソッドを用いて、それぞれ表示してください
  $('#content-id').text(id);
  $('#link-href').text(href);
});






//13. 入力欄への自動入力  14. 選択ボックスの自動選択

$(function() {
  $('#form').submit(function() {
    var selectItem = $('#select-form').val();
    var textItem = $('#text-form').val();
    if (textItem == '') {
      $('#error-message').text('理由を記入してください');
    } else {
      $('#error-message').text('');
    }
    $('#output-select').text(selectItem);
    $('#output-text').text(textItem);
    return false;
  });

  $('.option-btn').click(function() {
    var optionText = $(this).text();
    // 変数clickedOptionに、クリックした要素のdata-optionの値を代入してください。
    var clickedOption = $(this).attr('data-option');
    
    $('#text-form').val(optionText + 'が好きな理由は、');
    // 変数clickedOptionを用いて、「#select-form」の値を自動で入力してください。
    $('.select-form').val(clickedOption);
    
  });

});


//18. ナビゲーションをつくろう

$(function(){

  // SNSボタン
  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
  // トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html, body').animate({ 
      'scrollTop': 0 
    }, 500);
  });
  
  // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  })
  
});