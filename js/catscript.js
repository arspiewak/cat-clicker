/* List of cat objects to be created onscreen */
var catList = [
	{name: 'Diana',
	 src: 'images/kitty.jpg'},
	{name: 'Gemini',
	 src: 'images/kitty2.jpg'}
];

/* Object creation for a Cat object */
function Cat(name, imageSrc, index) {
	this.name = name;			/* Name of the cat */
	this.imageSrc = imageSrc;	/* Relative filename of image */
	this.index = index;			/* Unique reference # for each cat */
	var spanId = 'counter' + index;	/* String, name of this cat's counter span */

	/* Row container where everything gets added */
	var catRow = $('#catrow');

	/* jQuery objects to add to DOM */
	var catFrame;				/* Holds all this cat's info */
	var catImage;				/* Picture of the cat */
	var catDispCount;			/* Display of click count */

	/* Create Kitty's presence */

	catFrame = $('<div></div>', {
		'class': 'catframe col-md-5'
	}).appendTo(catRow);

	catImage = $('<img>', {
		'class': 'catimage img-responsive',
		'src': imageSrc,
		'alt': 'Cat picture'
	}).appendTo(catFrame);

	catDispCount = $('<p class="counter"><strong>' + name +
		'</strong> Click count: <span id="' + spanId +
		'"> -1</span></p>').appendTo(catFrame);

	/*	Define counter function & use it to initialize the numeric counter.
		Note that the count is stored in the text of a span whose ID is of the
		form counterN, where N is the index of the individual Cat.
	 */
	var catCountSpan = $('#' + spanId);
	function incrementCount() {
		var n = catCountSpan.text();
		catCountSpan.text(++n);
	}

	/* Install the click-counting callback function and call it to initialize */
	catFrame.click(incrementCount);
	catFrame.click();

	return;
}

/* Instantiate the kitties defined in catList once there's a place to put them. */
document.addEventListener('DOMContentLoaded', function() {
	for (var i = 0, len = catList.length; i < len; i++) {
		var cat = catList[i];
		/* catObj is added as an attribute to hold the object we create */
		catList[i].catObj = new Cat (cat.name, cat.src, i);
	}
	return;
});
