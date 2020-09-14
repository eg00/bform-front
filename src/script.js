window.$ = window.jQuery = require('jquery');


$(document).ready(() => {

    $("form").on("submit", function (e) {

        e.preventDefault();

        const form = $(this).serialize();
         //ajax post
        $.post("https://jsonplaceholder.typicode.com/posts", form, function (res) {
            console.log(res)
        })
    })
})
