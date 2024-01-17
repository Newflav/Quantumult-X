const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v2/article/detail")) {
  const items = [
    "ad_content",
    "column"
  ];
  if (obj?.data?.infos) {
    for (let i of items) {
      delete obj.data.infos[i];
    }
  }
} else {
  $done({});
}

$done({ body: JSON.stringify(obj) });