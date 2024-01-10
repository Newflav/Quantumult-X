var body = $response.body;
var json = JSON.parse(body);

if (json.hasOwnProperty("data") && json["data"].hasOwnProperty("ad_content")) {
delete json["infos"]["ad_content"];
}

$done({ body: JSON.stringify(json) });