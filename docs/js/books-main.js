
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
