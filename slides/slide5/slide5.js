swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 4) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSLide5_text").show();
    $(".mainSLide5_pink").show();
    $(".mainSLide5_blue").show();
    $(".mainSLide5_ldl").show();
  } else {
    $(".mainSLide5_text").hide();
    $(".mainSLide5_pink").hide();
    $(".mainSLide5_blue").hide();
    $(".mainSLide5_ldl").hide();
  }
});
