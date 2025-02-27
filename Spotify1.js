/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
*******************************/

console.log(`spotify-json-2023.06.13`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('无需处理');
}
$done({
    url
});
