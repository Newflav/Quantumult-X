const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("activities/config")) {
  obj = [];
} else if (url.includes("/found")) {
  obj = [];
}

$done({ body: JSON.stringify(obj) });