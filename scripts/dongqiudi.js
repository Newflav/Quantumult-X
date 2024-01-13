var body = $response.body;
var json = JSON.parse(body);

if (json.hasOwnProperty("data") && json["infos"].hasOwnProperty("ad_content")) {
delete json["data"]["ad_content"];
}

$done({ body: JSON.stringify(json) });