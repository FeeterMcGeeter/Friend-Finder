// ===== CAPTURING THE SURVEY INPUT =====
$("#submit").on("click", function (event) {
    event.preventDefault();

    // ===== CREATING AN OBJECT FOR THE USER'S DATA =====
    var userData = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()]
    };

    // ===== POSTING THE DATA TO THE FRIENDS API =====
    $.post("/api/friends", userData, function (data) {

        // ===== DISPLAYING THE NAME AND PHOTO OF THE "BEST MATCH" ACCORDING TO THE RESULTS OF THE SURVEY =====
        $("#nameMatch").text(data.name);
        $("#photoMatch").attr("src", data.photo);

        var profileDiv = $("<div class='profile'>");
        var profileName = data.name;
        var photoURL = data.photo;
        var header = $("<h3>").text(profileName);
        var profilePhoto = $("<img>").attr("src", photoURL);
        profileDiv.append(header, profilePhoto);
        $("#modalMatch").append(profileDiv);

        // ===== DISPLAYING A MODAL OF THE BEST MATCH =====
        $("#resultModal").modal("toggle");
    })

});