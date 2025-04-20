/****************************** 
📌 Tác Giả：LapHo 
📌 Cập Nhật：2025-04-20
📌 Liên Lạc：Zalo: 0886632736   
📌 Face Book: https://www.facebook.com/lapho111 
******************************/ 
var response = JSON.parse($response.body);
if (!response.subscriber) response.subscriber = {};
response.subscriber.first_seen = "2003-02-03T03:33:33Z";
var entitlement_id = "business";
var product_id     = "com.background.business.yearly";
response.subscriber.entitlements = response.subscriber.entitlements || {};
response.subscriber.entitlements[entitlement_id] = {
  expires_date:           "2100-04-20T03:33:33Z",
  product_identifier:     product_id,
  purchase_date:          "2003-02-03T03:33:33Z"
};

response.subscriber.subscriptions = response.subscriber.subscriptions || {};
response.subscriber.subscriptions[product_id] = {
  expires_date:           "2100-04-20T03:33:33Z",
  original_purchase_date: "2003-02-03T03:33:33Z",
  purchase_date:          "2003-02-03T03:33:33Z",
  ownership_type:         "PURCHASED",
  store:                  "app_store"
};

$done({
  body: JSON.stringify(response)
});
