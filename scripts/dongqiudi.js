var body = $response.body;
var json = JSON.parse(body);

if (json.hasOwnProperty("data") && json["data"].hasOwnProperty("infos")) {
delete json["data"]["infos"];
}

$done({ body: JSON.stringify(json) });