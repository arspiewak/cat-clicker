/* List of cat objects to be created onscreen */
var catList = [
	{name: 'Diana',
	 src: 'images/kitty.jpg'},
	{name: 'Gemini',
	 src: 'images/kitty2.jpg'},
	{name: 'Harry',
	 src: 'images/harry.jpg'},
	{name: 'Hermione',
	 src: 'images/hermione.jpg'},
	{name: 'Kate',
	 src: 'images/kate.jpg'}
];

/* Object creation for a Cat object */
function Cat(name, imageSrc, index) {
	cat = this;					/* Cat object reference for event handlers */
	this.name = name;			/* Name of the cat */
	this.imageSrc = imageSrc;	/* Relative filename of image */
	this.index = index;			/* Unique reference # for each cat */
	this.spanId = 'counter' + index;	/* String, name of this cat's counter span */

	/* Row container where everything gets added */
	var catRow = $('#catrow');

	/* jQuery objects to add to DOM */
	var catFrame;				/* Holds all this cat's info */
	var catImage;				/* Picture of the cat */
	var catDispCount;			/* Display of click count */

	/* Create Kitty's presence */

	catFrame = $('<div></div>', {
		'class': 'catframe row'
	}).appendTo(catRow);

	catDispCount = $('<div class="cattext col-md-9"><strong>' + name +
		'</strong> Click count: <span id="' + this.spanId +
		'"> -1</span></div>').appendTo(catFrame);

	catImage = $('<img>', {
		'class': 'catimage img-responsive col-md-2',
		'src': imageSrc,
		'alt': 'Cat picture'
	}).appendTo(catFrame);

	/*	Install hover processing: When the mouse pointer enters the new catFrame,
		display the cat's info in #currentcat. When it leaves, clear #currentcat.
	 */
	function displayAsCurrent () {
	 	var currentCat = $('#currentcat');

	 	/* Display the image first */
	 	var currentCatImg = $('<img>', {
	 		'class': 'currimage img-responsive col-md-12',
	 		'src': imageSrc,
	 		'alt': 'Current cat\'s picture'
	 	}).appendTo(currentCat);

	 	/* Display name and count under the image */
	 	var currCatDispCount = $('<div class="cattext col-md-12"><strong>' + name +
	 		'</strong> Click count: <span id="dispCount"> -1</span></div>'
	 		).appendTo(currentCat);

	 	/* Set the counter span's text to match that of the catframe above */
	 	$('#dispCount').text(catCountSpan.text());
	 };

	 function clearCurrentDisplay () {
	 	$('#currentcat').empty('');
	 };

	 catFrame.hover(displayAsCurrent, clearCurrentDisplay);

	/*	Define counter function & use it to initialize the numeric counter.
		Note that the count is stored in the text of a span whose ID is of the
		form counterN, where N is the index of the individual Cat.
	 */
	var catCountSpan = $('#' + this.spanId);
	function incrementCount() {
		var n = catCountSpan.text();
		catCountSpan.text(++n);
	 	$('#dispCount').text(n);
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
