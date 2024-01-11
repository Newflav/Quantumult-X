var body = $response.body;
var json = JSON.parse(body);

// 过滤掉"user"中的"user_growth"
if (json.hasOwnProperty("thread") && json["thread"].hasOwnProperty("thread_recommend_infos")) {
delete json["thread"]["thread_recommend_infos"];
}

$done({ body: JSON.stringify(json) });