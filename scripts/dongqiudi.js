const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
     if ("ad_content" in obj) {
        delete ad_content;
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });