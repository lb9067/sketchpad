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
var mouseDown = 0;
var x = 0;
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randColor = colors[Math.floor(Math.random() * colors.length)];

  $('.unit').mousedown(function() {
    mouseDown = x;
    randColor = colors[Math.floor(Math.random() * colors.length)];
});

  $('.unit').mouseup(function() {
    mouseDown = 0;
  });

  $('.unit').mousemove(function() {
    if (mouseDown === 1) {
      $(this).css('background-color', 'black');
    };
    if (mouseDown === 2) {
      $(this).css('background-color', randColor);
    };
    if (mouseDown === 3) {
      $(this).css('background-color', 'white');
    };


  });

  $('#pen').click(function() {
    x = 1;
    $(this).addClass('selected');
    $('#rainbow').removeClass('selected');
    $('#eraser').removeClass('selected');
  });

  $('#rainbow').click(function() {
    x = 2;
    $(this).addClass('selected');
    $('#eraser').removeClass('selected');
    $('#pen').removeClass('selected');
  });

  $('#eraser').click(function() {
    x = 3;
    $(this).addClass('selected');
    $('#rainbow').removeClass('selected');
    $('#pen').removeClass('selected');
  });

});
