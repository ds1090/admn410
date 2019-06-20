// JavaScript Document
var count = 1;
slide_show(count);

function Next(n) {
  slide_show(count += n);
}

function slide_show(n) {
	
  var k;
  var img_array = document.getElementsByClassName("slides_images");
  if (n > img_array.length) {count = 1}
  if (n < 1) {
  count = img_array.length
  }
  for (k = 0; k < img_array.length; k++) {
  
    img_array[k].style.display = "none";  
  }
  img_array[count-1].style.display = "block";  
}