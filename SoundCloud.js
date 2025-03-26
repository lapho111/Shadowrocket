/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
📌 https://www.tiktok.com/@lapho111
*******************************/
var body = $response.body; 
var obj = JSON.parse(body); 

obj.features = [
    { "name": "offline_sync", "enabled": true },
    { "name": "no_audio_ads", "enabled": true },
    { "name": "hq_audio", "enabled": true },
    { "name": "system_playlist_in_library", "enabled": true },
    { "name": "ads_krux", "enabled": false },
    { "name": "new_home", "enabled": true },
    { "name": "spotlight", "enabled": true },  
    { "name": "unlimited_uploads", "enabled": true }, 
    { "name": "direct_monetization", "enabled": true }, 
    { "name": "advanced_stats", "enabled": true } 
];


body = JSON.stringify(obj);
$done({body});
