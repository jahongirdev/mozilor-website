const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

var slider = tns({
     container: '.my-slider',
     items: 1,
     slideBy: 1,
     mouseDrag: true,
     speed: 500,
     gutter: 10,
     nav: false,
     arrowKeys: true,
     responsive: {
          700: {
               items: 2
          },
          1100: {
               items: 4
          }
     },
     prevButton: prevBtn,
     nextButton: nextBtn,
});
