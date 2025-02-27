console.log(`spotify-json-2025-01-01`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('Không cần xử lý');
}
$done({
    url
});
