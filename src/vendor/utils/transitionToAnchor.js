
// jQuery(function ($) {
//     var anchorToTop = $("#toTop");

//     $("[data-action='anchor']").on("click", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href');
//         var top = $(id).offset().top - $(".header").height();
//         $('body,html').animate({ scrollTop: top }, 700);
//     });

//     // Anchor toTop
//     // Show Anchor
//     window.addEventListener("scroll", function () {
//         if (window.scrollY >= 1000) {
//             anchorToTop.css({
//                 right: "20px",
//                 opacity: 1,
//                 visibility: "visible"
//             })
//         } else {
//             anchorToTop.css({
//                 right: "-50px",
//                 opacity: 0,
//                 visibility: "hidden"
//             })
//         }
//     });

//     // Animate ToTop Page onClick, hide Anchor
//     $("#toTop").on("click", function (event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: 0 }, 700);
//     })
// });

const anchorToTop = document.querySelector("#toTop");
anchorToTop.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

// Show Anchor
window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
        anchorToTop.classList.remove('anchor_hidden');
    } else {
        anchorToTop.classList.add('anchor_hidden');
    }
});
