/*

*/
var demo = document.getElementById("ball");
var r = document.querySelector(":root");

var x = 0;
getglobalpostion = () => {
  var _tmp = window
    .getComputedStyle(demo, null)
    .backgroundPosition.trim()
    .split(/\s+/);
  console.log(_tmp);
  return {
    left: _tmp[0],
    top: _tmp[1],
  };
};
let ball = $("#ball");
rotateleft = (e) => {
  const positions = getglobalpostion();
  let left = parseInt(positions.left);
  console.log("🚀 ~ file: script.js ~ line 21 ~ left", left);

  x--;
  console.log("left");
  $(".ball").addClass("paused");

  // ball.css({
  //   backgroundPosition: "568.411px" + "0px",
  // });
  r.style.setProperty("--my-start-background", `${(left + 100) % 900}px 0px`);
  // console.log(positions, (left += 455.0), positions.top);
};
rotateright = () => {
  const positions = getglobalpostion();
  let left = parseInt(positions.left);

  console.log("right");
  // x++;
  // console.log("left");
  $(".ball").addClass("paused");
  let newLeft = left - 100 < 0 ? 800 + (left - 100) : left - 100;
  r.style.setProperty("--my-start-background", `${newLeft % 900}px 0px`);
  // r.style.setProperty("--home-left-initial", `${-100}px 0px`);
};
// jQuery.keyframe.define([
//   {
//     name: "rotateoncurrentpostion",
//     "0%": { backgroundPosition: positions },
//     "100%": { backgroundPosition: "0 0" },
//   },
// ]);

// const range = (start, end) => {
//   const length = end - start;
//   return Array.from({ length }, (_, i) => start + i);
// };

function between(x, min, max) {
  return x >= min && x <= max;
}
// const positions = getglobalpostion();
// let left = parseInt(positions.left);
// var rs = getComputedStyle(r);
// setInterval(() => {
//   console.log(rs.getPropertyValue("--my-start-background"));
//   if (left > -500 && left < -300) {
//     console.log("here");
//   }
// }, 1000);

// button click

$(":button").click(function () {
  const positions = getglobalpostion();
  let left = parseInt(positions.left);

  // console.log(positions);
  if (this.id == "left" || this.id == "right") {
    if (left >= 0 && left < 100) {
    } else if (left >= 100 && left < 199) {
    } else if (left >= 500 && left <= 599) {
      $(".Logo2_0").show();
      $(".Logo2_1").show();
    } else if (left >= 700 && left <= 799) {
      $(".Logo1_0").show();
      $(".Logo1_1").show();
      $(".Logo1_2").show();
    } else if (left >= 800 && left <= 0) {
      $(".Logo1_0").hide();
      $(".Logo1_1").hide();
      $(".Logo1_2").hide();
    } else {
      $(".Logo1_0").hide();
      $(".Logo1_1").hide();
      $(".Logo1_2").hide();
      $(".Logo2_0").hide();
      $(".Logo2_1").hide();
    }
  }
});

// $(":button").click(function () {
//   const positions = getglobalpostion();
//   console.log(positions);
//   if (this.id == "left" || this.id == "right") {
//     // Get the root element
//     var r = document.querySelector(":root");

//     // Create a function for getting a variable value
//     // Get the styles (properties and values) for the root
//     var rs = getComputedStyle(r);
//     // Alert the value of the --blue variable
//     console.log(
//       "The value of ----my-start-background is: " +
//         rs.getPropertyValue("--my-start-background")
//     );

//     // // root.style.setProperty("--my-start-background", positions.left);
//     setTimeout(() => {
//       // ball.css("animation", "move-map 30s infinite linear");
//       r.style.setProperty(
//         "--my-start-background",
//         rs.getPropertyValue("--my-start-background")
//       );
//       ball.removeClass("paused");
//       ball.addClass("play");
//     }, 3000);
//   }
// });

$(".Logo1_0").click(function () {
  $("body").append(`<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
  <span class="close">&times;</span>
  <p>Some text in the Modal..</p>
  </div>

  </div>`);
  $(".close").click(function () {
    $(".modal").remove();

    $(".modal").hide();
  });
  let modal = document.getElementById("myModal");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal").remove();
    }
  };
});
$(".Logo1_1").click(function () {
  $(".modal").remove();

  $("body").append(`<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal2..</p>
  </div>

</div>`);
  $(".close").click(function () {
    $(".modal").hide();
    $(".modal").remove();
  });
  let modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal").remove();
    }
  };
});

$(".Logo1_2").click(function () {
  // $(".modal") && $(".modal").remove();

  $("body").append(`<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal3a..</p>
  </div>

</div>`);
  $(".close").click(function () {
    $(".modal").hide();
    $(".modal").remove();
  });
  let modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal").remove();
    }
  };
});
$(".Logo2_0").click(function () {
  // $(".modal") && $(".modal").remove();

  $("body").append(`<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal 2_0..</p>
  </div>

</div>`);
  $(".close").click(function () {
    $(".modal").hide();
    $(".modal").remove();
  });
  let modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal").remove();
    }
  };
});
$(".Logo2_1").click(function () {
  // $(".modal") && $(".modal").remove();

  $("body").append(`<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal 2_1..</p>
  </div>

</div>`);
  $(".close").click(function () {
    $(".modal").hide();
    $(".modal").remove();
  });
  let modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal").remove();
    }
  };
});
