/*
https?:\/\/apa\.bfzyapp\.com url script-response-body bo/bf.js
https?:\/\/apa\.bfzyapp\.com url script-request-body bf.js
MITM = apa.bfzyapp.com
*/
var url = $request.url;
let requestObj = JSON.parse($request.body);
var responseObj = JSON.parse($response.body);
if(url.indexOf("/femalePrivacyAuth") != -1){
//   requestObj.type = "3";
  responseObj.showPrivateAuthStatus = 3;
//   $done({body:JSON.stringify(requestObj)});
}
if(url.indexOf("/viewUser") != -1){
  for(let phonto in responseObj.data.photos){
    phonto.type = 1;
  }
//   responseObj.type = 2;
}
if(url.indexOf("/sendVoiceRequest") != -1){
  responseObj.data.price=0;
  responseObj.data.coin=9999;
  responseObj.data.allowStatus=1;
}
console.log(responseObj);
$done({body:JSON.stringify(responseObj)});
