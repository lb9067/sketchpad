// to center div in middle of page no matter window size:
// margin: auto;
//left:0;
//top: 0;
//bottom: 0;
$(document).ready(function() {
  for(var x = 0; x < 50; x++) {
    for(var y = 0; y < 50; y++) {
      $("<div>").addClass("unit").appendTo('#container');
    };
  };
  $('.unit').hover(function() {
    $(this).addClass("hovered");
  });
});
