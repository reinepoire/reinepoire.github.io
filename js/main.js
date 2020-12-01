var cards = $('.card-body');
var maxHeight = 0;

for (var i = 0; i < cards.length; i++) {
if (maxHeight < $(cards[i]).outerHeight()) {
maxHeight = $(cards[i]).outerHeight();
}
}

for (var i = 0; i < cards.length; i++) {
$(cards[i]).height(maxHeight);
}