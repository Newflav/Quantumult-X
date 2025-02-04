const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("startFind") || url.includes("query") || url.includes("pageByTypeNewV2")) {
    if (obj?.data) {
    delete obj.data;
  }
}

$done({ body: JSON.stringify(obj) });