const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/visitor/home/list")) {
  if (obj.data?.floats) {
    delete obj.data.floats;
  }
}

$done({ body: JSON.stringify(obj) });