$("#success").hide();
$("#loading-btn").hide();

$(document).ready(function () {
  const url = "https://api-notarize.herokuapp.com/customer/createPublicOrder";

  $("form").submit(function (event) {
    $("#loading-btn").show();
    $("#save-btn").hide();

    event.preventDefault();

    setTimeout(() => {
      var data = $("#appointment-form").serializeArray();
      $.ajax({
        url: url,
        type: "POST",
        data: data,
        success: function (result) {
          $("#appointment").hide();
          $("#success").show();
          $("#loading-btn").hide();
          $("#save-btn").show();
        },
        error: function (error) {
          $("#loading-btn").hide();
          $("#save-btn").show();
          alert("There was something error in registering ! Try again later");
        },
      });
    }, 1500);
  });
});
