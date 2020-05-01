$(document).ready(function () {

    var submitDefBtn = $("#submitDefBtn");


    submitDefBtn.on("click", function (event) {
        // event.preventDefault();
        var term = $("#term").val();
        console.log(term);
        var definition = $("#definition").val();
        console.log(definition);
        var reference = $("#reference").val();
        console.log(reference)

        // var newDefDiv = $("<div>").addClass("definitions-display");
        var newDefCard = $("<div>").addClass("card grey darken-1 def-card");
        var newDefContent = $("<div>").addClass("card-content white-text");

        var termP = $("<span>").text(term).addClass("card-title term-title");
        var defP = $("<p>").text(definition).addClass("card-text def-card");

        var linkDiv = $("<div>").addClass("card-action");
        var defRefLink = $("<a>").attr("href", reference).attr("target", "_blank").text("Reference Link");

        linkDiv.append(defRefLink);
        newDefContent.append(termP, defP);
        newDefCard.append(newDefContent, linkDiv);
        $(".definitions-display").append(newDefCard);

    });
});
