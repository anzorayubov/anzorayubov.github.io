$(document).ready(function () {
    $("form").submit(function () {
        var th = $(this);
        $('#loading').show();
        $.ajax({
            type: "POST",
            url: "./mail.php",
            data: th.serialize()
        }).done(function () {
            $('#loading').hide();
            $('#success-window').show();
            setTimeout(() => { th.trigger("reset") }, 1000);
        });
        return false;
    });
});
