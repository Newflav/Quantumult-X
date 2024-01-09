var body = $response.body;
var json = JSON.parse(body);

// 过滤掉特定关键词的对象
if (json.hasOwnProperty("video_channel_info")) {
delete json["video_channel_info"];
}
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
if (json.hasOwnProperty("recom_swan_list")) {
delete json["recom_swan_list"];
}
if (json.hasOwnProperty("finance_tab")) {
delete json["finance_tab"];
}

// 过滤掉"user"中的"user_growth"
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("user_growth")) {
delete json["user"]["user_growth"];
}
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("ala_info")) {
delete json["user"]["ala_info"];
}
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("ip_address")) { delete json["user"]["ip_address"]; }
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("gift_list")) { delete json["user"]["gift_list"]; }
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("shake_ad_switch")) { delete json["user"]["shake_ad_switch"]; }
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("virtual_image_info")) { delete json["user"]["virtual_image_info"]; }
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("consume_info")) { delete json["user"]["consume_info"]; }
if (json.hasOwnProperty("user") && json["user"].hasOwnProperty("vip_show_info")) { delete json["user"]["vip_show_info"]; }

$done({ body: JSON.stringify(json) });