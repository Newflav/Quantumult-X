console.log(`贴吧json-2024.1.14`);
let body = JSON.parse($response.body);

if ('data' in body) {
        if (!body.data?.infos?.ad_content) {
            console.log('无需处理');
        } else {
            console.log(`ad_str}`);
            body.ad_content = null;

body = JSON.stringify(body);

$done({
    body
});