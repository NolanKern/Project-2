const btnSeq        = $("#btnSeq");
const dwnldBtn      = $("#dwnldBtn");

dwnldBtn.click(e => {
    e.preventDefault();  //stop the browser from following

    window.location.href = '/get-file';
});

btnSeq.click(e => {
    let cmdStr = "sequelize init";

    if ($('#config-check').is(":checked"))
    {
        cmdStr += " init:config";
    }

    if ($('#migrations-check').is(":checked"))
    {
        cmdStr += " init:migrations";
    }

    if ($('#models-check').is(":checked"))
    {
        cmdStr += " init:models";
    }

    if ($('#seeders-check').is(":checked"))
    {
        cmdStr += " init:seeders";
    }

    console.log(cmdStr); 
    let command = {
        cmdStr:cmdStr
    };

    $.ajax("/api/runCmd", {
    type: "POST",
    data: command
    }).then(
    function(data) {
        console.log("Success");
        console.log("RETURNED DATA " + data);
        window.location = data.redirect;
    }
    );

});