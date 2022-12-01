const SlidesLoaded = new CustomEvent("SlidesLoaded");

// swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    lazyLoading: true,
    speed: 1000,
    effect: "fade",
  },
});
let parser = new DOMParser();
let swiper_wrapper = $(".swiper-wrapper");
let articles = $(".swiper-slide");
// console.log(swiper_wrapper);
// console.log(articles);

let slides = [];

fetch("./common/slides.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.slides.map((ele, index) => {
      fetch(ele.path)
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          // console.log(html);
          slides.push(html);
          if (slides.length === data.slides.length) {
            console.log("completed / loded");
            // let event = new CustomEvent("readtdata", {
            //   detail: fetchdata(listSlides, ele),
            // });
            window.dispatchEvent(SlidesLoaded);
          }
        });
      $("head").append(
        `<link rel="stylesheet" type="text/css" href="${ele.Csspath}">`
      );
      if (ele.jspath !== "" || ele.jspath !== undefined) {
        $(`<script text/javascript src=${ele.jspath}></script>`).appendTo(
          document.body
        );
      }

      //   fetch(ele.Csspath).then(function (response) {
      //     console.log(response.text());
      //     return response.text();
      //   });
    });
  })

  .catch((error) => console.log(error));
// setTimeout(() => {}, 100);

function fetchdata(listSlides, ele) {
  for (let i = 0; i < listSlides.length; i++) {
    const slide = listSlides[i];
    let Slide = parser.parseFromString(slide, "text/html");
    // console.log(Slide);
    swiper.appendSlide(Slide.getElementsByClassName("swiper-slide"));
  }
}

window.addEventListener("SlidesLoaded", () => {
  // console.log("here");
  fetchdata(slides);
});

// hide and show elements from splach screens
// setInterval(() => {}, 100);

swiper.on("activeIndexChange", function () {
  if (this.activeIndex === 1) {
    console.log("IM ON SECOND SLIDE!");
    // alert("IM ON SECOND SLIDE!");
  }
  if (this.activeIndex === 2) {
    console.log("IM ON third SLIDE!");
    // alert("IM ON SECOND SLIDE!");
  }
  if (swiper.activeIndex >= 1) {
    $(".background").fadeIn("slow");
    $("footer").fadeIn("slow");
  } else {
    $(".background").fadeOut("slow");
    $("footer").fadeOut("slow");
  }
});

$(".firstblock__home").on("click", function () {
  console.log("here ");
  swiper.slideTo(0, 400);
});
$(".firstblock__pi").on("click", function () {
  console.log("here pi ");
  $(".shadow").remove();
  $(".exit_x").remove();
  $(".modal").remove();
  $("footer").css({ "z-index": "2" });
  $(".swiper-wrapper").prepend(`
    <div class="shadow" >

    <div class="modal" >  <div class="exit_x"></div>
    <p>
   Energistically re-engineer 2.0 applications and customized materials. Monotonectally drive user-centric e-services with extensive ROI. Credibly grow focused web services before fully researched supply chains. Competently restore team building sources before empowered services. Professionally foster competitive e-services after multidisciplinary supply chains.

Seamlessly grow distributed potentialities without.
    </p>
    </div>
     </div>
    `);
  $(".exit_x").on("click", function () {
    //   console.log("heree clicked ");
    $(".shadow").remove();
    $(".exit_x").remove();
    $(".modal").remove();
    $("footer").css({ "z-index": "unset" });
  });
});
$(".firstblock__ref").on("click", function () {
  console.log("here rf");
});
