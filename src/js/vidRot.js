var vidRot = $("#vidRot-range").roundSlider({
  radius: 75,
  width: 20,
  max: 360,
  mouseScrollAction: true,
  startAngle: 270,
  handleSize: "+16",
  handleShape: "dot",
  sliderType: "min-range",
  tooltipFormat: "tooltipVal2",
  drag: function (e) {
	    console.log(e.value);
	}
});

function tooltipVal2(args) {
    return args.value + "°";
}

function getDeg() {
	console.log(args.value);
}

if ($('.html5-video-player').length > 0) {
	console.log('Yup');
	$('.html5-video-player').addClass('vidrot-handle');
} else {
	console.log('No Video Detected');
};