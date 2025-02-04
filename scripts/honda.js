const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("startFindstartFind") || url.includes("query")) {
    if (obj?.data?.length > 0) {
    obj.data = [];
  }
} else if (url.includes("pageByTypeNewV2")) {
    if (obj?.data) {
    delete obj.data;
  }
}

$done({ body: JSON.stringify(obj) });