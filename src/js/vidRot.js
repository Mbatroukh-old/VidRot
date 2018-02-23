$("#vidRot-range").roundSlider({
	min: 0,
	max: 360,
});

if ($('.html5-video-player').length > 0) {
	console.log('Yup');
	$('.html5-video-player').addClass('vidrot-handle');
} else {
	console.log('No Video Detected');
};