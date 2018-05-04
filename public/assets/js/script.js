$('.carousel.carousel-slider').carousel({fullWidth: true});

$('#submit').on("click", function(){
    var host = "/seqinit";
    $.ajax({
        url: host,
        method: "POST"
    }).then(function(err, res){
        if (err) throw err;
        console.log(res);
    })
});