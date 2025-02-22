/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
*******************************/

var objc = JSON.parse($response.body);

objc = {
  platform: "APPSTORE",
  productId: "com.kinemaster.kios.annual.ia4",
  expiresDate: 1741007726000,
  isSubscribed: true,
  isAutoRenew: true,
};

$done({ body: JSON.stringify(objc) });
