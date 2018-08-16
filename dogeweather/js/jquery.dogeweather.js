//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

        var suchcolors = [ 
            "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", 
            "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1",
            "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }
        
        //  much array
        //var tings = $.extend(['doge', 'shibe', 'excite', 'impress', 'skill', 'warn'], tings);
        
        var r = function(arr) {
            if(!arr) arr = tings; return arr[Math.floor(Math.random() * arr.length)];
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

        console.log(suchicon);
        console.log(suchtemp + "temp");
        if (suchtemp <= -30)
        {
            var sofirst = "winter";
            var sosecond = "freeze";
            var sothird = "polar vortex";
            var sofourth = "ridiculous";
            var sofifth = "hibernate";
            var sosixth = "climate change";
        }
        else if (suchtemp > -30 && suchtemp <= -15)
        {
            var sofirst = "cold";
            var sosecond = "freeze";
            var sothird = "shiver";
            var sofourth = "ice";
            var sofifth = "yuck";
            var sosixth = "climate change";
        }
        else if (suchtemp > -15 && suchtemp <= -7)
        {
            var sofirst = "icy";
            var sosecond = "winter";
            var sothird = "chill";
            var sofourth = "crisp";
            var sofifth = "brrrrr";
            var sosixth = "cool"
        }
        else if (suchtemp > -7 && suchtemp <= 0)
        {
            var sofirst = "icy";
            var sosecond = "frost";
            var sothird = "numb";
            var sofourth = "shiver";
            var sofifth = "brrr";
            var sosixth = "chilly";
        }
        else if (suchtemp > 0 && suchtemp <= 10)
        {
            var sofirst = "chilly";
            var sosecond = "concern";
            var sothird = "coat";
            var sofourth = "frosty";
            var sofifth = "uh oh";
            var sosixth = "brrrr";
        }
        else if (suchtemp > 10 && suchtemp <= 20)
        {
            var sofirst = "moderate";
            var sosecond = "mild";
            var sothird = "okay";
            var sofourth = "medium";
            var sofifth = "cool";
            var sosixth = "whatever";
        }
        else if (suchtemp > 20 && suchtemp <= 30)
        {
            var sofirst = "heat";
            var sosecond = "warmth";
            var sothird = "climate";
            var sofourth = "sweating";
            var sofifth = "balmy";
            var sosixth = "nice day";
        }
        else if (suchtemp > 30)
        {
            var sofirst = "boiling";
            var sosecond = "bake";
            var sothird = "melt";
            var sofourth = "dying";
            var sofifth = "suffer";
            var sosixth = "global warming";
        }
        else
        {
            var sofirst = "concern";
            var sosecond = "climate";
            var sothird = "degrees";
            var sofourth = "shrug";
            var sofifth = "wow";
            var sosixth = "celcius";
        }
        

        console.log(suchtemp);

        //Clouds
        if(suchicon=="c01d") {
            tings = $.extend(['clear', 'sky', 'lovely', 'amaze', 'wonderful','sun', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c01n") {
            tings = $.extend(['night', 'amaze', 'clear', 'lovely', 'wonderful', 'sky', 'stars', 'moon', 'dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c02d") {
            tings = $.extend(['cloud', 'okay', 'cumulus', 'amaze', 'sky', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c02n") {
            tings = $.extend(['dark', 'cumulus', 'amaze', 'cloud', 'star', 'space', 'after dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c03d") {
            tings = $.extend(['cloudy', 'scattered', 'overcast', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c03n") {
            tings = $.extend(['cloud', 'scattered', 'clear sky', 'night time', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="c04d" || suchicon=="04n") {
            tings = $.extend(['gloomy', 'clouds', 'shady', 'boring', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="d01d" || suchicon=="d02d" || suchicon=="d03d") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="d01n" || suchicon=="d02n" || suchicon=="d03n") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="r01d" || suchicon=="r02d" || suchicon=="r03d" || suchicon=="r04d" || suchicon=="r05d" || suchicon=="r06d") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="r01n" || suchicon=="r02n" || suchicon=="r03n" || suchicon=="r04n" || suchicon=="r05n" || suchicon=="r06n") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'scary', 'dark cloud', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="t01d" || suchicon=="t02d" || suchicon=="t03d" || suchicon=="t04d" || suchicon=="t05d") {
            tings = $.extend(['thunder', 'loud', 'scare', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="t01n" || suchicon=="t02n" || suchicon=="t03n" || suchicon=="t04n" || suchicon=="t05n") {
            tings = $.extend(['scary night', 'thunder', 'loud', 'crash', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s01d" || suchicon=="s06d") {
            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s01n" || suchicon=="s06n") {
            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'powder', 'santa', 'abominbubble snowmans', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s02d") {
            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'santa', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s02n") {
            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'powder', 'joy', 'abominbubble snowmans', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s03d") {
            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'shiver', 'bundle up', 'shiny', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s03n") {
            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'shiver', 'bundle up', 'abominbubble snowmans', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s04d") {
            tings = $.extend(['snow rain', 'gross', 'soft', 'icy', 'sludge', 'shiver', 'bundle up', 'splut', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s04n") {
            tings = $.extend(['snow rain', 'gross', 'night time', 'slippery', 'icy', 'sludge', 'shiver', 'bundle up', 'splut', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s05d") {
            tings = $.extend(['sleet', '51337', 'soft', 'icy', 'slush', 'shiver', 'bundle up', 'splat', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="s05n") {
            tings = $.extend(['sleet', '51337', 'night time', 'slippery', 'icy', 'slush', 'shiver', 'bundle up', 'splat', 'brrr', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a01d" || suchicon=="a01n") {
            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbilibily', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a02d" || suchicon=="a02n") {
            tings = $.extend(['smoke', 'cough', 'creepy', 'spook', 'blind', 'low visbilibily', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a03d" || suchicon=="a03n") {
            tings = $.extend(['haze', 'cough', 'creepy', 'spook', 'blind', 'low visbilibily', 'vapes', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a04d" || suchicon=="a04n") {
            tings = $.extend(['sand', 'blink blink', 'creepy', 'spook', 'blind', 'low visbilibily', 'darkness', 'gloomy', 'haboob', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a05d" || suchicon=="a05n") {
            tings = $.extend(['fog', 'vapor', 'creepy', 'spook', 'blind', 'low visbilibily', 'vapes', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="a06d" || suchicon=="a06n") {
            tings = $.extend(['freezing fog', 'frog', 'creepy', 'spook', 'blind', 'low visbilibily', 'chilly', 'gloomy', 'shiver', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        else {
        var dogefix = [
            'wow', 'such weather', 'much doge'
        ];
        }
        var dogefix = [
            'so wow', 'such ' + r(),
            'very ' + r(), 'much ' + r(),
            'so ' + r(),
            'wow'
        ];
        
        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });
        
        $('img').each(function() {
            $(this).attr('src', 'https://images.encyclopediadramatica.es/3/3e/Doge_full_image.jpg');
        });
     
        setInterval(function() {
            
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *100 + '%;top: ' + Math.random()  *100 + '%;font-size: ' + Math.max(20, (Math.random() * 50 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(dogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 2500);
    };
})(jQuery);