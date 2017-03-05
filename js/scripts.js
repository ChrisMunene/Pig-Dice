//business logic
function myFunction() {

    function Random() {
        return Math.floor(Math.random() * 6);
    }
    document.getElementById('field1').value = Random()
}
var numbers = [];

//user-interface logic
$(document).ready(function() {
    $("form#f1").submit(function(event) {
        event.preventDefault();
        var input = parseInt($("input#field1").val());
        var total = 0;
        var output = [];
        numbers.push(input);

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] === 0) {
                output.push();
            }
            if (numbers[i] === 1) {
                output.push("Oh Snap! Bummer! You Lose! Next Player")
            } else if (numbers[i] > 1) {
                var add = (total += numbers[i]);
                output.push("Great Job!Your New Score is"+" "+add);
            }

        }
        $("#showResults").empty();
        output.forEach(function(index) {
            $("#showResults").append("<li>" + index + "</li>");
        });
    })

    $("input#field1").val("");
})
