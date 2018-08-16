	function getQueryParams(qs)
        {
	        qs = qs.split("+").join(" ");
	        var params = {}, tokens,
	        re = /[?&]?([^=]+)=([^&]*)/g;

	        while (tokens = re.exec(qs)) {
	        	params[decodeURIComponent(tokens[1])]
	        	= decodeURIComponent(tokens[2]);
	        }
	        return params;
	}
	var query = getQueryParams(document.location.search)["place"];

	$.getJSON("https://api.weatherbit.io/v2.0/current?city=" + query +"&key=f21a64f933fa4d6588f921baf1d47ab0&callback=?", 	function (data){

	   	//$("#degreesCelsius").hide();
		console.log(data);

		//set weather id & icon 
		var id = data.data[0].weather.code;
		var icon = data.data[0].weather.icon;

		$('#weather-id').text(id);
		$('#weather-icon').text(icon);

		//TESTING 
		//icon = "01n";
		//change such doge and sky based on much icon
		var doge_img = "url(./img/doge/" + icon + ".png)";
		$('.doge-image').css('background-image', doge_img);

		var sky_img = "url(./img/sky-img/" + icon + ".png)";
		$('.bg').css('background-image', sky_img);

		console.log(icon);

		//get weather description
		var tempCelcius = data.data[0].temp;
		var tempFahrenheit = tempCelcius * 9 / 5 + 32;
		var description = data.data[0].weather.description;

		$('#weather-desc').text("wow " + description);
		$('#location').text(data.data[0].city_name);

		$('#degreesCelsius .number').text(Math.round(tempCelcius));
		$('#degreesCelsius .cel').text("\u00B0C ");
		$('#degreesFahrenheit').text(Math.round(tempFahrenheit) + "\u00B0F");

		$(".suchlikes").show();
		$(".ourinfo").show();

		//initialise such doge
		$($.doge);
	});
