//============slider banner
let couterIndex = 0;
showCouter(couterIndex);
// Next/previous controls
function plusSlides(n) {
  showCouter(couterIndex);
}
// Thumbnail image controls
function currentSlide(n) {
  showCouter(couterIndex);
}
function showCouter(n) {
  let i;
  let couter = document.getElementsByClassName("card-course");
  if (n > couter.length) {
    couterIndex = 1;
  }
  if (n < 1) {
    couterIndex = couter.length;
  }
  for (i = 0; i < couter.length; i++) {
    couter[i].style.display = "none";
  }
  couterIndex++;
  if (couterIndex > couter.length) {
    couterIndex = 1;
  }
 
  setTimeout(showCouter, 5000);
}