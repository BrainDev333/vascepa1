swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 0) {
    $(".mainSlide1_text1").show();
    $(".mainSlide1_text2").show();
  } else {
    $(".mainSlide1_text1").hide();
    $(".mainSlide1_text2").hide();
  }
});
