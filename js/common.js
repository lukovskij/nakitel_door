$(document).ready(function() {
      $(".slider_box").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      //items : 1
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
      });
    $(".menu_btn_top").click(function(){
        $(".mnu_wrapp_top").slideToggle();
    });
    $(window).scroll(function(){
            var scroTop = $(window).scrollTop();
            if(scroTop >20){
                $(".top_line").hide();
                $(".top_line_fix").show();
            }else{
                 $(".top_line").show();
                $(".top_line_fix").hide();
            }
    });
    var hItem =  $(".item").height();
    console.log(hItem);
    $('.item').css("line-height","hItem.value()");

    $(window).resize(function(){
       var hItem =  $(".item").height();
        $('.item').css("line-height","hItem");
    });
});
