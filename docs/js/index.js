function gotoScienceMain() {
    window.location="./html/science-main.html";
}

$("#show-book").click(function () {
    alert('test');
    $.get("./html/test2.html", function (data) {
        $("#book-rev").html(data);
        // after loading open modal
        $("#book-modal").modal('show');
    });
});