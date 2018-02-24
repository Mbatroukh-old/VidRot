if ($('.html5-video-player').length > 0) {
  console.log('Yup');
  $('.html5-video-player').addClass('vidrot-handle');
  $('.html5-video-player').after('<div id="vidRot-range"></div>');
} else {
  console.log('No Video Detected');
};

var vidRot = $("#vidRot-range").roundSlider({
  radius: 75,
  width: 20,
  max: 360,
  mouseScrollAction: true,
  startAngle: 270,
  handleSize: "20",
  tooltipFormat: "tooltipVal2",
  drag: "onValueChange"
});

function tooltipVal2(args) {
    return args.value + "°";
}

function onValueChange(e) {
  console.log(e.value);
    $('.tester-div').css('transform', 'rotate(' + e.value + 'deg)');
    $('.html5-video-player').css('transform', 'rotate(' + e.value + 'deg)');
}

function getDeg() {
  // Temporary solution
  // console.log($('.rs-tooltip-text').text());
  onValueChange();
}