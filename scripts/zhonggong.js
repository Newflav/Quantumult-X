const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/visitor/home/list")) {
  if (obj.data?.floats) {
    delete obj.data.floats;
  }
if (obj?.data?.list?.length > 0) {
    obj.data.list = obj.data.list.filter(
      (i) => !["1"]?.includes(i?.type)
    );
  }
}

$done({ body: JSON.stringify(obj) });