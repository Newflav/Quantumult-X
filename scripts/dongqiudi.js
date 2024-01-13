
    if (body.data.infos.ad_content) {
        console.log(`去除进入小窗`);
        body.data.infos.ad_content = [];
    }

body = JSON.stringify(body);

$done({
    body
});