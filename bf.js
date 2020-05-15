/*
https?:\/\/apa\.bfzyapp\.com url script-response-body bo/bf.js
https?:\/\/apa\.bfzyapp\.com url script-request-body bf.js
MITM = apa.bfzyapp.com
*/
var url = $request.url;
// requestObj = JSON.parse($request.body);
var obj = JSON.parse($response.body);

if(url.indexOf("/femalePrivacyAuth") != -1){
  obj.data.showPrivateAuthStatus = 3;
}
if(url.indexOf("/viewUser") != -1){
  for(let i=0;i<obj.data.photos.length;i++){
    obj.data.photos[i].type=1;
}
}

if(url.indexOf("sendVoiceRequest") != -1){
  obj.data.price=0;
  obj.data.coin=9999;
  obj.data.allowStatus=1;
}

$done({
	body: JSON.stringify(obj)
});
