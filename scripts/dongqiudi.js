console.log(`json-2024.1.13`);
let body = JSON.parse($response.body);

    if (body.data.infos.ad_content) {
        console.log('去除横幅广告');
        body.data.infos.ad_content = [];
    }
    
body = JSON.stringify(body);

$done({
    body
});