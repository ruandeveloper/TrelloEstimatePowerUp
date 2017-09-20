<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.trello.com/1/boards/SsTUzo2K/lists?fields=name%2Curl&key=a15c445a9a0bc0efd2332aac48bd1bfc&token=01e8f3762fa91f254aae825f349abb1ec6adb1c8fadb7f03b9d28e3e62127584",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: 19bf2f4a-7aa9-e2fa-62a2-d3e291ccae7f"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}