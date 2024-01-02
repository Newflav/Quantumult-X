var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("recom_ala_info")) {
delete json["recom_ala_info"];
}
if (json.hasOwnProperty("banner_list")) {
delete json["banner_list"];
}

$done({ body: JSON.stringify(json) });