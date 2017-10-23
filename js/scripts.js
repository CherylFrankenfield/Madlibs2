$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var blanks = ["holiday", "building", "verb1", "creature", "clothing", "figure", "plural-noun1", "past-tense-verb", "food", "plural-noun2"]

    blanks.forEach(function(blank) {
      var input = $("input#" + blank).val();
      $("." + blank).text(input);
    });

    // var holidayInput = $("input#holiday").val();
    // var buildingInput = $("input#building").val();
    // var verb1Input = $("input#verb1").val();
    // var creatureInput = $("input#creature").val();
    // var clothingInput = $("input#clothing").val();
    // var figureInput = $("input#figure").val();
    // var plural-noun1Input = $("input#plural-noun1").val();
    // var past-tense-verbInput = $("input#past-tense-verb").val();
    // var foodInput = $("input#food").val();
    // var plural-noun2Input = $("input#plural-noun2").val();
    //
    // $(".holiday").text(holidayInput);
    // $(".building").text(buildingInput);
    // $(".verb1").text(verb1Input);
    // $(".creature").text(creatureInput);
    // $(".clothing").text(clothingInput);
    // $(".figure").text(figureInput);
    // $(".plural-noun1").text(plural-noun1Input);
    // $(".past-tense-verb").text(past-tense-verbInput);
    // $(".food").text(foodInput);
    // $(".plural-noun2").text(plural-noun2Input);

    $("#story").show();
    event.preventDefault();
  });
})
