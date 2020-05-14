/*
https?:\/\/apa\.bfzyapp\.com url script-response-body bo/bf.js
https?:\/\/apa\.bfzyapp\.com url script-request-body bf.js
MITM = apa.bfzyapp.com
*/
var url = $request.url;
// let requestObj = JSON.parse($request.body);
let responseObj = JSON.parse($response.body);
if(url.indexOf("/femalePrivacyAuth") != -1){
//   requestObj.type = "3";
  responseObj.showPrivateAuthStatus = 3;
//   $done({body:JSON.stringify(requestObj)});
}
if(url.indexOf("/viewUser") != -1){
  responseObj.type = 1;
}
if(url.indexOf("/sendVoiceRequest") != -1){
  responseObj.data.price=0;
  responseObj.coin=9999;
  responseObj.data.allowStatus=1;
}
$done({body:JSON.stringify(responseObj)});
