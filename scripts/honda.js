const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("ad/startFindstartFind")) {
  if (obj?.data) {
    delete obj.data;
  }
}

$done({ body: JSON.stringify(obj) });
/pageByTypeNewV2