$(".carousel.carousel-slider").carousel({ fullWidth: true });

$("#initialize").on("submit", function(e) {
  e.preventDefault();
  
  var arr = {
      initz: []
  };

  $(this)
    .find(":checkbox:checked")
    .each(function(index, val) {
      var box = val.defaultValue;
      arr.initz.push(box);
    });

  console.log(arr);
  
  var host = "/seqinit";
  $.ajax({
    url: host,
    method: "POST",
    data: arr
  }).then(function(err, res) {
    if (err) throw err;
    console.log(res);
  });
});

var card = "start";

$("#start-card").addClass("showing");

$("button").on("click", function() {
  if (card == "start") {
    var startPoint = $("input:radio[name ='group1']:checked").val();

    switch (startPoint) {
      case "html":

      case "seq-init":
        nextQ("init");

        card = "init";
      case "express":

      case "handlebars":
    }
  } else if (card == "init") {
    $(".card-panel").removeClass("showing");
    $("#css-card").addClass("showing");

    card = "css";
  } else if (card == "css") {
    $(".card-panel").removeClass("showing");
    $("#start-card").addClass("showing");

    card = "start";
  }
});

function nextQ(x) {
  var foo = "#" + x + "-card";

  $(".card-panel").removeClass("showing");
  $("#init-card").addClass("showing");
}
