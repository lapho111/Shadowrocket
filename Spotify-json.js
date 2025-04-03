/******************************
📌 Tác Giả：LapHo
📌 Cập Nhật：2025-04-03
📌 Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
*****************************/

console.log(`spotify-json-2024.04.03`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('Không cần xử lý');
}
$done({
    url
});
