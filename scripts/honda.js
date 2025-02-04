const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("startFindstartFind") || url.includes("pageByTypeNewV2") || url.includes("query")) {
  //开屏广告
    if (obj?.data?.length > 0) {
    obj.data = [];
  }
}

$done({ body: JSON.stringify(obj) });