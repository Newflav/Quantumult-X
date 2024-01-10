var body = $response.body;
var json = JSON.parse(body);

if (json.hasOwnProperty("ad_content")) {
delete json["ad_content"];
}

$done({ body: JSON.stringify(json) });