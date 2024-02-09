const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/visitor/home/list")) {
  if (obj.data?.floats) {
    delete obj.data.floats;
  }
if (obj?.data?.list?.detail?.length > 0) {
   obj.data.list.detail = obj.data.list.detail.filter(
      (i) => !["轮播多图"]?.includes(i?.title)
    );
  }
}

$done({ body: JSON.stringify(obj) });