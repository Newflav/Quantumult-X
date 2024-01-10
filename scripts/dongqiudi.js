var body = $response.body;
var json = JSON.parse(body);
if (json.hasOwnProperty("infos")) {
delete json["infos"];
}
$done({ body: JSON.stringify(json) });