$(document).ready(function() {
	var keystring = "4mt41mv07mvz76ndjfmwm8lh";
	var shared_secret = "w09lqqp3jz";
	var url = "";
	$("input").click(function() {
		
		console.log($( "input:checked" ).val());
		$.get("",function(data) {
			console.log(data);
		});
	});
});