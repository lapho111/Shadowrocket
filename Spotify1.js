console.log(`spotify-json-2025.04.03`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('No treatment required');
}
$done({
    url
});
