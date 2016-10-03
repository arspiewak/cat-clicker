function Clicker () {
	var clickCount = 0;
	var $currCount = $('#currCount');
	$currCount.text(clickCount);

	function clickHandler() {
		$currCount.text(++clickCount);
	}

	$('#cat').click(clickHandler);

	return;
}

var clicker = new Clicker();
