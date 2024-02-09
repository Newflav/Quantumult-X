const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/visitor/home/list")) {
  if (obj.data?.floats) {
    delete obj.data.floats;
  }
if (obj?.data?.list?.detail?.more_hidden?.length > 0) {
    delete obj.data.list.detail.more_hidden
  }
}

$done({ body: JSON.stringify(obj) });