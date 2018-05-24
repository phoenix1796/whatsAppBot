a = $('._3sgkv .emojitext');
a.getAttribute('title'); // either last seen or online

b = document.getElementsByClassName(
  'infinite-list-item infinite-list-item-transition'
);

function simulateClick() {
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(
    'click',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  var a = document.getElementById('gift-close');
  a.dispatchEvent(evt);
}
