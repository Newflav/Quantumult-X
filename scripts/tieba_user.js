var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("vip_banner")) {
delete json["vip_banner"];
}
if (json.hasOwnProperty("namoaixud_entry")) {
delete json["namoaixud_entry"];
}
if (json.hasOwnProperty("duxiaoman_entry")) {
delete json["duxiaoman_entry"];
}
if (json.hasOwnProperty("banner")) {
delete json["banner"];
}
if (json.hasOwnProperty("recom_naws_list")) {
delete json["recom_naws_list"];
}

// 过滤掉"user"中的"user_growth"
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("user_growth")) {
delete json["user"]["user_growth"];
}
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("ip_address")) { delete json["user"]["ip_address"]; }

$done({ body: JSON.stringify(json) });