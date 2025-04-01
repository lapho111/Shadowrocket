/******************************
📌 Tác Giả：LapHo
📌 Cập Nhật：2025-04-01
📌 Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111

*******************************/
var objc = JSON.parse($response.body);
objc.purchaseInfo = "SUBSCRIPTION_ACTIVE";
$done({ body: JSON.stringify(objc) });
