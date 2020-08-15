// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //* Handle delete button: delete-btn
  $(".delete-btn").on("click", function (event) {
    let id = $(this).data("id");
    // Send the DELETE request.
    $.ajax(`/api/food_list/${id}`, {
      type: "DELETE",
    }).then(function () {
      console.log("Deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // ---------------------------------------------------

  //* Handle add button: add-btn
  $("#add-btn").on("click", function (event) {
    //* Make sure to preventDefault on a submit event.
    event.preventDefault();
    let foodName = $("#brg_n").val().trim();
    let foodDescrip = $("#brg_d").val().trim();
    let foodPrice = $("#brg_p").val().trim();
    let foodType = "BURGER";
    let foodRestaurant = $("#brg_r").val().trim();
    let newfood = {
      food_name: foodName,
      food_descrip: foodDescrip,
      food_type: foodType,
      price: foodPrice,
      restaurant: foodRestaurant,
    };
    console.log(newfood);
    //* Send the POST request.
    $.ajax("/api/food_list", {
      type: "POST",
      data: newfood,
    }).then(function () {
      console.log("Created new burger!");
      //* Reload the page to get the updated list
      location.reload();
    });
  });

  // ---------------------------------------------------

  //* Handle modal launch button...
  $(".updateModal-btn").on("click", function (event) {
    let button = $(this); // Button that triggered the modal
    //* Pass the id for display
    let id = button.data("id");
    //* Pass the selected burger name for display
    let name = $(this).parents("li").children("h4").text();
    //* Set the text for the modalName span to passed up name
    $("#modalName").text(name);
    //* Set the data-id attribute of the modals button to passed in ID
    $("#updateNotes-btn").attr("data-id", id);
  });

  // ---------------------------------------------------

  //* Handle update button: updateNotes-btn
  $("#updateNotes-btn").on("click", function (event) {
    //* Stop the default window refresh
    event.preventDefault();
    //* Set the button var to the current button
    let id = $(this).data("id");
    //* Set an object to entered form values
    let objColVals = {
      rating: $("input[name='rating']:checked").val(),
      notes: $("textarea[name='notes']").val(),
      devoured: "true",
    };
    //* Console log the upd object to verify the values are captured
    console.log("upd object from form values is: " + objColVals);
    //* Send the PUT request.
    $.ajax(`/api/food_list/${id}`, {
      type: "PUT",
      data: objColVals,
    }).then(function () {
      console.log("Updated!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
