/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-04-01
📌 Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
📌 https://www.tiktok.com/@lapho111
*******************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.plan = {
    "vendor": "apple",
    "id": "high_tier",
    "manageable": true,
    "plan_upsells": [],
    "plan_id": "go-plus",
    "upsells": [],
    "plan_name": "SoundCloud Go+"
};

obj.features = [
    {
        "name": "offline_sync",
        "enabled": true,
        "plans": [
            "mid_tier",
            "high_tier"
        ]
    },
    {
        "name": "no_audio_ads",
        "enabled": true,
        "plans": [
            "mid_tier",
            "high_tier"
        ]
    },
    {
        "name": "hq_audio",
        "enabled": true,
        "plans": [
            "high_tier"
        ]
    },
    {
        "name": "system_playlist_in_library",
        "enabled": true,
        "plans": []
    },
    {
        "name": "ads_krux",
        "enabled": false,
        "plans": []
    },
    {
        "name": "new_home",
        "enabled": true,
        "plans": []
    },
    {
        "name": "spotlight",
        "enabled": false,
        "plans": []
    }
];

body = JSON.stringify(obj);
$done({body});
