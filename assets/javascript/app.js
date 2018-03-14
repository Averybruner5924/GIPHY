
var animals = ["Cat", "Bird", "Dog", "Horse"];
       
function displayAnimalInfo() {

  var animal = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=Oe947BBRDWIT7KNB3JpqxeV1mbg8UIl9";

  // Creating an AJAX call for the specific movie button being clicked
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
      
      $("#animals-view").prepend(animalDiv);
    }

  });

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < animals.length; i++) {

    
    var a = $("<button>");
    a.attr("data-name", animals[i]);
    a.text(animals[i]);
    $("#buttons-view").append(a);
  }
};

$("#add-animal").on("click", function(event) {
  event.preventDefault();
  var animal = $("#animal-input").val().trim();

  animals.push(animal);

  renderButtons();
});

};


$(document).on("click", displayAnimalInfo);

renderButtons();


