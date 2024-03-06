/*================ 
Template Name: MySpace
Description:  Architecture and Interior Designer Page HTML Template
Version: 1.0 
Author: https://www.templatemonster.com/authors/techeshta
=======================*/


// Table Of Content

// 02. Popup
// 02. Progress Bar 
// 03. Counter
// 04. Testimonial Slider 
// 05. Wow js
// 06. Form Submitting 
/* -----------------------------------------------------
    01. Popup
----------------------------------------------------- */
$(document).ready(function() {
    if ($.fn.magnificPopup) {
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
            patterns: {
                youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
            }
        });
    }
});
// Popup with Slider
Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [
            ["infobar"],
        ],
        right: ["fullscreen","close" ],
      }
    }
  });
/* -----------------------------------------------------
    02. Progress Bar
----------------------------------------------------- */

$(".animated-progress span").each(function () {
    $(this).animate(
    {
        width: $(this).attr("data-progress") + "%",
    },
    1000
    );
    $(this).text($(this).attr("data-progress") + "%");
});
/* -----------------------------------------------------
    03. Counter
----------------------------------------------------- */

let count = document.querySelectorAll(".count")
let arr = Array.from(count)

    arr.map(function(item){
    let startnumber = 0

    function counterup(){
    startnumber++
    item.innerHTML= startnumber
    
    if(startnumber == item.dataset.number){
        clearInterval(stop)
    }
    }

    let stop =setInterval(function(){
    counterup()
    },40)

});
/* -----------------------------------------------------
    04. Testimonial Slider 
----------------------------------------------------- */
$(".testimonial-wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
/* -----------------------------------------------------
    05. Wow js
----------------------------------------------------- */
new WOW().init();

/* -----------------------------------------------------
    06. Form Submitting 
----------------------------------------------------- */

var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
    event.preventDefault();

    var status = document.getElementById("contact-form-status");

    var data = new FormData(event.target);

    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
        }
        })
    }
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
   
}
form.addEventListener("submit", handleSubmit)
