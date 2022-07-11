<!-- /page_wrapper -->
<?php wp_footer(); ?>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/common.js"></script>
<?php if(is_home()) : ?>
  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/top.js"></script>
<?php elseif ( is_page('javascript') ):?>
  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/study_js.js"></script>
<?php endif;?>

</body>
</html>
