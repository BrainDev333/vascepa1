swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 13) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSlide13-initial").show();
    $(".mainSlide13-halfarrow1").show();
    $(".mainSlide13-intermed").show();
    $(".mainSlide13-halfarrow2").show();
    $(".mainSlide13-capsule").show();
    $(".mainSlide13-halfarrow3").show();
    $(".mainSlide13-final").show();
    $(".mainSlide13-encap").show();
    $(".mainSlide13-halfarrow4").show();
    $(".mainSlide13-ico").show();
    $(".mainSlide13-largeArrow").show();
  } else {
    $(".mainSlide13-initial").hide();
    $(".mainSlide13-halfarrow1").hide();
    $(".mainSlide13-intermed").hide();
    $(".mainSlide13-halfarrow2").hide();
    $(".mainSlide13-final").hide();
    $(".mainSlide13-capsule").hide();
    $(".mainSlide13-halfarrow4").hide();
    $(".mainSlide13-halfarrow3").hide();
    $(".mainSlide13-encap").hide();
    $(".mainSlide13-ico").hide();
    $(".mainSlide13-largeArrow").hide();
  }
});
