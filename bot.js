var eventFire = (el, etype) => {
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(
    etype,
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
  el.dispatchEvent(evt);
};

function rand(high, low = 0) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

var sendMessage = (chat, message) => {
  //avoid duplicate sending
  var title;

  if (chat) {
    title = chat.querySelector('.emojitext').title;
  } else {
    title = getSelectedTitle();
  }

  //add text into input field
  document.querySelector('.pluggable-input-body').innerHTML = message.replace(
    /  /gm,
    ''
  );

  //Force refresh
  event = document.createEvent('UIEvents');
  event.initUIEvent('input', true, true, window, 1);
  document.querySelector('.pluggable-input-body').dispatchEvent(event);

  //Click at Send Button
  eventFire(document.querySelector('.compose-btn-send'), 'click');
};
function openChat(chat) {
  const title = chat.querySelector('.emojitext').title;
  eventFire(chat, 'mousedown');
}

function selectChat(_chats, chatName) {
  var chat;
  for (i = 0; i < _chats.length; ++i) {
    // console.log(i)
    if (_chats[i].querySelector('.chat-title span').title == chatName) {
      // Check chat name
      chat = _chats[i];
      break;
    }
  }
  return chat;
}

(function main() {
  //Get all chats
  var _chats = document.querySelectorAll('.chat');
  var chatName = '<Contact Name>';
  var chat = selectChat(_chats, chatName);
  openChat(chat);

  var msgAry = [
    //TODO: Add messages list here
  ];
  msgCount = 0;
  sendMessage(
    chat,
    'Hi , I am Phoenix, currently i can just send a few messages that Abhishek has asked me to ,  but in time I will become smarter with time :) '
  );

  window.myStuff = setInterval(function() {
    setTimeout(function() {
      sendMessage(chat, msgAry[msgCount++]);
      if (msgCount == msgAry.length) {
        window.clearInterval(window.myStuff);
        console.log('My work is done !');
      }
    }, rand(36000));
  }, 3600000);
})();
