<?php get_header(); ?>

<!-- for Page -->
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/post.css">
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/single.css">
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/course.css">
</head>

<body>
<?php get_template_part('parts_header'); ?>

<div class="tit_wrap">
  <div class="section_title">
    <span>イラスト</span>
    <div>ILLUSTRATION</div>
  </div>
</div>

<div id="main">
  <?php the_content(); ?>
</div>

<?php get_template_part('parts_footer'); ?>
<?php get_footer(); ?>