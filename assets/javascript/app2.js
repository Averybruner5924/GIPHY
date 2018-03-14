    $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=Oe947BBRDWIT7KNB3JpqxeV1mbg8UIl9";


      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          var results = response.data;

          for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var animalImageStill = $("<img>");
            animalImageStill.addClass("gif");
            animalImageStill.attr("src", results[i].images.original_still.url);
            animalImageStill.attr("data-state", "still");


            var animalImage = $("<img>");
            animalImageStill.addClass("gif");
            animalImage.attr("src", results[i].images.original.url);
            animalImage .attr("data-state", "animate");


            animalDiv.append(p);
            animalDiv.append(animalImageStill);
            
            $("#gifs-appear-here").prepend(animalDiv);

          //I can not get this function to work with my images  
          var state = $(this).attr("data-state");
          
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        }