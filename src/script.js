window.$ = window.jQuery = require('jquery');


$(document).ready(() => {

    $("form").on("submit", function (e) {

        e.preventDefault();
        
        const form = $(this).serialize();
         //ajax post
        $.post("http://bform.test/api/post", form, function (res) {
            console.log(res)
        })
    })
})
