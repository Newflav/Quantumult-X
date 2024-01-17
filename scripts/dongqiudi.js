const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  const items = [
    "request_id",
    "ad_type",
    "ad_source",
    "image"
    
  ];
  if (obj?.data?.infos?.ad_content) {
    for (let i of items) {
      delete obj.data.infos.ad_content[i];
    }
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });