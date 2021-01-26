// put ajax requests here!

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {

    $(".devour").on("click", function () {
        const id = $(this).data("id");
        const eatChng = { devoured: true };

        $.ajax(`/api/burgers/${id}/devoured`, {
            type: "PUT",
            // Convert object to JSON
            data: JSON.stringify(eatChng),
            // Tell the server that this request contains JSON
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    })

})
