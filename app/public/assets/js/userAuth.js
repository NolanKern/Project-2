const btnSeq    = $("#btnSeq");

btnSeq.click(e => {
    let cmdStr = "sequelize init";
    

    if ($('#check1').is(":checked"))
    {
        cmdStr += " init:config";
    }

    if ($('#check2').is(":checked"))
    {
        cmdStr += " init:models";
    }

    if ($('#check3').is(":checked"))
    {
        cmdStr += " init:migrations";
    }

    if ($('#check4').is(":checked"))
    {
        cmdStr += " init:seeders";
    }

    // console.log(cmdStr); 
    let command = {
        cmdStr:cmdStr
    };

    $.ajax("/api/runCmd", {
    type: "POST",
    data: command
    }).then(
    function() {
        console.log("Success");
    }
    );

});