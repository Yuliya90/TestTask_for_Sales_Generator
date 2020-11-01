document.addEventListener("DOMContentLoaded", function(event) {

    new WOW().init();
    $('.bt2').on("click", function() {
        $("#toggle_img").attr("src", "img/e-p-min.png");
        $('.over').show();
    });
    $('.bt1').on("click", function() {
        $("#toggle_img").attr("src", "img/p-o-min.png");
        $('.over').show();
    });
    $('.popup-close_2').on("click", function() {
        $('.over').hide();
    })

    $('.header-contacts_button').on("click", function() {
        $('.overlay').show();
    });
    $('.popup-close').on("click", function() {
        $('.overlay').hide();
    })
 $('form').submit(function(event) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                alert("Сообщение успешно отправлено");
                $("form").trigger("reset");
            });
            return false;
        });
    $("#phone").mask("+7(999) 999-9999");

});
