const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("ad/startFindstartFind")) {
    if (obj?.data?.length > 0) {
    obj.data = [];
  }
} else if (url.includes("/pageByTypeNewV2")) {
    if (obj?.data?.length > 0) {
    obj.data = [];
  }
} else if (url.includes("/query")) {
  //开屏广告
    if (obj?.data?.length > 0) {
    obj.data = [];
  }
}

$done({ body: JSON.stringify(obj) });