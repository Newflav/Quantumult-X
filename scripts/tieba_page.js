var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("recom_ala_info")) {
delete json["recom_ala_info"];
}
if (json.hasOwnProperty("banner_list")) {
delete json["banner_list"];
}

// 过滤掉"user"中的"user_growth"
if (json.hasOwnProperty("thread") && json["thread"].hasOwnProperty("thread_recommend_infos")) {
delete json["thread"]["thread_recommend_infos"];
}
if (json.hasOwnProperty("forum") && json["forum"].hasOwnProperty("banner_list")) {
delete json["forum"]["banner_list"];
}

$done({ body: JSON.stringify(json) });