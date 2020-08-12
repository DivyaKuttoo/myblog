
function onNext() {
  var bookElement = $('#books');
  var firstElement = bookElement.children()[0].cloneNode(true);
  bookElement.append(firstElement);
  bookElement.children()[0].remove();

};

function onPrev() {
  var bookElement = $('#books');
  var totalBooks = bookElement.children().length;
  var firstElement = bookElement.children()[0];
  var lastElement = bookElement.children()[totalBooks -1].cloneNode(true);
  bookElement.prepend(lastElement);
  var newLen = bookElement.children().length;
  bookElement.children()[newLen-1].remove();

};
/*
$("#book-rev").on("click",function(e){
  alert('test');
});
*/

$(".book-rev").click(function () {
  var book_id = this.id;
  $.get("./books/" + book_id + "_rev.html", function (data) {
    
    $("#book-modal").html(data);
      // after loading open modal
      $("#exampleModalCenter").modal('show');
  });
  
});


/*
$("#book-rev-butt").click(function () {
  
  $.get("../html/books/brief_hist_rev.html", function (data) {
  
    $("#book-modal").html(data);
      // after loading open modal
      $("#exampleModalCenter").modal('show');
  });
});
*/

