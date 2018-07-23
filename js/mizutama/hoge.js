$(function(){
	let $hoge = $('.hoge');
	$hoge.morphing({
		numVert: 10,
		spring: 0.005,
		friction: 0.8,
		radius: 65,
		fps: 90
	});
});
