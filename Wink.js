/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
******************************/

var body = $response["body"];
var responseJson = JSON.parse(body);

responseJson["data"] = {
    "active_sub_type": 2,
    "account_type": 1,
    "sub_type_name": "Gia hạn",
    "active_sub_order_id": "7069961436604422668",
    "trial_period_invalid_time": "3249550800000",
    "current_order_invalid_time": "7069961436340181123",
    "active_order_id": "70699614363340181123",
    "limit_type": 0,
    "use_vip": true,
    "have_valid_contract": true,
    "derive_type_name": "Thành viên thường",
    "derive_type": 1,
    "in_trial_period": false,
    "is_vip": true,
    "membership": {
        "id": "1230010086",
        "display_name": "Thành viên Wink",
        "level": 1,
        "level_name": "Thành viên thường"
    },
    "active_promotion_status_list": [2],
    "sub_type": 2,
    "account_id": "1230010086",
    "invalid_time": "4102444800000", 
    "valid_time": "1735689600000", 
    "active_product_id": "1230010086",
    "active_promotion_status": 2,
    "show_renew_flag": true
};

$done({ body: JSON.stringify(responseJson) });
