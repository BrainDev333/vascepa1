swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 2) {
    // console.log("hereeeeeeeeeeeeeeee");
    $(".mainSLide3_courbe").show();
    $(".mainSLide3_chiffre1").show();
    $(".mainSLide3_chiffre2").show();
    $(".mainSLide3_chiffre3").show();
  } else {
    $(".mainSLide3_courbe").hide();
    $(".mainSLide3_chiffre1").hide();
    $(".mainSLide3_chiffre2").hide();
    $(".mainSLide3_chiffre3").hide();
  }
});
