/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
*******************************/
let objc = {
  "status" : "success",
  "response" : [
    {
      "is_eligible_for_grant" : true,
      "limitation" : {
        "max_count" : 10,
        "limits_exceeded" : false
      },
      "expire_date" : 4102444800000,
      "order_id" : "160001326559771",
      "purchase_date" : 1735689600000,
      "original_order_id" : "160001326559771",
      "reason" : "ok",
      "is_eligible_for_introductory" : false,
      "subscription_id" : "com.picsart.studio.subscription_plus_yearly",
      "is_trial" : false,
      "status" : "SUBSCRIPTION_PURCHASED",
      "plan_meta" : {
        "product_id" : "subscription_plus_yearly",
        "frequency" : "yearly",
        "scope_id" : "full",
        "id" : "com.picsart.studio.subscription_plus_yearly",
        "storage_limit_in_mb" : 5120,
        "level" : 1500,
        "type" : "renewable",
        "description" : "plus",
        "tier_id" : "gold_old",
        "permissions" : [
          "premium_tools_standard",
          "premium_tools_ai"
        ]
      }
    }
  ]
}
$done({ response: {body: JSON.stringify(objc),status: 200} }); 
