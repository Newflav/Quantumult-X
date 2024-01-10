var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("recom_ala_info")) {
delete json["recom_ala_info"];
}
if (json.hasOwnProperty("banner_list")) {
delete json["banner_list"];
}
if (json.hasOwnProperty("anti")) {
delete json["anti"];
}
if (json.hasOwnProperty("live_fuse_forum")) {
delete json["live_fuse_forum"];
}
if (json.hasOwnProperty("star_enter")) {
delete json["live_fuse_forum"];
}
if (json.hasOwnProperty("vitality_info")) {
delete json["vitality_info"];
}

// 过滤掉"user"中的"user_growth"
if (json.hasOwnProperty("thread") && json["thread"].hasOwnProperty("thread_recommend_infos")) {
delete json["thread"]["thread_recommend_infos"];
}
if (json.hasOwnProperty("forum") && json["forum"].hasOwnProperty("banner_list")) {
delete json["forum"]["banner_list"];
}
if (json.hasOwnProperty("frs_common_info") && json["frs_common_info"].hasOwnProperty("banner_list")) {
delete json["frs_common_info"]["banner_list"];
}

$done({ body: JSON.stringify(json) });