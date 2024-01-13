var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("ad_content")) {
delete json["ad_content"];
}

$done({ body: JSON.stringify(json) });