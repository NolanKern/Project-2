<<<<<<< HEAD
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
=======
var card = 'start';

$('#start-card').addClass('showing');

$('button').on('click', function(){
    if (card == 'start'){

        var startPoint = $("input:radio[name ='group1']:checked").val();

        switch (startPoint) {
            case 'html':

            case 'seq-init':
                nextQ('init');

                card = 'init';
            case 'express':

            case 'handlebars': 
        }
    }
    else if (card == 'init'){
        $('.card-panel').removeClass('showing');
        $('#css-card').addClass('showing');

        card = 'css';
    }
    else if (card == 'css'){
        $('.card-panel').removeClass('showing');
        $('#start-card').addClass('showing');

        card = 'start';
    }
        
});

function nextQ(x) {
    var foo = "#" + x + "-card";


    $('.card-panel').removeClass('showing');
    $('#init-card').addClass('showing');
}

>>>>>>> a009324c292c45facecb1937d00831efd75dd010
