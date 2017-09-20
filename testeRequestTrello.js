var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.trello.com/1/boards/SsTUzo2K/lists?fields=name%2Curl&key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });