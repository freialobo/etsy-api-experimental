$(document).ready(function() {
	var keystring = "4mt41mv07mvz76ndjfmwm8lh";
	var shared_secret = "w09lqqp3jz";
	$("input").click(function() {
		var url = "https://openapi.etsy.com/v2/listings/active?api_key=4mt41mv07mvz76ndjfmwm8lh&color_triplet=#" + $("input:checked").val();
		$.ajax({
            type: "GET",
            url: url,
            async:true,
            crossDomain:true,
            success: function(data, status, xhr) {
                var output = ""
                for(var i in data.results){
                	output += "<li>" + i.title + "</li>";
                }
                $(".items").html(output);
            }
        });
	});
});