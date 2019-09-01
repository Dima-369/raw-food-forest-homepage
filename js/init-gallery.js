$(document).ready(function () {
	$('#gallery-entstehung').justifiedGallery({
		rowHeight: 220,
	}).on('jg.complete', function () {
		lightGallery(document.getElementById('gallery-entstehung'), {
			galleryId: 1
		});
	});
	$('#gallery-bambus-lehmhaus').justifiedGallery({
		rowHeight: 200,
	}).on('jg.complete', function () {
		lightGallery(document.getElementById('gallery-bambus-lehmhaus'), {
			galleryId: 2
		});
	});
	$('#gallery-bambus-lffel-workshop').justifiedGallery({
		rowHeight: 260,
	}).on('jg.complete', function () {
		lightGallery(document.getElementById('gallery-bambus-lffel-workshop'), {
			galleryId: 3
		});
	});
	$('#gallery-essen').justifiedGallery({
		rowHeight: 260,
	}).on('jg.complete', function () {
		lightGallery(document.getElementById('gallery-essen'), {
			galleryId: 4
		});
	});
	$('#gallery-hochbeet').justifiedGallery({
		rowHeight: 200,
	}).on('jg.complete', function () {
		lightGallery(document.getElementById('gallery-hochbeet'), {
			galleryId: 5
		});
	});
});