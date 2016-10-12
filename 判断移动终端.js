function isMobile(){

var ua =  navigator.userAgent;
isAndroid = /Android/i.test(ua);
isBlackBerry = /BlackBerry/i.test(ua);
isWindowPhone = /IEMobile/i.test(ua);
isIOS = /iPhone|iPad|iPod/i.test(ua);
isMobile = isAndroid || isBlackBerry || isWindowPhone || isIOS;
if(isAndroid) isMobile = 'android';
if(isBlackBerry) isMobile = 'BlackBerry';
if(isWindowPhone) isMobile = 'WindowPhone';
if(isIOS) isMobile = 'IOS';
//alert(isMobile);
return isMobile
}
