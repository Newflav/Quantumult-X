if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if ('data' in body) {
        if (!body.data?.infos?.ad_content) {
            console.log('无需处理');
        } else {
            console.log(`ad_str}`);
            body.ad_content = null;

$done({ body: JSON.stringify(obj) });