const notifyTitle = "贴吧json脚本错误";
console.log(`json-2024.1.14`);

let body = JSON.parse($response.body);
    if (body.data?.infos?.ad_content) {
    delete body.data.infos.ad_content;
console.log(`去除进入话题提醒`);
    }

body = JSON.stringify(body);

$done({
    body
});